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

export type GitState = Readonly<{
    commitDates: {[key in Branche]: AsyncState<Moment>};
}>;

export const gitActions = {
    requestCommitDate: createAction('[Git - commit date] request', (branche: string) => ({
        type: '[Git - commit date] request',
        branche,
    })),
    receiveCommitDate: createAction('[Git - commit date] receive', (branche: string, commitDate: Moment) => ({
        type: '[Git - commit date] receive',
        commitDate,
        branche,
        receivedAt: new Date(),
    })),
};

export function fetchCommitDate(branch: string) {
    const action: any = async (dispatch: any) => {
        dispatch(gitActions.requestCommitDate(branch));
        const repo = (new Github()).getRepo('noelmace', 'nmc-dot-com');
        try {
            const res = await repo.getBranch(branch);
            const date = moment(res.data.commit.commit.committer.date.slice(0, -1)).add(1, 'h');
            return dispatch(gitActions.receiveCommitDate(branch, date));
        } catch (error) {
            // tslint:disable-next-line:no-console
            console.log('An error occurred.', error);
        }
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

export const getCommit = (state: RootState, branche: Branche) => state.git.commitDates[branche];

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
