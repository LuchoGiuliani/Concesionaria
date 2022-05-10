const autos = require('./autos'); 
let concesionaria = {
   autos: autos,
    buscarAuto: function(patente) {
      let resultado = this.autos.find(auto => auto.patente === patente)
      return !resultado ? null :resultado;
  },
    venderAuto:function(patente) {
       const auto = this.buscarAuto(patente);
       if(auto){
         auto.vendido = true
       }return this.autos;
    },
    autosParaLaVenta: function(){
      return this.autos.filter(elemento => !elemento.vendido)}, 
      
  
    autosNuevos:function () {
      let autos0KM = this.autosParaLaVenta();
      return autos0KM.filter(e => e.km < 100);
  },
    listaDeVentas: function () {
     let vendidos = autos.filter(a => a.vendido == true );
      return vendidos.map(a => a.precio );
  } ,
    totalDeVentas: function () {
      let ventas = this.listaDeVentas();
      if( ventas.length > 0) {
      return ventas.reduce( (ant, actual) => ant + actual); 
      } else {
      return 0;
      }
    },
    puedeComprar: function (auto, persona) {
     return (auto.precio <= persona.capacidadDePagoTotal) && ( (auto.precio / auto.cuotas) <= persona.capacidadDePagoEnCuotas)
  } ,
    autosQuePuedeComprar:  function ( persona ) {
     let enVenta = this.autosParaLaVenta();
    
    return enVenta.filter(auto => this.puedeComprar(auto, persona));
  }     
   
}
 console.log(concesionaria.puedeComprar(0, persona));   