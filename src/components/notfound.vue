<template>
    <div id="notFound">
        <img src="../assets/error.png" alt="mensaje error 404 paágina no encontrada">
        <br>
        <button class="btn btn-primary"><RouterLink id="linkVolver" to="/">Ir a inicio</RouterLink></button>
    </div>
</template>

<script>

export default {
    name: 'notfound',
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

#notFound {
    color: aliceblue;
    padding-bottom: 300px;
    padding-top: 48px;
}

img{
    margin-bottom: 32px;
}

button{
    background-color: #ff6b21;
    border: 1px solid #ff6b21;
    font-weight: 500;
}

#linkVolver{
    color: #ffffff;
    margin-top: 32px;
    text-decoration: none;
}



</style>