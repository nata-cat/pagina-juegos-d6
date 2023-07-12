<template>
  <nav>
   <header-boot></header-boot>
  </nav>
  <router-view/>
</template>

<script>
import headerBoot from './components/headerBoot.vue';

export default {

  name:'app',
  components:{
    headerBoot,
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgb(36, 4, 79);

}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
