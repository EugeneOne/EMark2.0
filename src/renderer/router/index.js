import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Login',
			component: require('@/pages/auth/login').default
		},
		{
			path: '/edit',
			name: 'Markdown',
			component: require('@/pages/mdEdit/markdown').default
		},
		{
			path: '*',
			redirect: '/'
		}
	]
})
