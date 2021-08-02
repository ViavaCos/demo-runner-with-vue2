<template>
  <div id="app">
    <div id="nav">
      <router-link v-for="route in routes" :key="route.name" :to="route.path">
        {{ route.name }}
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import router from './router'
export default {
  name: 'APP',
  data(){
    return {
      routes: router.options.routes || []
    }
  }
}
</script>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  display: flex;
  flex-wrap: nowrap;
  padding: 2px;
  height: 20px;
  word-break: keep-all;
  overflow-x: auto;
  overflow-y: hidden;
}

#nav a {
  flex: 1;
  width: fit-content;
  padding: 0 2px;
  font-weight: bold;
  color: #333333;
  &:nth-child(n+2){
    border-left: 1px solid #999;
  }
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
