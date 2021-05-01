import Vue from "vue";
import Vuex from "vuex";
import Swal from 'sweetalert2'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    juegos: [
      {codigo: '0001', nombre: 'Sekiro: Shadows Die Twice', stock: 100, precio: 30000, color: 'red',    destacado: true},
      {codigo: '0002', nombre: 'FIFA 21',                   stock: 100, precio: 25000, color: 'blue',   destacado: false},
      {codigo: '0003', nombre: 'Gears of War 4',            stock: 100, precio: 15000, color: 'green',  destacado: true},
      {codigo: '0004', nombre: 'Mario Tennis Aces',         stock: 100, precio: 35000, color: 'yellow', destacado: false},
      {codigo: '0005', nombre: 'Bloodborne',                stock: 100, precio: 10000, color: 'blue',   destacado: false},
      {codigo: '0006', nombre: 'Forza Horizon 4',           stock: 100, precio: 20000, color: 'red',    destacado: true},
    ],
    ventas: []
  },
  getters: {
    /*Procesamiento de data para posteriormente enviarlo a una base de datos, se llaman en las computed */
    tablaDatos(state){
      return state.juegos
    },
    totalJuegos(state){
      return state.juegos.length
    },
    /* FIltro por el codigo de cada juego (id)*/ 
    juegoPorId: (state) => (codigo) => {
      return state.juegos.filter( producto => producto.codigo == codigo )
    },
    juegosConStock(state){
      return state.juegos.filter( producto => producto.stock > 0 )
    },
    /* listado ventas registradas */
    totalJuegosConStock(state, getters){
      return getters.juegosConStock.length
    },
    listaVentas(state){
      return state.ventas
    },
    /* Monto total de ventas*/
    totalVentas(state){
      return state.ventas.reduce((acumulador, juego)=>{
        return acumulador+juego.precio
      },0);
    }
  },
  mutations: {
    /* Procesar la venta */
    venta(state, codigo){
      setTimeout(()=>{

        state.juegos.forEach((juego) => {

          if(juego.codigo == codigo && juego.stock > 0){

            juego.stock--

            setTimeout(()=>{
              state.juegos.forEach((juego) => {
/* Libreria sweetalert2 para personalizar las alertas. Referencia Codigofacilito /--/ intalarlo con:npm install sweetalert2 /--/ importarlo:import Swal from 'sweetalert2' */
                if(juego.codigo == codigo){
                  state.ventas.push(juego)
                  Swal.fire({
                    icon: 'success',
                    title: 'Venta Exitosa',
                    text: 'Tu venta fue procesada exitosamente!',
                    footer: `${juego.nombre}`
                  })
                }
              })
            },1000)

          }
          else if(juego.codigo == codigo && juego.stock == 0){
            Swal.fire({
              icon: 'error',
              title: 'Juego sin Stock',
              text: 'Comunicate con tu proovedor para conseguir mas copias de este juego',
              footer: `${juego.nombre}`
            })
          }
        })
      },1000)
 
    }
  },
  actions: {
    NuevaVenta(context,codigo){
      context.commit(`Venta`,codigo);
    }
  }
})
