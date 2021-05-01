<template>
  <div id="app"> <!--debajo de esta etiqueta van los componentes, router-link(rutas) y todos los elementos de la app -->
    <!--Componentes -->
    <NavBar />
    <div id="NavBar">
      <!--vistas -->
     
    </div>
    <router-view /> <!--hace el desplazamiento de vista-->
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue"
export default {
  name:"App",
  components:{
    NavBar,
  },
}

</script>