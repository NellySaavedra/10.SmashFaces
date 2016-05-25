// Si el usuario de selecciona México la primer imagen no se desplegará
$('#selecPais').change(function(){
  var pais = $(this).val();
// 'mexico' corresponde al value del HTML
  if(pais == 'mexico'){
// Es una función que se especifíca líneas abajo y sirve para cargar las imágenes
    desplegarNuevaJugada();
  } else {
    alert("No elegiste el país correcto");
  }
});

// Esta variable es igual a: function enteroRandomEnRango que obtiene el número de 
// imágenes
var numeroAlAzar;

var imagenes = [
 "Ana.jpg", "Analy.jpg", 
 "Areli.jpg", "Beatriz.jpg", 
 "Cecilia.jpg", "Claudia.jpg", 
 "Daniela.jpg", "Elisa.jpg", 
 "Evelyn.jpg", "Gabriela.jpg", 
 "Grissel.jpg", "Guadalupe.jpg", 
 "Johana.jpg", "Joyce.jpg", 
 "Ofelia.jpg", "Patricia.jpg", 
 "Sharon.jpg", "Heredia.jpg", 
 "Karen.jpg", "Monica.jpg",  
 "Karla.jpg", "Leslie.jpg", 
 "Mishel.jpg", "Milca.jpg", 
 "Tayde.jpg", "Naibit.jpg", 
 "Nayeli.jpg", "Nelly.jpg", 
 "Reyna.jpg", "Adriana.jpg", 
 "Ruth-Lopez.jpg","Ruth-Vega.jpg",
 "Sandra-Bollo.jpg","Sandra-Diaz.jpg", 
 "Vianey.jpg", "Zazil.jpg"];

 var nombres = [ 
 "Anita", "Analy", 
 "Areli", "Bet",
 "Cecy", "Claudia", 
 "Daniela", "Elisa", 
 "Eve", "Gaby", 
 "Griss", "Lupita", 
 "Joy", "Joyce", 
 "Ofe", "Paty", 
 "Sharon", "Heredia", 
 "Karen", "Moni", 
 "Karla", "Leslie",
 "Mishel", "Milca", 
 "Tayde", "Naibit", 
 "Nayeli", "Nelly", 
 "Reyna", "Adri", 
 "Dj Ruth", "Ruth", 
 "Sandia", "San", 
 "Vian", "Zaz"];

 var puntaje = 0;  //Contador de puntos
 var intentos = 4; //Contador de intentos

// Función que obtiene la catidad de imágenes y que define a var numeroAlAzar
function enteroRandomEnRango(min, max){
    var numero = Math.random() * (max-min) + min;
    var entero = Math.floor(numero); 
    return entero;
};

function desplegarNuevaJugada(){
    var tamanoArreglo = nombres.length;
    intentos = 4;
    // Este if sirve para que una vez adivinados los nombres, habiendo parado el ciclo
    // le diga al jugador que ya ganó.
    if(tamanoArreglo > 0){
    // Variable determinada en la línea 15 de este código, éste es lo que la define:
        numeroAlAzar = enteroRandomEnRango(0, tamanoArreglo);
        var imagen = 'fotos/' + imagenes[numeroAlAzar];
        //Id de las imágenes en HTML
        $('#imagenPersona').attr('src', imagen);
    } else {
      alert ("Ya ganaste!!!")
    } 
};

$(document).ready(function(){ // Inico de document
  $('#headResult').text(puntaje); //Contador de puntos acumulados

  // inio de Click
  $('#btnClick').click(function(){ //Botón que valida el nombre de la imagén con el nombre que ingresa la jugadora

    var nombre = $('#inputNombre').val(); //#inputNombre es el Id de la caja donde la jugadora escribe el nombre que cree correcto
    console.log('El usuario escribió: ' + nombre);   

    var nombreAAdivinar = nombres[numeroAlAzar];
    console.log('El nombre correcto es: ' + nombreAAdivinar);


//Por este if funciona el contador de puntos, aquí se compara el nombre de la imagen con el nombre que ingresa la jugadora.
//Según el resultado de esa comparación se suma o restan puntos
    if(nombre === nombreAAdivinar){
      //Estas dos líneas sirven para que las imágenes acertadas no vuelvan a aparecer.
      nombres.splice(numeroAlAzar, 1); // splice desplaza ese número
      imagenes.splice(numeroAlAzar, 1); // es 1 porqie sólo queremos quitar una imagen

      puntaje += 5; //Contador positivo
      $('#headResult').text(puntaje); //Necesaria para imprimir puntaje
      desplegarNuevaJugada(); 

    } else {
      alert("El nombre no es correcto, te restan: " + intentos + ' intentos');
      intentos--;

        if (intentos <=0){
            nombres.splice(numeroAlAzar, 1); // splice desplaza ese número
            imagenes.splice(numeroAlAzar, 1); // es 1 porqie sólo queremos quitar una imagen
            
            puntaje -=1; //Contador Negativo
            $('#headResult').text(puntaje); //Necesaria para imprimir puntaje
            desplegarNuevaJugada(); //Necesario para que a los 5 intentos cambie de foto
        }
      }
  });
  // Final de click
});
// Final de document
