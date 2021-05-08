import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";

const reducers = {  };

export default function configureStore(initialState = {}) {
  const composeEnhancer =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    combineReducers<any>({
      ...reducers,
    }),
    initialState,
    composeEnhancer(applyMiddleware(thunk))
  );
}
