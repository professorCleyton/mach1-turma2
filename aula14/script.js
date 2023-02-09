//console.log("Inicializou meu script, vamos começar a brincadeira!")

/* Identificando um objeto no document do DOM utilizando ID */
let titulo = document.getElementById("titulo-dom").textContent
// console.log(document.getElementById("titulo-dom").textContent)
// console.log(titulo)

/* Identificando um objeto no document do DOM utilizando class */
let paragrafos = document.getElementsByClassName('paragrafo-custom')
// console.log(paragrafos)
// console.log(paragrafos[0].outerText)
// console.log(paragrafos[1].outerText)

/* Identificando um objeto no document do DOM utilizando tag ou seletor */
let tag = document.getElementsByTagName('div')
console.log(tag)