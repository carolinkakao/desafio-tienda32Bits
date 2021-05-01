<template>
  <div>
    <h1 class="display-5 text-center my-4 mt-5">Venta</h1>
    <hr>
    <div class="container py-3">
      <h2>Cantidad de juegos con stock</h2>
      <h5>Existen {{totalJuegosConStock}} juegos con stock disponible</h5>
    </div>
    <hr>
    <div class="container py-3">
      <h2>Venta de Juegos</h2>
      <tabla-juegos></tabla-juegos>
    </div>
  </div>
</template>

<script>
import TablaJuegos from '../components/TablaJuegos.vue'
import { mapGetters } from "vuex";
export default {
  name: 'Venta',
  components:{
    TablaJuegos
  },
  computed: {
    ...mapGetters(['totalJuegosConStock']),
  },
}
</script>