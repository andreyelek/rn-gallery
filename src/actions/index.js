import api from "../api";
import { createAction } from "redux-act";


 
//export const simpleActions = [...[incrementPages, resetPages, requestPhotos, recievePhotos] = new Array(4).map(createAction)]

export const incrementPages = createAction()
export const resetPages = createAction()
export const requestPhotos = createAction()
export const recievePhotos = createAction()

export const handleLoadMore = () => {
	 incrementPages()
	 makeRemoteRequest();   
  };

export const handleRefresh = () => {
   resetPages()
   makeRemoteRequest();
  };


export const makeRemoteRequest = () =>
  async (dispatch, getState) => {
  dispatch(requestPhotos())
  const page = getState().page
  const res = await api.getPhotos(page)
  dispatch(recievePhotos([res.data.photos, page]))
 }

