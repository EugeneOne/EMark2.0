<template>
  <div id="app">
    <router-view></router-view>
    <div class="reload" @click="reload">刷新</div>
  </div>
</template>

<script>
export default {
  name: 'emark',
  methods: {
    reload() {
      window.location.reload()
    }
  }
}
</script>

<style lang="scss">
.reload {
  position: fixed;
  bottom: 100px;
  right: 100px;
  background: rgba(0,0,0,.1);
  border-radius: 100%;
  height: 50px;
  width: 50px;
}
</style>
