<template>
<div>
  <h1>{{ msg }}</h1>
  <button v-on:click="clickHeader" >头部按钮</button>
</div>
</template>
<script>
export default {
  data () {
    msg: '点击之前'
  },
  methods: {
    clickHeader() {
      this.msg = '点击之后'
    }
  }
}
</script>

<style scoped="">
h1 {
  font-weight: normal;
}
</style>
