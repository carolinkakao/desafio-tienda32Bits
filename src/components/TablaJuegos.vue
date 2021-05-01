<template>
    <table class="table">
        <thead>
            <tr>
                <th>Código</th>
                <th>Nombre</th>
                <th>Stock</th>
                <th>Precio</th>
                <th>Vender</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(juego, index) in juegosConStock" :key="index">
                <td>{{juego.codigo}}</td>
                <td>{{juego.nombre}}</td>
                <td>{{juego.stock}}</td>
                <td>$ {{juego.precio}}</td>
                <td><input type="button" class="btn btn-danger" value="Vender" @click="venta(juego.codigo)"></td>
            </tr>

        </tbody>
    </table>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
    name: 'TablaJuegos',
    computed: {
        ...mapGetters(['juegosConStock'])
    },
    methods: {
        ...mapMutations(['venta'])
    },
}
</script>

<style>
</style>