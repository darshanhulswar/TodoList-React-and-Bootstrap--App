import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import { reducer } from "../reducers/todo.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(ReduxThunk))
);
