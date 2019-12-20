<template>
  <div id="app">
    <img src="./assets/logo.png">
    {{#router}}
    <router-view/>
    {{else}}
    <ThreePage/>
    {{/router}}
  </div>
</template>

<script>
{{#unless router}}
import ThreePage from './components/ThreePage'

{{/unless}}
export default {
  name: 'App'{{#router}}{{else}},
  components: {
    ThreePage
  }{{/router}}
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
