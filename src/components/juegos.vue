<template>
    <div id="juegos">
        <h1>Biblioteca de juegos</h1>

        <div class="contenedorTarjetas">
        <div v-for="(juego,index) in juegos" :key="index" class="card m-2" id="cardJuegos">
            <img :src="juego.background_image" class="card-img-top" alt="..." style="height: 12rem;">
            <div class="card-body">
                <h5 class="card-title"> {{ juego.name }} </h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item text-start"> Rating: {{ juego.rating }}</li>
                <li class="list-group-item text-start"> Released: {{ juego.released }}</li>
                <li class="list-group-item text-start"> Update: {{ juego.updated }}</li>
            </ul>
            <div class="card-body">
                <a id="botonOpinar" v-on:click="mostrarOpiniones(juego.name)" class="btn btn-primary me-2">Opinar</a>
                <a v-on:click="irAdministracion(juego.name)" class="btn btn-warning"><i class="fa-solid fa-heart"></i></a>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'juegos',
    props: [],
    data() {
        return {
            cantidadJuegos: 0,
            juegos: [],
        }
    },
    methods: {
        consumirAPI: function(){

            let url='https://api.rawg.io/api/games?key=a121749418434ab1a626e51a29c0095c'
            axios(url)
            .then(respuesta =>{
                console.log(respuesta);
                console.log(respuesta.data.results[9].name);
                this.cantidadJuegos = respuesta.data.results.length;

                //con esto se acumula en el arreglo juegos con las distintas paginas
                for(let i=0; i<respuesta.data.results.length; i++){

                    this.juegos.push(respuesta.data.results[i]);
                }
            })
            .catch(error =>{
                console.log(error);
            });
        },
        mostrarOpiniones(nombreJuego){
            this.$router.push(`/opiniones/${nombreJuego}`);
        },
        irAdministracion(nombreJuego){
            this.$router.push(`/admin/${nombreJuego}`);
        },
    },
    created(){
        this.consumirAPI();
    }
}

</script>

<style scoped>
#juegos {
    color: aliceblue;
}

.contenedorTarjetas{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

#cardJuegos{
    width: 18rem;
    background-color: rgba(247, 240, 255, 0.106);
    border: 1px solid rgb(222, 185, 254);
}

li{
    background-color: rgba(240, 248, 255, 0.053); 
    border: 1px solid rgb(222, 185, 254);
    color: aliceblue;
}

#botonOpinar{
    background-color: #ff6b21;
    border: 1px solid #ff6b21;
    font-weight: 500;
}

</style>