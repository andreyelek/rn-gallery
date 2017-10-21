import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import { assignAll } from "redux-act";
import reducer from "./reducers";
import {incrementPages, resetPages, requestPhotos, recievePhotos}  from "./actions";
import Main from "./components/main";

const actions = {incrementPages, resetPages, requestPhotos, recievePhotos}
const middleware = [thunkMiddleware,createLogger];
/*if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}*/
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

assignAll(actions, store);

const Main = () => (
  <Provider store={store}>
    <Main/>
  </Provider>
)


export default Main;