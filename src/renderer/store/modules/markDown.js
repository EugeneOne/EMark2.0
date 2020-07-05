/* eslint-disable no-unused-vars */
/**
 * markDown编辑器相关
 */
const marked = require('marked')
const highlight = require('highlight.js');
marked.setOptions({
    highlight: function(code) {
        return highlight.highlightAuto(code).value;
    }
})

const initialState = {
    articleList: {
        content: ''
    },
    showType: '3',
    isNeedSave: false,
    filePath: '',
    showList: false
	
};

const actions = {
	sertTxt: ({ commit }, value) => {
		commit('SERT_TXT', value)
	},
	setShowType: ({ commit }, value) => {
		commit('SHOW_TYPE', value)
	},
	isSave: ({ commit }, value) => {
		commit('IS_SAVE', value)
	},
	setfilePath: ({ commit }, value) => {
		commit('FILE_PATH', value)
	},
	articleListSwitch: ({ commit }) => {
		commit('SHOW_LIST')
	}

};

const getters = {
    toMd: state => {
        return marked(state.articleList.content)
    }
};

const mutations = {
	SERT_TXT: (state, value) => {
		// localStorage.article = value;
		state.articleList.content = value
	},
	SHOW_TYPE: (state, value) => {
		state.showType = value
	},
	IS_SAVE: (state, value) => {
		state.isNeedSave = value
	},
	FILE_PATH: (state, value) => {
		state.filePath = value
	},
	SHOW_LIST: state => {
		state.showList = !state.showList
	}

};

export default {
    namespaced: true,
    state: initialState,
    actions,
    getters,
    mutations,
};
