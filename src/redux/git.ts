// just a little test with redux-thunk
// great for simplicity, but not as good as redux-saga for every day use, in my opinion
// some issues with Redux 4 and TypeScript
// see https://redux.js.org/advanced/async-actions

import { GitState } from './git';
import { combineReducers } from 'redux';
import { RootAction, RootState } from './';
import { Moment } from 'moment';
import update from 'immutability-helper';
import { AsyncState, defaultAsyncState } from './async-helpers';
import { createAction, getType } from 'typesafe-actions';
import { default as Github } from 'github-api';
import * as moment from 'moment';

export type AsyncCommitDates = {[key in Branche]: AsyncState<Moment>};

export type GitState = Readonly<{
    commitDates: AsyncCommitDates;
}>;

export const gitActions = {
    requestCommitDate: createAction('[Git - commit date] request', (branche: Branche) => ({
        type: '[Git - commit date] request',
        branche,
    })),
    receiveCommitDate: createAction('[Git - commit date] receive', (branche: Branche, commitDate: Moment) => ({
        type: '[Git - commit date] receive',
        commitDate,
        branche,
        receivedAt: new Date(),
    })),
};

export function fetchCommitDates() {
    const action: any = async (dispatch: any) => {
        const repo = (new Github()).getRepo('noelmace', 'nmc-dot-com');

        const getOne = async (branche: Branche) => {
            dispatch(gitActions.requestCommitDate(branche));
            const res = await repo.getBranch(branche);
            const date = moment(res.data.commit.commit.committer.date.slice(0, -1)).add(1, 'h');
            return dispatch(gitActions.receiveCommitDate(branche, date));
        };
        
        let rslt = null;
        try {
            rslt = await Promise.all([getOne(Branche.develop), getOne(Branche.master)]);
        } catch (error) {
            // tslint:disable-next-line:no-console
            console.log('An error occurred.', error);
        }
        return rslt;
    };
    // FIXME : this is just a temporary workaround with redux-thunk TS typing
    // see https://github.com/gaearon/redux-thunk/pull/180
    action.type = '[Git - commit date] fetch';
    return action;
}

export enum Branche {
    develop = 'develop',
    master = 'master',
}

const defaultState: GitState = {
    commitDates: {
        [Branche.develop]: defaultAsyncState,
        [Branche.master]: defaultAsyncState,
    }
};

export const getCommitDates = (state: RootState) => state.git.commitDates;

export const gitReducer = combineReducers<GitState, RootAction>({
    commitDates: (state = defaultState.commitDates, action) => {
        switch (action.type) {
            case getType(gitActions.requestCommitDate):
                return update(state, {
                    [action.branche]: {
                        isFetching: {$set: true},
                    }
                });
            case getType(gitActions.receiveCommitDate):
                return update(state, {
                    [action.branche]: {
                        isFetching: {$set: false},
                        lastUpdated: {$set: action.receivedAt},
                        data: {$set: action.commitDate},
                    }
                });
            default:
                return state;
        }
    },
});
