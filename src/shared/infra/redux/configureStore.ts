import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import tenants from "../../../modules/tenants/redux/reducers";

const reducers = { tenants };

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
