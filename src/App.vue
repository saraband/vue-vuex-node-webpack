/* eslint-disable */
<template>
  <div id='app'>
    <LoginWidget v-if='!isConnected'/>
    <router-view v-if='isConnected'></router-view>
  </div>
</template>

<script>
import LoginWidget from './components/LoginWidget'
import { mapState } from 'vuex'

export default {
  name: 'app',
  components: {
    LoginWidget
  },
  computed: {
    ...mapState(['isConnected'])
  }
}
</script>

<style lang='scss'>
* {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}
</style>
