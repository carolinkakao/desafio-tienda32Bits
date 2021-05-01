<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
    <router-link :to="{name: 'Inicio'}" class="navbar-brand"><font-awesome-icon icon="gamepad" size="lg"/></router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <router-link :to="{name: 'Inicio'}" class="nav-link">Inicio</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'Busquedas'}" class="nav-link">Búsquedas</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'Venta'}" class="nav-link">Venta</router-link>
            </li>
            <li class="nav-item">
                <router-link :to="{name: 'Total'}" class="nav-link">Total</router-link>
            </li>
        </ul>
    </div>
  </nav>
</template>

<script>
export default {
    name: 'NavBar'
}
</script>

<style>
</style>

