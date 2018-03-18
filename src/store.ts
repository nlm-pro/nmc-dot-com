import { createStore, applyMiddleware } from 'redux';
import { RootState, rootReducer } from './redux';
import thunkMiddleware from 'redux-thunk';

function configureStore(initialState?: RootState) {
  // create store
  return createStore(
    rootReducer,
    initialState!,
    applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
    )
  );
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
