// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
  
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i = 0; i < array.length; i++) {
    array[i]++;
  }
  return array;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var res = '';
  for (var i = 0; i < palabras.length; i++) {
    if (i > 0) {
      res = res + ' ' + palabras[i];
    }
    else {
      res = res + palabras[0];
    } 
  }
  return res;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0; i < array.length; i++) {

    if (array[i] == elemento) {
      return true;
    }
    }
  return false;
  }


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
   var sumatoria = 0
  for (var o = 0; o < numeros.length; o++) {
    sumatoria = sumatoria + numeros[o];
  }
  return sumatoria;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sumatoria = 0;
  for (var f = 0; f < resultadosTest.length; f++) {
    sumatoria = sumatoria + resultadosTest[f];
  }
  return sumatoria/resultadosTest.length;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  function encontrarMayor(lista) {
    var may = lista[0];
    for (var i = 0; i < numeros.length; i++) {
      if (lista[i] > may) {
        may = lista[i];
      }
    }
    return may;
  }
/* 
  function intercambiar(lista,inf,sup) {
    var aux = lista[inf];
    lista[inf] = lista[sup];
    lista[sup] = aux;
  }

  function quicksort(lista,inf,sup) {
    var pivote;
    if (lista.length > 1) {
      pivote = ubicarPivote(lista,inf,sup);
      if (inf < pivote-1) {
        quicksort(lista,inf,pivote-1);
      }
      if (pivote < sup) {
        quicksort(lista,pivote,sup);
      }
    }
    return lista;

  }

  function ubicarPivote(lista,inf,sup){
    var pivote = lista[Math.floor((inf + sup) / 2)];
    while (inf <= sup){
      while (lista[sup]>=pivote && inf < sup){
        sup--;
    }
      while (lista[inf]<= pivote && inf < sup) {
        inf++;
      }
      if (inf <= sup) {
        intercambiar(lista,inf,sup);
        inf++;
        sup--;
      }
    return inf;
  }
  } */
  var may = encontrarMayor(numeros);
  return may;

}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (arguments.length != 0) {
    var res = 1;
    for (i = 0; i < arguments.length; i++) {
      res = res * arguments[i];
    }
  }
  else {
    return 0;
  }
  return res;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  function mayoriaEdad(arreglo) {
    var contador = 0;
    for (var i = 0; i < arreglo.length; i++) {
      if (arreglo[i]> 18) {
        contador++;
      }
    }
    return contador;
  }
  return mayoriaEdad(arreglo);


}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí:
  if (numeroDeDia === 1 || numeroDeDia === 7) {
    return 'Es fin de semana';
  }
  else if (numeroDeDia < 7 && numeroDeDia > 1) {
    return 'Es dia Laboral';
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  cadena = '' + n;
  if (cadena[0] == 9) {
    return true;
  }
  else return false;

}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var first = arreglo[0];
  for (var i = 0; i < arreglo.length; i++) {
    if (first != arreglo[i]){
      return false;      
    }
  }
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var res = [];
  var flagEnero = false;
  var flagMarzo = false;
  var flagNoviembre = false;
  for (i = 0; i < array.length; i++){
    if (array [i] == 'Enero') {
      flagEnero = true;
      res.push(array[i]);
    }
    else if (array[i] == 'Marzo') {
      flagMarzo = true;
      res.push(array[i]);
    }
    else if (array[i] == 'Noviembre') {
      flagNoviembre = true;
      res.push(array[i]);
    }
  }
  if (flagEnero && flagMarzo && flagNoviembre) {
    return res;
  }
  else return 'No se encontraron los meses pedidos';

}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var res = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      res.push(array[i]);
    }
  }
  return res;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var newArray = [];
  var flag = false;
  for (var i = 1; i <= 10; i++) {
    if (numero == i) {
      flag = true;
      break;
    }
    else {
      numero = numero + 2;
      newArray.push(numero);
    }
  }
  if (flag) {
    return 'Se interrumpió la ejecución'
  }
  return newArray;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var newArray = [];
  for (var i = 1; i <= 10; i++) {
    if (5 == i) {
      continue;
    }
    else {
      numero = numero + 2;
      newArray.push(numero);
    }
  }
  return newArray;

}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
