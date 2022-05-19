// No cambies los nombres de las funciones.
//hola hola es una prueba
function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  let array =[];
  for (valor in objeto){
    array.push([valor,objeto[valor]]);

  }
  return array;
} 



function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  let array =[];
  let obj={};
  for (let letter of string){
    let cont=0;
    if (!array.includes(letter)){
      for(letter2 of string){
        if (letter === letter2){
          cont +=1
        }
      }
      obj[letter]=cont
      array.push(letter)
    }
    
  }
  return obj
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  let banderaMayuscula = true;
  let banderaMinuscula = true
  string = "";
  for (let letter of s){
    for (let letter2 of s){
      if (!banderaMayuscula && letter2!=letter2.toUpperCase()){
        string += letter2;
        
      }
      if (letter2==letter2.toUpperCase() && banderaMayuscula){
          string+=letter2;
      }
    }
    if (!banderaMayuscula){
      return string;
    }
    banderaMayuscula = false;
  }
  
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let array = str.split(" ");
  frase =""
  nuevoArray = array.map((palabra)=>{
    let nuevaPal = "";
    for (let i = palabra.length-1 ; i>=0 ; i--){
      
      nuevaPal+=palabra[i];
    }
    return nuevaPal;
    
  })
  for (let pal of nuevoArray){
    frase += pal + " "
  }
  return frase

  
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  string = numero.toString();
  let nuevo="";
  for (let i = string.length-1; i>=0 ; i--){
    nuevo += string[i];
  }
  if (string == nuevo){
    return ("Es capicua");
  } else{
    return ("No es capicua");
  }
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let nuevo = ""
  for (letter of cadena){
    if (letter !="a" && letter!="b" && letter!="c"){
      nuevo += letter
    }
  }
  return nuevo;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  
  nuevo =[]
  let palabra;
  for (let pal of arr){
    primerPalabra =true;
    for(let pal2 of arr){
   	  if (primerPalabra && !nuevo.includes(pal2)){
        primerPalabra=false;
        palabra = pal2;
      }
   	  if (pal2.length < palabra.length && !nuevo.includes(pal2)){
      palabra = pal2;   
      }
        
    }
	nuevo.push(palabra);
	
  }
  return nuevo;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí 
  array = [];
  for (numero of arreglo1){
    for (numero2 of arreglo2){
      if (numero == numero2 && !array.includes(numero)){
        array.push(numero)
      }
    }
  } 
  return array
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

