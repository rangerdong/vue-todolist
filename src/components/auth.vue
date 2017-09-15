<template>
    <div class="auth">
        <ul>
            <li>auth: {{ name }}</li>
            <li>date: {{ date }}</li>
            <li>github: <a target="_blank" v-bind:href="github">{{github}}</a> </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: 'auth',
  data () {
    return {
      name: 'Ranger',
      date: '2017-09-11',
      github: 'https://github.com/rangerdong'
    }
  }
}
</script>
