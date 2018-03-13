import { createStore } from 'redux';
import { RootState, rootReducer } from './redux';

function configureStore(initialState?: RootState) {
  // create store
  return createStore(
    rootReducer,
    initialState!,
  );
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
