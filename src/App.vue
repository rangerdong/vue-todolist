<template>
  <div id="app">
    <h1>{{ prod }}</h1>
    <img src="./assets/logo.png">
    <header-todo total='1231421' v-on:listenChild="clearOrder"></header-todo> 
    <router-view></router-view>
    <button v-on:click="getItems">获取route内的items</button>

  </div>
</template>

<script>
import HeaderTodo from './components/header'
export default {
  name: 'app',
  data: function () {
    return {
      prod: 'This is todolist prod'
    }
  },
  components: {HeaderTodo},
  methods: {
    getItems: function () {
      console.log(this.items)
    },
    clearOrder: function (msg) {
      if (msg === true) {}
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
