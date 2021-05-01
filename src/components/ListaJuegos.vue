

<template>
  <div class="container py-3">
      <h2>Listado de Juegos</h2>
      <ul>
        <li v-for="(juego, index) in listaJuegos" :key="index" :style="{ backgroundColor: juego.color}">
          {{juego.codigo}} | {{juego.nombre}} | {{juego.stock}} | {{juego.precio}}
        </li>
      </ul>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'Listajuegos',
    computed: {
        ...mapGetters(['ListaJuegos'])
    },
}
</script>

<style>
</style>