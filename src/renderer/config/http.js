import axios from 'axios'
import { Message, Loading } from 'element-ui'
import router from '../router'
import HOST from './host';

axios.defaults.timeout = 80000;
console.log('HOST:', HOST.host);
axios.defaults.baseURL = HOST.host;
let loadingInstance = null

// request拦截器
axios.interceptors.request.use(
	config => {
		if (!config.notLoading) {
			loadingInstance = Loading.service({
				fullscreen: true
			})
		}
		return config
	},
	error => {
		// Do something with request error
		console.log(error) // for debug
		if (loadingInstance) {
			loadingInstance.close()
		}
		Message.error({
			message: '加载超时'
		})
		return Promise.reject(error)
	}
)

// response拦截器
axios.interceptors.response.use(
	response => {
		const code = response.data.code;
		console.log('code:', code);
		setTimeout(function() {
			if (loadingInstance) {
				loadingInstance.close()
			}
		}, 250)
		if (code === 0) {
			return response.data
		} else {
			Message({
				message: response.data.msg || '出错了, 请重试',
				type: 'error',
				duration: 3 * 1000
			})
			return Promise.reject(new Error(response.data.msg))
		}
	},
	error => {
		console.log('err' + error) // for debug
		if (loadingInstance) {
			loadingInstance.close()
		}
		Message({
			message: error.msg || error.message,
			type: 'error',
			duration: 3 * 1000
		})
		return Promise.reject(error)
	}
)

export default axios
