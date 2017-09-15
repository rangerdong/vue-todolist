<template>
  <div class="header">
    <h1>Todolist 总数：{{ total }}</h1>
    <button v-on:click="clearList" >清除list</button>
    <span> 清楚次数： {{ fromFather }}</span>
  </div>
</template>
<script>
import Hub from '../EventHub'
export default {
  name: 'header',
  props: ['total'],  // 子组件注册父组件传递的值
  data () {
    return {
      fromFather: 0
    }
  },
  mounted () {
    console.log(this.fromFather)
    let headerVue = this
    Hub.$on('destroyItems', function (msg) {
      console.log('come from father')
//      console.log(this)
      headerVue.fromFather += 1
//      this.fromFather = 'come from father'  //不能用this 不然作用域是存在与hub下
    })
  },
  methods: {
    clearList: function () {
      this.$emit('listenChild', true)  // 向父组件发送消息
    }
  }
}
</script>

<style scoped>
h1 {
  font-weight: normal;
}
</style>
