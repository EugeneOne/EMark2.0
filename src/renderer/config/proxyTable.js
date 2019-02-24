module.exports = {
	'/mock': {
		target: 'http://yapi.avatarfield.com/mock/253',
		changeOrigin: true,
		pathRewrite: {
			'^/mock': '/'
		}
	},
	'/api': {
		target: 'http://127.0.0.1:3000',
		changeOrigin: true
	},
	'/socket.io/*': {
		target: 'http://frontdev.histest.hillinsight.com',
		ws: true,
		changeOrigin: true
	}
}
