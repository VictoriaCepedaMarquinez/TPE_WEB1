let articulos = [{
  codigo:23,
  prenda:"Remera",
  precio:5800,
  talle:"M",
}]

document.addEventListener("DOMContentLoaded", ()=>{
  
  tomaArticulos(articulos);

  document.querySelector("#agregar").addEventListener("click", agregarArticulos );
  document.querySelector("#agregar3").addEventListener("click",agregar3);
  document.querySelector("#eliminar").addEventListener("click",eliminar);
  function eliminar(e){
    e.preventDefault();
    articulos=[]
    tomaArticulos(articulos);
  }
  
  function agregar3(e){
    e.preventDefault();
    agregarArticulos(e);
    agregarArticulos(e);
    agregarArticulos(e);
    
  }

  function agregarArticulos(e) {
      let campos =document.querySelectorAll(".jsCampoArticulo");
      e.preventDefault();
      let articuloAgregado = {
          codigo:campos[0].value,
          prenda:campos[1].value,
          precio:campos[2].value,
          talle:campos[3].value,
          
        }
        articulos.push (articuloAgregado);
        tomaArticulos(articulos);
  }
 
})


function tomaArticulos(articulos){
    let tabla = document.querySelector("#tablaCatalogo"); 
    tabla.innerHTML = "";
    for(let i = 0; i<articulos.length;i++){
        let articulo = articulos[i];
        agregarEnTabla(articulo,tabla);
    }
}

function agregarEnTabla(articulo,tabla) {
    if(articulo.precio < 5800){
        tabla.innerHTML +=
    "<tr>"+
    `<td class="colorTablaFila">${articulo.codigo}</td>`+
    `<td class="colorTablaFila">${articulo.prenda}</td>`+
    `<td class="colorTablaFila">${articulo.precio}</td>`+
    `<td class="colorTablaFila">${articulo.talle}</td>`+
    "</tr>"
    }else{
        tabla.innerHTML +=
        `<td>${articulo.codigo}</td>`+
        `<td>${articulo.prenda}</td>`+
        `<td>${articulo.precio}</td>`+
        `<td>${articulo.talle}</td>`+
    "</tr>"
    }
       
}
