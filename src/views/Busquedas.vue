<template>
  <div>
    <h1 class="display-5 text-center my-4 mt-5">Busquedas</h1>
    <hr>
    <div class="container py-3">
      <h2>Filtro</h2>
      <input type="text" v-model="busquedaPorId">
    <ul v-if="juegoPorId.length > 0" class="text-center">
      <li v-for="(producto, clave) in juegoPorId" :key="clave">
        <label v-text="producto.nombre"></label>
      </li>
    </ul>
    </div>
    <hr>
    <div class="container py-3">
      <h2>Cantidad de juegos totales</h2>
      <h4>Total: {{totalJuegos}}</h4>
    </div>
    <hr>
    <lista-juegos></lista-juegos>
    
  </div>
</template>

<script>
import ListaJuegos from '../components/ListaJuegos.vue'
import { mapGetters } from "vuex";
export default {
  name: 'Busquedas',
  data() {
    return {
      busquedaPorId: '',
    }
  },
  components:{
    ListaJuegos
  },
  computed: {
    ...mapGetters(['totalJuegos']),
    juegoPorId(){
      return this.$store.getters.juegoPorId(this.busquedaPorId)
    }
  },
}
</script>