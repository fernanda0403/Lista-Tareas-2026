/* Referencias al documento del DOM */

const tareaEntrada = document.getElementById ("tareaEntrada");
const botonAgregar = document.getElementById ("botonAgregar")
const contenedorTareas = document.getElementById ("contenedorTareas")

/* función para crear el elemento tarea (Función creadora del nodo Tarea) */
function crearElementoTarea() {
  // Crear los elementos HTLM de la tarea
  const tareaContenedor = document.createElement("div")
  const tareaTexto = document.createElement("p")
  const iconosContenedor = document.createElement("div")
  const iconoCompletada = document.createElement("i")
  const iconoEliminar = document.createElement("i")

  //crear la estructura de la tarea
  iconosContenedor.append(iconoCompletada, iconoEliminar)
  tareaContenedor.append(tareaTexto, iconosContenedor)

  //agregar clases a los elemetos de la tarea
  tareaContenedor.classList.add("tarea")
  tareaTexto.classList.add("tarea-texto")
  iconosContenedor.classList.add("tarea-iconos")
  iconoCompletada.classList.add("bi", "bi-check-circle")
  iconoEliminar.classList.add("bi", "bi-trash3")

  //agregar el texto del usuario
  tareaTexto.innerText = tareaEntrada.value;

 // Retornar
 return tareaContenedor;
}
 
 /* escuchador */
 botonAgregar.addEventListener("click", agregarTarea)

/* funcion agregar el elemento tarea */
 function agregarTarea() {
  //traemos el elemento retornado por la funcion crearElement
  const elementoTarea  = crearElementoTarea ();
  contenedorTareas.append(elementoTarea)

  //reiniciar el input
  tareaEntrada.value=""
 }