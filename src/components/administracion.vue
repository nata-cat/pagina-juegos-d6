<template>
    <div id="administracion">

        <div v-if="!mostrarForm" class="container">
            <h1>Administracion</h1>
            <form id="formulario">
                <div class="mb-3">

                    <label for="textNombre" class="form-label">Nombre:</label>
                    <input type="text" class="form-control" id="textNombre" rows="3" v-model="nombreEnviado">

                </div>
                <div class="mb-3">

                    <label for="textApellido" class="form-label">Apellido:</label>
                    <input type="text" class="form-control" id="textApellido" placeholder="" v-model="apellidoEnviado">
                </div>

                <button class="btn btn-primary" v-on:click.prevent="enviarDatos()" id="botonFormulario">Ingresar</button>
            </form>
        </div>

        <div v-if="mostrarForm" class="container">

            <div class="row">
                <div id="seccionNombre" class="col-md-3 pt-4">
                    <h6>Buenas tardes</h6>
                    <h5>{{ nombreEnviado }} {{ apellidoEnviado }}</h5>

                    <br>
                    <RouterLink to="/" id="linkVolver">Log Out</RouterLink>

                </div>

                <div class="col-md-9">
                    <div class="container">
                        <div class="row">
                            <h3>Resumen de tu cuenta</h3>
                            <h5>Le diste me gusta al juego: {{ nombre }}</h5>
                        </div>

                        <div class="row">
                            <div class="col-md-12">
                                <div id="divCoins" class="container text-center pb-2">
                                    <p>¿Deseas Comprar Coins para este Juego?</p>
                                    <button id="btnCoins" class="btn btn-warning" v-on:click="agregarCoins">Agregar Coins</button>
                                    <hr>
                                    <p>Cantidad de Coins Comprados</p>
                                    <div class="progress" role="progressbar" aria-label="Example with label"
                                        v-bind:aria-valuenow="cantidadCoins" aria-valuemin="0" aria-valuemax="50">
                                        <div class="progress-bar bg-success" style="">${{ cantidadCoins }}</div>
                                    </div>
                                    <div v-if="flagMaximo">
                                        <p class="text-danger">Llegaste al maximo de tu crédito</p>
                                    </div>
                                    <br><br>
                                    <hr>
                                </div>

                            </div>

                        </div>
                        <div class="row mt-3">
                            <div class="col-md-4 bg-warning p-4">
                                <h4>Finalización</h4>
                                
                                <hr>
                                <div class="iconStat">
                                    <i class="fa-solid fa-gamepad"></i>
                                    <p class="stats">17% </p>
                                </div>
                            </div>
                            <div class="col-md-4 bg-success p-4">
                                <h4 >Logros</h4>
                                <hr>
                                <div class="iconStat">
                                    <i class="fa-solid fa-trophy"></i>
                                    <p class="stats">66 </p>
                                </div>
                            </div>
                            <div class="col-md-4 bg-info p-4">
                                <h4>Recompensas</h4>
                                <hr>
                                <div class="iconStat">
                                    <i class="fa-solid fa-coins"></i>
                                    <p class="stats">200 </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
        <br>
        
    </div>
</template>

<script>

export default {
    name: 'componenteAdmin',
    props: ['nombre'],
    data() {
        return {
            mostrarForm: false,
            nombreEnviado: '',
            apellidoEnviado: '',
            cantidadCoins:0,
            flagMaximo: false,
        }
    },
    methods: {
        enviarDatos() {
            this.mostrarForm = true;
        },
        agregarCoins(){
            this.cantidadCoins++;
            let laBarra = document.getElementsByClassName('progress-bar');
            let valorPorCiento = '';
            
            if(this.cantidadCoins<50){
                valorPorCiento = `${this.cantidadCoins}%`;
                laBarra[0].style.width =valorPorCiento;
                if(this.cantidadCoins>20 && this.cantidadCoins<=30){
                    laBarra[0].classList.remove('bg-success');
                    laBarra[0].classList.add('bg-warning');
                }
                else if(this.cantidadCoins>30){
                    laBarra[0].classList.remove('bg-warning');
                    laBarra[0].classList.add('bg-danger');
                }
            }else{
                this.flagMaximo = true;
                let elBotonCoins = document.getElementById('btnCoins');
                elBotonCoins.setAttribute('disabled', true);
            }
        },

    }
}

</script>

<style scoped>

h3{
    color: coral;
}

.stats{
    font-size: 1em;
    margin-left: 4px;
}

.iconStat{
    font-size: 2em;
    display: flex;
    justify-content: center;
    align-items: baseline;
}

#administracion {
    color: aliceblue;
    padding-bottom: 400px;
}

#seccionNombre {
    background-color: rgba(255, 255, 255, 0.072);
    color: aliceblue;
    border-radius: 16px;
}

#botonFormulario{
    background-color: #ff6b21;
    border: 1px solid #ff6b21;
    font-weight: 500;
}

#linkVolver{
    color: #ff6b21;
    margin-top: 32px;
}


</style>