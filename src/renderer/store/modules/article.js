/**
 * 文章相关
 */
import Http from '@config/http'
import Api from '@config/api'

const initialState = {
    list: [],
    current: {}
};

const actions = {
    // 当前选中文章
	getCurrentArticle: ({ commit, rootState }, value) => {
        commit('SET_CURRENT', value);
        commit('SET_INPUT', { value: value.article_content, rootState});
    },
    // 所有文章
    getAllArticle: ({ commit }, params) => {
        return Http(Api.getArticle, params).then(res => {
            commit('SERT_ARTICLE_LIST', res.data.articleList);
        })
    },
    editArticle: ({ commit }, params) => {
        return Http.post(Api.editArticle, params).then(res => {
            console.log(res);
        })
    },
};

const getters = {};

const mutations = {
	SET_CURRENT: (state, value) => {
		state.current = value
	},
	SERT_ARTICLE_LIST: (state, value) => {
		state.list = value
    },
    SET_INPUT: (state, { value, rootState }) => {
		rootState.markDown.articleList.content = value
    },

};

export default {
    namespaced: true,
    state: initialState,
    actions,
    getters,
    mutations,
};
