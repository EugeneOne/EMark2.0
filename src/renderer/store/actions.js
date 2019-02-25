import Vue from 'vue'
import $http from '@config/http'
import $api from '@config/api'

export default {
	sertTxt: ({ commit }, value) => {
		commit('SERT_TXT', value)
	},
	showType: ({ commit }, value) => {
		commit('SHOW_TYPE', value)
	},
	isSave: ({ commit }, value) => {
		commit('IS_SAVE', value)
	},
	filePath: ({ commit }, value) => {
		commit('FILE_PATH', value)
	},
	showList: ({ commit }) => {
		commit('SHOW_LIST')
	},
	getAllTags: ({ commit }) => {
		return new Promise((resolve, reject) => {
			$http($api.getAllTags).then(res => {
				commit('GET_ALL_TAGS', res.data)
			})
		})
	}
}
