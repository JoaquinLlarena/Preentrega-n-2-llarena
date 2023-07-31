// 2da PREENTREGA



//creando una funcion constructora 
const Producto = function (nombre, precio, talle, stock) {
  this.nombre = nombre
  this.precio = precio
  this.talle = talle
  this.stock = stock
}


//creando los productos a partir de la funcion constructora
let producto1 = new Producto("hoodie", 12000, "m", 5)
let producto2 = new Producto("campera", 15000, "s", 10)
let producto3 = new Producto("remera", 1000, "x", 11)
let producto4 = new Producto("pantalon", 20000, "m", 7)
let producto5 = new Producto("gorra", 6000, "m", 20)


//creando una lista de los producuto guardandolos en un array
let lista = [producto1, producto2, producto3, producto4, producto5]


//funcion para encontrar el producto mediante un prompt
function encontrarProducto() {
  let palabraClave = prompt("¿que producto desea?")
  let resultado = lista.filter((producto) => producto.nombre.includes(palabraClave))

  if (resultado.length > 0) {
    console.table(resultado)
  } else {
    alert("el producto: " + palabraClave + " no se encuentra")
  }

}

//boton para encontrar el producto
let boton = document.getElementById("btn")
boton.addEventListener("click", encontrarProducto)

//funcion para crear productos 

function agregarProducto() {

  let nombre = prompt("nombre del producto")
  let precio = parseInt(prompt("precio del producto"))
  let talle = prompt("talle del producto")
  let stock = parseInt(prompt("stock del producto"))

  if (isNaN(precio) || isNaN(stock) || nombre == "" || talle == "") {
    alert("estos valores no son validos")
    return
  }

  let producto = new Producto (nombre, precio, talle, stock)

  lista.push(producto)
  console.table(lista)

  alert ("se creo el producto: " + nombre)


}


//boton para crar un producto
let boton2 = document.getElementById("btn2")
boton2.addEventListener("click", agregarProducto)








