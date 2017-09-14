<template>
  <div class="header">
    <h1>Todolist 总数：{{ total }}</h1>
    <button v-on:click="clearList" >清除list</button>
  </div>
</template>
<script>
export default {
  name: 'header',
  props: ['total'],  // 子组件注册父组件传递的值
  data () {
    return {
      total: this.total
    }
  },
  methods: {
    clearList: function () {
      this.$emit('listenChild', true)  // 向父组件发送消息
      this.total = 0
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
