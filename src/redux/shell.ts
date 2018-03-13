import { combineReducers } from 'redux';
import { createAction } from 'typesafe-actions';
import { getType } from 'typesafe-actions';
import { RootAction, RootState } from './';

export type ShellState = Readonly<{
     readonly title: string;
}>;

export const shellActions = {
  setTitle: createAction('SET_TITLE', (title: string) => ({
    type: 'SET_TITLE',
    payload: title,
  })),
};

export const getTitle = (state: RootState) => state.shell.title;

const defaultState: ShellState = { title: 'noelmace.com' };

export const shellReducer = combineReducers<ShellState, RootAction>({
  title: (state = defaultState.title, action) => {
    switch (action.type) {
      case getType(shellActions.setTitle):
        return action.payload || defaultState.title;
      default:
        return state;
    }
  },
});