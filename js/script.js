/* =========================================================
   EJERCICIOS: if/else, bucles for y this
   JavaScript nativo (ES5): usad var, function y querySelector.
   =========================================================

   PASO 0
   Este archivo todavía no está enlazado. Enlázalo tú en index.html
   con una etiqueta <script> justo antes de cerrar </body>, usando
   la ruta correcta. Comprueba que funciona con un console.log().


   ---------------------------------------------------------
   EJERCICIO 1 · CONDICIONALES (if / else)
   ---------------------------------------------------------
   Elementos: #titular, #contador-numero, #aviso, #cartel-titular

   1. Cada vez que se escriba en #titular (evento "input"):
      a) Copia el texto escrito en #cartel-titular.
      b) Escribe en #contador-numero cuántos caracteres lleva
         (pista: titular.value.length).
   2. Con un if / else:
      - Si el texto tiene MÁS de 40 caracteres: añade la clase
        "is-error" a .contador y a #aviso, y cambia el texto del
        aviso a "Demasiado largo: no cabe en el cartel".
      - Si no: quita esas clases y deja el aviso como
        "El titular cabe en el cartel."

   Extra: si el campo está vacío, que el cartel muestre
   "Tu titular aquí" (otro if / else dentro del evento).


   ---------------------------------------------------------
   EJERCICIO 2 · BUCLES (for)
   ---------------------------------------------------------
   Elementos: #boton-paleta, #paleta, #paleta-info

   Usa este array (cópialo tal cual):

   var colores = ["#16BFAE", "#12181B", "#F3F6F5", "#FFD23F", "#FF5C8A"];

   1. Al hacer clic en #boton-paleta:
      a) Vacía #paleta (innerHTML = "").
      b) Con un bucle for, recorre el array. En cada vuelta crea
         una muestra y añádela a #paleta. Puedes concatenar HTML:
         '<div class="muestra" style="background-color:' + color +
         '"><span>' + color + '</span></div>'
      c) Al terminar el bucle, escribe en #paleta-info:
         "Paleta generada con 5 colores" (usa colores.length,
         no escribas el 5 a mano).

   Extra: añade dos colores más al array y comprueba que todo
   se adapta solo, sin tocar nada más del código.


   ---------------------------------------------------------
   EJERCICIO 3 · THIS (ventana modal)
   ---------------------------------------------------------
   Elementos: .boton-artista (hay 4), #modal, #modal-titulo,
   #modal-texto, #modal-cerrar

   1. Selecciona todos los botones con querySelectorAll.
   2. Con un bucle for, añade a cada botón un evento "click".
   3. Dentro de la función del evento, "this" es EL BOTÓN que se
      ha pulsado. Úsalo para leer sus datos:
      this.getAttribute("data-nombre")
      this.getAttribute("data-texto")
      y escríbelos en #modal-titulo y #modal-texto.
   4. Abre la modal añadiéndole la clase "is-abierta".
   5. Al pulsar #modal-cerrar, quita la clase "is-abierta".

   Extra (if / else + this): cierra la modal también al hacer clic
   en el fondo oscuro. Escucha el clic en #modal y comprueba con un
   if si event.target === this (el clic ha sido en el fondo, no
   dentro de la caja blanca).
   ========================================================= */


// Empieza aquí tu código

var titular= document.querySelector("#titular");
var contador= document.querySelector(".contador");
var contadorNumero = document.querySelector("#contador-numero");
var aviso = document.querySelector("#aviso");
var cartelTitular= document.querySelector("#cartel-titular")


titular.addEventListener("input" , function(){

   var texto = titular.value;


   contadorNumero.textContent = texto.length

   console.log(texto.length)
      if (texto.length > 20) {
         contador.classList.add("is-error");
         aviso.classList.add("is-error");

      } else{
         contador.classList.remove("is-error");
         aviso.classList.remove("is-error");
      }
      //extra: SI esta vacio texto por defecto

      if (texto == "") {
         console.log("esta vacio");

      } else {
         console.log("esta escribiendo");
         cartelTitular.textContent = texto ;

      }

});



//ejesrcicio 2 - bucle for

var botonPaleta = document.querySelector("#boton-paleta");
var paleta = document.querySelector("#paleta")
var colores = ["#16BFAE", "#12181B", "#F3F6F5", "#FFD23F", "#FF5C8A"];
var paletaInfo = document.getElementById("#paleta-info")

botonPaleta.addEventListener("click" , function(){
//resreteamos el contenido html de la paleta
paleta.innerHTML = ""
      for (var i = 0;  i < colores.length; i++){
         var color = colores[i];
         
         paleta.innerHTML = paleta.innerHTML +
            '<div class="muestra style= "background-color":'+ color + '">' + 
            '<span>' + color + '</span>' + 
            '</div>';
      
      }
//seleccionar paleta-info y añadir texto donde se exponga cuantos colores (numero) se han añadido y fallo colores
paletaInfo.textContent = "Paleta generada con" + colores.length + "colores"
})


//EJERCICIO 3: for 
var botonesArtista = document.querySelectorAll(".boton-Artista");
var modal = document.querySelector("#modal-titulo");
var modalTitulo = document.querySelector("#modal-texto");


function abrirmodal(){
   //tis*boton concreto donde se ha hecho click */
   modalTitulo.textContent = this.getAtribute("data-nombre")
   modalTexto.textContent = this.getAtribute("data-texto")
   modal.classList.add("is-abierta");

}

function cerrarmodal(){
   
}

//bucle para asignar todos los botones del mismo evento
for ( var j = 0 ; j < botonesArtista.length; j++ ) {

   botonesArtista[j].addEventListener("click", abrirModal);

}