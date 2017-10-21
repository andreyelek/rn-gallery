import { createReducer } from "redux-act";
import * as act from "../actions";
import { combineReducers } from "redux";

const filterPhoto = (state, payload,pag) =>(
      photos = page === 1 ? payload.data.photos : [...state.photos, ...payload.data.photos]
)

const page = createReducer({
  [act.incrementPages]: (state) => state + 1,
  [act.resetPages]: (state) => 1
}, 1);

const photos = createReducer({
  [act.recievePhotos]: (state, payload,page) => filterPhoto(state, payload,page)    
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
  refreshing
});

export default rootReducer;
