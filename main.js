



//tienda de ropa 
alert("Bienvenido a TacticalShop");

let realizarCompra = true;

while (realizarCompra) {
  let consulta = confirm("¿Quieres iniciar una compra?");

  if (consulta) {
    let producto;
    let seleccionValida = false;

    do {
      producto = prompt("¿Qué producto necesitas?\n◉ Buzo\n◉ Pantalón\n◉ Remera\n◉ Zapatilla").toLowerCase();

      switch (producto) {
        case "buzo":
          alert("Elegiste buzo");
          seleccionValida = true;
          break;
        case "pantalon":
          alert("Elegiste pantalón");
          seleccionValida = true;
          break;
        case "zapatilla":
          alert("Elegiste zapatilla");
          seleccionValida = true;
          break;
        case "remera":
          alert("Elegiste remera");
          seleccionValida = true;
          break;
        default:
          alert("Elige un producto válido por favor");
      }
    } while (!seleccionValida);

    // Talle del producto
    let talle;
    let talleValido = false;

    do {
      talle = prompt("¿Qué talle estás buscando?\n◉ S\n◉ M\n◉ X\n◉ XL").toLowerCase();

      switch (talle) {
        case "s":
          alert("Talle S");
          talleValido = true;
          break;
        case "m":
          alert("Talle M");
          talleValido = true;
          break;
        case "x":
          alert("Talle X");
          talleValido = true;
          break;
        case "xl":
          alert("Talle XL");
          talleValido = true;
          break;
        default:
          alert("Elige un talle válido por favor");
      }
    } while (!talleValido);

    let continuar = confirm("¿Deseas realizar otra compra?");

    if (!continuar) {
      realizarCompra = false;
    }
  } else {
    realizarCompra = false;
  }
}

alert("Gracias por su compra. ¡Hasta luego!");

 










 //crear usuario 
function crearUsuario () {
  if (usuario = confirm("¿quieres crear un usuario?")) {
    let usuario = prompt ("ingresa tu nombre").toLowerCase()
    let contraseña = prompt ("ingresa tu contraseña")
    alert ("bienvenido  " + usuario)
  
  }
  else {
    alert ("nos vemos en la proxima")
  }
  

}

crearUsuario ()