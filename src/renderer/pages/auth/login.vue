<template>
  <div class="login">
      <label>用户名</label>
      <input type="text" v-model="name">
      <label>密码</label>
      <input type="text" v-model="password">
      <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            name: '',
            password: ''
        }
    },
    methods: {
        login() {
            const params = {
                name: this.name,
                password: this.password
            }
            this.$http.post(this.$api.login, params).then(res => {
                if(res.code === 0) {
                    this.$router.push({ name: 'ArticleList' })
                }
            })
        }
    }
}
</script>

<style>

</style>