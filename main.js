



//tienda de ropa 

 alert("bienvenido a TacticalShop")


 let consulta = confirm("¿quieres iniciar una compra?")

  if (consulta == true) {

   let producto = prompt("que producto necesitas: \n ◉buzo \n ◉pantalon \n ◉remera \n ◉zapatilla")
  


//producto a elegir
   switch (producto) {
     case "buzo":
       alert("elegiste buzo");
       break;
     case "pantalon":
       alert("elegiste pantalon");
       break;

     case "zapatilla":
       alert("elegiste zapatilla");
       break;
     case "remera":
       alert("elegiste remera");
       break;
     default:
       alert("elegi un producto porfavor")
   }


   //talle del producto
   let talle = prompt("que talle estas buscando \n ◉S \n ◉M \n ◉X \n ◉XL")

   switch (talle) {
     case "s":
       alert("talle S");
       break;
     case "m":
      alert("talle M");
       break;
     case "x":
       alert("talle X");
       break;
     case "xl":
       alert("talle Xl");
      break;
       default:
        alert("elegi un talle porfavor")

   }

alert ("gracias por su compra")
 }
 else {alert("hasta luego")}


if (usuario = confirm("¿quieres crear un usuario?")) {
  let usuario = prompt ("ingresa tu nombre")
  let contraseña = prompt ("ingresa tu contraseña")
  alert ("bienvenido  " + usuario)

}
else {
  alert ("nos vemos en la proxima")
}
