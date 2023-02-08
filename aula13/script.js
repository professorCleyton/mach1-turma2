/* Criando uma função - Sintaxe comum */
function soma (primeiroNumero = 0, segundoNumero = 0) {
  return primeiroNumero + segundoNumero
}

/* Criando uma função atribuindo em variável - outro jeito de fazer */
let somaV2 = function (primeiroNumero = 0, segundoNumero = 0) {
  return primeiroNumero + segundoNumero
}

/* Usando arrow function */
let somaV3 = (primeiroNumero = 0, segundoNumero = 0) => {
  return primeiroNumero + segundoNumero
}

console.log(soma(1, 2))
console.log(somaV2(1, 2))
console.log(somaV3(1, 2))

/* Uso simples da arrow function */
let exibeMensagem = mensagem => console.log(mensagem)
exibeMensagem('Oi')
exibeMensagem('Sumido')

/* Funções de CALLBACK */
function recebeMensagem (exibeMsg) {
  let mensagem = prompt('Digite uma mensagem carinhosa')
  exibeMsg(mensagem)
}
//recebeMensagem(exibeMensagem)

function formataCpf (cpf) {
  let cpfFormatado = cpf.slice(0, 3)
  cpfFormatado += '.' + cpf.slice(3, 6)
  cpfFormatado += '.' + cpf.slice(6, 9)
  cpfFormatado += '-' + cpf.slice(9, 11)
  return cpfFormatado
}

function validaCpf (cpf) {
  if (cpf.length == 11 && !isNaN(cpf)) {
    return true
  } else {
    return false
  }
}

/* Função Processa CPF */
function processaCpf (formata, valida, exibe) {
  // Recebe o CPF via prompt
  let cpf = prompt('Digite um CPF válido')
  // Verifica se o CPF é válido
  if (valida(cpf)) {
    // Variavel cpfFormatado recebe resultado da função formata
    let cpfFormatado = formata(cpf)
    // Exibe o resultado no console log com uma mensagem customizada
    exibe('Cpf válido: ' + cpfFormatado)
  } else {
    // Chamo novamente a minha função de processamento que invocará todas as funções recebidas como callback junto com ela
    processaCpf(formata, valida, exibe)
  }
}

processaCpf(formataCpf, validaCpf, exibeMensagem)
