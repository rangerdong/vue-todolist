<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input v-model="newTodo" v-on:keyup.enter="addNew" />
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
      newTodo: ''
    }
  },
  methods: {
    toggleDone: function (item) {
      item.isDone = !item.isDone
    },
    addNew: function () {
      console.log(this.newTodo.length)
      if (this.newTodo.length) {
        this.items.push({
          todo: this.newTodo,
          isDone: false
        })
        this.newTodo = ''
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
