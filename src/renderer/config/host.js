const apiHostMap = {
    development: {
      host: 'http://localhost:8090/',
    },
    staging: {
      host: 'http://localhost:8090/',
    },
    production: {
      host: 'http://localhost:8090/',
    },
  };
  export default apiHostMap[process.env.NODE_ENV || 'production'];