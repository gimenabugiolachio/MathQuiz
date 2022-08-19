export const data =[
  {
      question:"¿Cuánto es la cuarta parte de la tercera parte?",
      choices:["Un doceavo", "3/4 partes", "Un séptimo"],
      answer:"Un doceavo",
  },
  {
      question:"¿Cuál es la representación gráfica del número nueve mil treinta y seis?",
      choices:["90036", "936","9036"],
      answer:"9036",
  },
  {
      question:"Aproxima el número 58 a la decena.",
      choices:["50", "60", "55"],
      answer:"60",
  },
  {
      question:"¿Qué cantidad expresa el número romano V?",
      choices:["Uno", "Cinco", "Diez"],
      answer:"Cinco",
  },
  {
      question:"¿Cómo se llama el polígono de siete lados?",
      choices:["Heptágono", "Hexágono", "Septágono"],
      answer:"Heptágono",
  },
  {
      question:"¿Cuánto es 3*2*7?",
      choices:["36", "42", "44"],
      answer:"42",
  },
  {
      question:"¿Qué fórmula nos permite calcular el perímetro de un círculo?",
      choices:["Base * Altura", "Pi * Diámetro", "Lado * Lado"],
      answer:"Pi * Diámetro",
  },
  {
      question:"¿Qué número sigue en la sucesión: 2, 4, 3, 6, 5, 10, ... ?",
      choices:["9", "7", "11"],
      answer:"9",
  },
  {
      question:"SACO es a ASCO lo que 7683 es a...",
      choices:["3867", "6783", "8673"],
      answer:"6783",
  },
  {
      question:"¿Cuántos cuartos son seis mitades?",
      choices:["Son doce cuartos", "Son veinte cuartos", "Son diez cuartos"],
      answer:"Son doce cuartos",
  }
];

export function fisherYatesShuffle(arr){
  for (var i = arr.length -1; i>0; i--){
      var j = Math.floor(Math.random()*(i+1));
      [arr[i], arr[j]]=[arr[j], arr[i]];
  }
}

fisherYatesShuffle(data);