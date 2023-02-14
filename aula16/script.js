console.log('Começando a brincadeira')

/* Identificando elementos através do ID */
let inputNome = document.getElementById('nome')
let inputEmail = document.getElementById('email')
let textareaMensagem = document.getElementById('mensagem')
let button = document.getElementById('button-legal')

function exibeValoresConsole () {
  console.log('Chamou o click da massa')
  console.log(inputNome.value)
  console.log(inputEmail.value)
  console.log(textareaMensagem.value)
}

console.log(button)
// button.onclick(exibeValoresConsole)

/* Primeiro jeito de chamar uma função através do onclick no JS */
/*
button.onclick = function () {
  console.log('Chamou o click da massa')
  console.log(inputNome.value)
  console.log(inputEmail.value)
  console.log(textareaMensagem.value)
}
*/
/* Segundo jeito de chamar uma função através do onclick no JS */
button.onclick = exibeValoresConsole

inputNome.onkeydown = function () {
  console.log('Quando aperta a tecla', inputNome.value)
}

inputNome.onkeyup = function () {
  console.log('Quando solta a tecla', inputNome.value)
}

inputNome.onfocus = function() {
    console.log('Quando o pai ta focado', inputNome.value)
}