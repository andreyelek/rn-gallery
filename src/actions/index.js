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

  
 /*catch (e) {
      console.error(e)
      errorResponceUserInfo(e.message ? e.message : e);
    }*/


export const makeRemoteRequest = () =>
  async (dispatch, getState) => {
   dispatch(requestPhotos())
   page = getState().page
  	  try {
  	  	res = await api.getPhotos(page)
  	  }
      catch(e){
        console.log(e, e.name, e.message, res.error)
        return
      }
   dispatch(recievePhotos(res.data.photos, page))
 }

