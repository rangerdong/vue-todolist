<template>
  <div class="hello">
    {{ fromheader }}
    <input v-model="newTodo" v-on:keyup.enter="addNew" placeholder="add a new todo item" />
    <ul>
        <li v-for="item in items" v-bind:class="{finish:item.isDone}" v-on:click="toggleDone(item)">
            {{item.todo}}
        </li>
    </ul>
  </div>
</template>

<script>
import Store from '../storage.js'
export default {
  name: 'hello',
  data () { // same like as data: function() {}
    return {
      msg: 'This is todo list prod',
      items: Store.fetch(),
      newTodo: '',
      fromheader: ''
    }
  },
  methods: {
    toggleDone: function (item) {
      item.isDone = !item.isDone
      this.items.sort(Store.sortItem)
    },
    addNew: function () {
      if (this.newTodo.length) {
        this.items.push({
          todo: this.newTodo,
          isDone: false
        })
        this.items.sort(Store.sortItem)
        this.newTodo = ''
      }
    },
    clearOrder: function (msg) {
      console.log(msg)
      this.fromheader = 'clear list'
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
