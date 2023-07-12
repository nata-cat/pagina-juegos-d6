<template>
    <nav class="navbar bg-light">
  <div class="container-fluid">
    <router-link to="/">
      <a class="navbar-brand" href="">
      <img src="../assets/logo.png" alt="Logo" height="32" class="d-inline-block align-text-top">
      Games Review
    </a>
    </router-link>
  </div>
</nav>
</template>

<script>

export default {
    name: 'headerboot',
    props: [],
    data(){
       return{
        
       }
    },
    methods:{

    }
}

</script>

<style scoped>

a{
  text-decoration: none;
}

</style>