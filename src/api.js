import axios from "axios"
const api = {
    async getPhotos (page) {
    const apiUrl = `https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF&page=${page}`
    //const proxy = "https://cors-anywhere.herokuapp.com/";
    //const url = proxy + apiUrl

    try {
    	return await axios.get(apiUrl)
    	}
    catch(e) {
      console.log(e.message, e.name)
       }
    
    }
   
}
export default api
