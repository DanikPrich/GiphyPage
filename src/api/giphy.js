import axios from 'axios'

export default class GiphyService {
	async getRandomGiphy() {
		return await axios.get('https://api.giphy.com/v1/gifs/random?api_key=V2xSkmiZWP76F05cPbtLcBZUAfNg9Je3&tag=&rating=g')
	}
}