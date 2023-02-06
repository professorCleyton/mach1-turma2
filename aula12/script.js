{
  /* Declaração tradicional de função */
  function retornaMensagem (Argumento = 0) {
    let retorno = 'retorno ' + Argumento
    return retorno
  }
  console.log(retornaMensagem(10))

  /* Atribuindo uma função a uma variavel */
  let minhaFuncao = function(){
    console.log('Minha Função')
  }
  minhaFuncao ()

  let retornaTexto = function(texto){
    return texto
  }
  console.log(retornaTexto('teste'))

  function somaDoisNumeros (primeiroNumero = 0, segundoNumero) {
    return primeiroNumero + segundoNumero
  }

  console.log(somaDoisNumeros(1,'teste')) // Retorno bizarro 1
  console.log(somaDoisNumeros()) // Retorno bizarro 2
  console.log(somaDoisNumeros('teste','teste')) // Retorno bizarro 3
}
