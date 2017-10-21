import axios from "axios"
const api = {
    async getPhotos (page) {
    const url = `https://api.500px.com/v1/photos?feature=popular&consumer_key=wB4ozJxTijCwNuggJvPGtBGCRqaZVcF6jsrzUadF&page=${page}`
        return await axios(url)
    }
}
export default api
