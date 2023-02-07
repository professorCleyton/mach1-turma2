{
  /* Declaração tradicional de função */
  function retornaMensagem (Argumento = 0) {
    let retorno = 'retorno ' + Argumento
    return retorno
  }
  // console.log(retornaMensagem(10))

  /* Atribuindo uma função a uma variavel */
  let minhaFuncao = function () {
    // console.log('Minha Função')
  }
  minhaFuncao()

  let retornaTexto = function (texto) {
    return texto
  }
  // console.log(retornaTexto('teste'))

  /* Problemas com tratamento de dados em uma função */
  function somaDoisNumeros (primeiroNumero = 0, segundoNumero) {
    return primeiroNumero + segundoNumero
  }

  // console.log(somaDoisNumeros(1,'teste')) // Retorno bizarro 1
  // console.log(somaDoisNumeros()) // Retorno bizarro 2
  // console.log(somaDoisNumeros('teste','teste')) // Retorno bizarro 3
}

{
  let listaAlunos1 = ['Danilo', 'Elis', 'Fernando']
  let listaAlunos2 = ['Jorge', 'Lucas', 'Eliseu']

  function exibeListaAlunos (listaDeAlunos = []) {
    // Default
    for (let i = 0; i < listaDeAlunos.length; i++) {
      console.log(listaDeAlunos[i])
    }
  }

  //exibeListaAlunos(listaAlunos1)
  //exibeListaAlunos('Teste')
  //exibeListaAlunos(5)
}

{

  let listaDeNumeros = [1,2]

  function soma (x = 0, y = 0, z = 0) {
    let soma = x + y + z
    return soma
  }

  let somaLista = soma(listaDeNumeros[0],listaDeNumeros[1],listaDeNumeros[2]) // Exemplo sem spread
  // console.log('Resultado da soma',somaLista)
  somaLista = soma(...listaDeNumeros) // exemplo com Spread operator
  // console.log('Resultado da soma',somaLista)
} 

{
  let sacolaoUberlandia = ['Banana','Maçã','Pera'] 
  let sacolaOsasco = []

  // Atribuindo array com referencia de memória
  //sacolaOsasco = sacolaoUberlandia
  
  sacolaOsasco = [...sacolaoUberlandia] // Spread para copiar sem referencia de memória
  sacolaOsasco.push('Uva')
  sacolaoUberlandia.unshift('Melância')

  //console.log('Primeira lista', sacolaoUberlandia) // Banana,Maçã e Pera
  //console.log('Segunda lista', sacolaOsasco)// Banana,Maça,Pera e uva
}

{
  let listaAlunosTurmaJunho = ['Elis','Charle']
  let listaAlunosTurmaOutubro = ['Jorge','Duda']
  let listaGeralMach1 = [listaAlunosTurmaJunho,listaAlunosTurmaOutubro]

  listaAlunosTurmaOutubro.push('Vah')

  // console.log('Lista Geral',listaGeralMach1)
}

{
  // Rest operator
  function exibeNumeroDeArgumentosPassados(...argumentos) {
    //console.log(argumentos.length);
  }

  exibeNumeroDeArgumentosPassados(1,2,3,10)
  // Soma de numeros N
  function somaTopDasGalaxias(...numeros){
    let resultado = 0
    for(let i=0;i<numeros.length; i++){
      resultado += numeros[i]
    }
    return resultado
  }

  console.log(somaTopDasGalaxias(10,10))
  console.log(somaTopDasGalaxias(20,10,10,10))
  console.log(somaTopDasGalaxias(0))
}

// Função anônima
(function (){
  alert('Iniciou a brincadeira')
})()