<template>
  <div id="app">
    <h1>{{ prod }}</h1>
    <img src="./assets/logo.png">
    <router-view></router-view>
    <header-todo v-bind:total="itemTotal" v-on:listenChild="clearOrder"></header-todo>
    <div class="hello">
      <input v-model="newTodo" v-on:keyup.enter="addNew" placeholder="add a new todo item" />
      <ul>
        <li v-for="item in items" v-bind:class="{finish:item.isDone}" v-on:click="toggleDone(item)">
          {{item.todo}}
        </li>
      </ul>
    </div>
    <button v-on:click="getItems">获取route内的items</button>

  </div>
</template>

<script>
import HeaderTodo from './components/header'
import Hello from './components/Hello'
import Store from './storage'
export default {
  name: 'app',
  data: function () {
    return {
      prod: 'This is todolist prod',
      itemTotal: 0,
      isDestroy: false,
      items: Store.fetch(),
      newTodo: ''
    }
  },
  mounted () {
    this.itemTotal = Store.fetch().length
  },
  components: {HeaderTodo, Hello},
  methods: {
    getItems: function () {
      console.log(this.items)
    },
    clearOrder: function (msg) {
      if (msg === true) {
        this.items = []
        this.itemTotal = 0
      }
    },
    toggleDone: function (item) {
      item.isDone = !item.isDone
      this.items.sort(Store.sortItem)
    },
    addNew: function () {
      if (this.newTodo.length) {
        this.items.push({
          todo: this.newTodo,
          isDone: false,
          date: Date.parse(new Date())
        })
        this.items.sort(Store.sortItem)
        this.newTodo = ''
        this.itemTotal += 1
      }
    }
  },
  watch: { // 监听data值变化
    items: {
      handler: function (val, oldVal) {
        Store.save(val)
      },
      deep: true
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
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: square;
  padding: 0;
}

li {

}

.finish {
  text-decoration: line-through;
}

a {
  color: #42b983;
}
</style>
