import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { assignAll } from "redux-act";
import reducer from "./reducers";
import {incrementPages, resetPages, requestPhotos, recievePhotos}  from "./actions";
import Main from "./components/main";

const actions = {incrementPages, resetPages, requestPhotos, recievePhotos}
let middleware = [thunk];
/*if (process.env.NODE_ENV !== "production") {
  middleware.push(logger());
}*/
const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

assignAll(actions, store);

const Home = () => (
  <Provider store={store}>
    <Main/>
  </Provider>
)

export default Home;