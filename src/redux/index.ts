import { gitActions, GitState, gitReducer } from './git';
import { combineReducers } from 'redux';
import { ShellState, shellReducer, shellActions } from './shell';
import { $call } from 'utility-types';

export interface RootState {
    shell: ShellState;
    git: GitState;
}

// react-actions doesn't play well with TypeScript, and doesn't have enough contributors. But it's a great project.
// TODO : Re-try to use it instead of typesafe-actions if using flow instead of TS and/or after some PRs.

const returnsOfActions = [
    // FIXME : polyfills
    ...Object.values(shellActions),
    ...Object.values(gitActions),
  ].map($call);

export type RootAction = typeof returnsOfActions[number];

export const rootReducer = combineReducers<RootState, RootAction>({
    shell: shellReducer,
    git: gitReducer,
});
