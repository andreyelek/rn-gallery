import { createReducer } from "redux-act";
import * as act from "../actions";
import { combineReducers } from "redux";
combineReducers


const page = createReducer({
  [act.incrementPages]: (state) => state + 1,
  [act.resetPages]: (state) => 1
}, 1);

const photos = createReducer({
  [act.recievePhotos]: (state, payload,page) => {
  	photos = page === 1 ? res.data.photos : [...this.state.photos, ...res.data.photos]
  	payload}

}, []);

const loading = createReducer({
  [act.requestPhotos]: (state) => true,
  [act.recievePhotos]: (state) => false
}, false);

const refreshing = createReducer({
  [act.resetPages]: (state) => true,
  [act.recievePhotos]: (state) => false
}, false);


const rootReducer = combineReducers({
  page,
  photos,
  loading,
  refreshings
});

export default rootReducer;
