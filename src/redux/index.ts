import { combineReducers } from 'redux';
import { ShellState, shellReducer, shellActions } from './shell';
import { $call } from 'utility-types';

export interface RootState {
    shell: ShellState;
}

const returnsOfActions = [
    // FIXME : polyfills
    ...Object.values(shellActions),
  ].map($call);

export type RootAction = typeof returnsOfActions[number];

export const rootReducer = combineReducers<RootState, RootAction>({
    shell: shellReducer,
});
