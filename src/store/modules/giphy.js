import { giphy } from "@/api"

export default {
	state: {
		response: null,
	},

	actions: {
		async getRandomGiphyCollection({dispatch, commit}) {
			const response = await giphy.getRandomGiphy();
			commit('SET_RESPONSE', response)
		}
	}, 

	mutations: {
		SET_RESPONSE(state, data) {
			state.response = data
		}
	}
}