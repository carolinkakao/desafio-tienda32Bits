<template>
    <div>
        <table class="table" v-if="listaVentas.length > 0">
            <thead>
                <tr>
                    <th>Código</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(juego, index) in listaVentas" :key="index">
                    <td>{{juego.codigo}}</td>
                    <td>{{juego.nombre}}</td>
                    <td>$ {{juego.precio}}</td>
                </tr>
            </tbody>
        </table>

        <h4 v-else>No hay ventas registradas</h4>
    </div>
    
</template>

<script>
import { mapGetters } from "vuex";
export default {
    name: 'TablaVentas',
    computed: {
        ...mapGetters(['listaVentas'])
    },
}
</script>

<style>
</style>

   