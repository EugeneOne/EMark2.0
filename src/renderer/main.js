import Vue from 'vue'
import Http from '@config/http'
import Api from '@config/api'
import App from './App'
import router from './router'
import store from './store'
console.log('vue:', Vue)
import ElementUI from 'element-ui'
import './assets/theme.scss'
import './assets/reset.css'
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.prototype.$api = Api
Vue.prototype.$http = Http
Vue.config.productionTip = false
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
	components: { App },
	router,
	store,
	template: '<App/>'
}).$mount('#app')
