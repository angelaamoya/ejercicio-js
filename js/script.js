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

