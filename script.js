/* Referencias al documento del DOM */

const tareaEntrada = document.getElementById("tareaEntrada");
const botonAgregar = document.getElementById("botonAgregar")
const contenedorTareas = document.getElementById("contenedorTareas")
const mensaje = document.getElementById("mensaje")
const contadorTotales = document.getElementById("contadorTotales")
const contadorTerminadas = document.getElementById("contadorTerminadas")

console.log(contadorTerminadas.textContent)
console.log(contadorTotales.textContent)




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

  // Escuchdores de los iconos
  iconoCompletada.addEventListener("click", (e) => {
    // codigo que se ejecuta
    const tareaElemento = e.target.parentNode.parentNode
    const esCompletada = tareaElemento.classList.contains("tarea-completada")
    
    tareaElemento.classList.toggle("tarea-completada")
    if (esCompletada) {
      e.target.classList.remove("bi-dash-circle")
      e.target.classList.add("bi-check-circle")
    }else {
      e.target.classList.remove("bi-check-circle")
      e.target.classList.add("bi-dash-circle")
    }
    /* actualizamos el conrador */
    actualizarContadores();

  })

  iconoEliminar.addEventListener("click", (e) => {
    // codigo que se ejecuta
    const tareaElemento = e.target.parentNode.parentNode
    tareaElemento.remove()

    /* actualizamos el conrador */
    actualizarContadores();
  })

  // Retornar
  return tareaContenedor;
}

/* funcion actualizar contadores */
function actualizarContadores() {
  const tareasTotales = document.querySelectorAll(".tarea")
  const tareasCompletadas = document.querySelectorAll(".tarea-completada")

  //actualizamos los contadores en el DOM
  contadorTotales.textContent = tareasTotales.length;
  contadorTerminadas.textContent = tareasCompletadas.length;

}

/* escuchador */
botonAgregar.addEventListener("click", agregarTarea)

/* funcion agregar el elemento tarea */
function agregarTarea() {
  /* generar la constante para evaluar si hay texto o no */
  const texto = tareaEntrada.value.trim()

  /* evaluar la contaste texto */
  if (texto) {
    //traemos el elemento retornado por la funcion crearElement
    const elementoTarea = crearElementoTarea();
    contenedorTareas.append(elementoTarea)

    //reiniciar el input
    tareaEntrada.value = ""

    /* mostrar tarea satisfactoriamente */
    mensaje.textContent = "Tarea creada satisfactoriamente! 😝"

    /* actualizamos el conrador */
    actualizarContadores();

  } else {
    mensaje.textContent = "No escribiste nada 😠"
  }
}

/* hacemos que al precionar la tecla enter en el input se agregue la tarea */

tareaEntrada.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    agregarTarea();
  }
})

/* mostrar mensaje al escribir */
tareaEntrada.addEventListener("input", (e) => {
  // evaluamos la tecla precionada
  if (tareaEntrada.value.trim() === "") {
    mensaje.textContent = "Escribe tu proxima Tarea! 😃"
  } else {
    mensaje.textContent = "Al finalizar preciona enter 🤭"

  }
})