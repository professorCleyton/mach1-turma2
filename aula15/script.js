// Lendo todo o document carregado na página 
let documento = document
//console.log(documento)
// Ler apenas um id através da interface do document
// Retorna o objeto referente ao elemento do id dentro de document
let titulo = document.getElementById('titulo-dom') 
// console.log(titulo)
//Lendo o body carregado no document
let bodyDoDocument = document.body
//console.log(bodyDoDocument)
// Lendo todos os nós do document
let listaNos = document.childNodes;
//console.log(listaNos)

// Insere uma div e um conteúdo dentro do body através da interface document 
const newDiv = document.createElement("div");
newDiv.innerHTML = "Alouuuuu carnavrall ta chegando";
// usando referencia do node body
document.body.appendChild(newDiv);
newDiv.setAttribute('class','paragrafo-custom')

// 
let conteudoNode = document.getElementById('conteudo-interacao-nodes')
// console.log(conteudoNode.childNodes)
//console.log(conteudoNode.firstChild)

// Nodelist
divList = document.querySelectorAll('div');
// console.log(divList)

// ELEMENT
let inputTexto = document.getElementById('input-texto')
inputTexto.value = ""
console.log(inputTexto.value)
inputTexto.value="Coloquei valor depois"
console.log(inputTexto.value)