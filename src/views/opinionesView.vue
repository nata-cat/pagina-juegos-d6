<template>
    <div id="opinionesJuegos">
        <h3>Escribe tu opinión para: {{ nombre }}</h3>

        <div class="container" id="divForm">
            <form>
                <div class="mb-3">
                    <label for="nombreIngresado" class="form-label">Nombre:</label>
                    <input type="text" class="form-control" id="nombreIngresado" placeholder="" v-model="nombreEnviado">
                </div>
                <div class="mb-3">
                    <label for="opinionIngresada" class="form-label">Opinión:</label>
                    <textarea class="form-control" id="opinionIngresada" rows="3" v-model="opinionEnviada"></textarea>
                </div>

                <button v-on:click.prevent="agregarOpinion(index)" type="submit" class="btn btn-primary" id="botonFormulario"> {{ nombreBoton }}</button>
            </form>
        </div>

        <hr>
        <div id="divOpiniones">
            <h3> Opiniones realizadas:</h3>
            <div v-if="cantidadOpiniones < 1" id="sinOpiniones" class="alert alert-danger align-center" role="alert">
                <p>No hay Opiniones para mostrar</p>
            </div>
        </div>

        <!--Acordeon-->
        <div v-if="cantidadOpiniones > 0" class="accordion" id="accordionExample">
            <div class="accordion-item" v-for="(elemento, index) in opiniones" :key="index">
                <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
                        aria-expanded="true" aria-controls="collapseOne">
                        Opinion creada por: {{ elemento.nombre }}
                    </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <p>Comentario: "{{ elemento.opinion }}"</p>
                        <button v-on:click.prevent="eliminarOpinion(index)" class="btn btn-danger">Eliminar</button>
                        <button v-on:click.prevent="editarOpinion(index)" class="btn btn-warning">Editar</button>
                    </div>
                </div>
            </div>


        </div>


        <RouterLink to="/" id="linkVolver">Volver</RouterLink>
    </div>
</template>

<script>

export default {
    name: 'opinionesView',
    props: ['nombre'],
    data() {
        return {

            cantidadOpiniones: 0,
            nombreEnviado: '',
            opinionEnviada: '',
            opiniones: [],
            nombreBoton: 'Agregar',
            indexActualizar: 0,
        }
    },
    methods: {

        agregarOpinion: function () {

            if (this.nombreBoton == 'Agregar') {

                this.cantidadOpiniones++;
                let nuevaOpinion = {
                    nombre: this.nombreEnviado,
                    opinion: this.opinionEnviada,
                };
                this.opiniones.push(nuevaOpinion);
                this.nombreEnviado = '';
                this.opinionEnviada = '';

            }
            else if (this.nombreBoton == 'Actualizar') {
                
                let opinionActualizada = {
                    nombre: this.nombreEnviado,
                    opinion: this.opinionEnviada,
                };
                this.opiniones.splice(this.indexActualizar, 1, opinionActualizada);
                alert('La opinión fue actualizada con éxito. Revise el acordeón más abajo para ver los cambios')
            }


        },
        eliminarOpinion(index) {
            this.opiniones.splice(index, 1);
            this.cantidadOpiniones--;
        },

        editarOpinion(index) {
            this.nombreEnviado = this.opiniones[index].nombre;
            this.opinionEnviada = this.opiniones[index].opinion;
            this.nombreBoton = 'Actualizar';
            this.indexActualizar = index;
            alert('Va a editar una opinión. Revise el formulario con la información cargada')
        },
    }
}

</script>

<style scoped>

#botonFormulario{
    background-color: #ff6b21;
    border: 1px solid #ff6b21;
    font-weight: 500;
}

#opinionesJuegos {
    background-color: rgb(36, 4, 79);
    color: azure;
    padding-bottom: 500px;
}

#divForm {
    text-align: start;
}

#sinOpiniones {
    width: 60rem;
}

#divOpiniones {
    display: flex;
    flex-direction: column;
    align-items: center;
}

#linkVolver{
    color: #ff6b21;
    margin-top: 16px;
    padding-bottom: 48;
}
</style>