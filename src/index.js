import React from "react";
import { createStore, applyMiddleware,compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import logger from "redux-logger"
import { assignAll } from "redux-act";
import reducer from "./reducers";
import {incrementPages, resetPages, requestPhotos, recievePhotos}  from "./actions";
import Main from "./home";
import { composeWithDevTools } from 'remote-redux-devtools';


const actions = {incrementPages, resetPages, requestPhotos, recievePhotos}
let middleware = [thunk, logger()];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware)) 
);

assignAll(actions, store);

const Home = () => (
  <Provider store={store}>
    <Main/>
  </Provider>
)

export default Home;