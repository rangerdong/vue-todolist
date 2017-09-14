<template>
  <div id="app">
    <h1>{{ prod }}</h1>
    <img src="./assets/logo.png">
    <header-todo v-bind:total="itemTotal" v-on:listenChild="clearOrder"></header-todo>
    <router-view v-bind:destroy="isDestroy" v-on:changeItem="listenItem" v-on:sendItemLen="initItem"></router-view>
    <button v-on:click="getItems">获取route内的items</button>

  </div>
</template>

<script>
import HeaderTodo from './components/header'
export default {
  name: 'app',
  data: function () {
    return {
      prod: 'This is todolist prod',
      itemTotal: 0,
      isDestroy: false
    }
  },
  components: {HeaderTodo},
  methods: {
    getItems: function () {
      console.log(this.items)
    },
    clearOrder: function (msg) {
      if (msg === true) {
        this.isDestroy = true
      }
    },
    listenItem: function (msg) {
      if (msg === 'increment') {
        this.itemTotal += 1
      } else if (msg === 'deduce') {
        this.itemTotal -= 1
      } else {
        this.itemTotal = this.itemTotal
      }
    },
    initItem: function (msg) {
      this.itemTotal = msg
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
