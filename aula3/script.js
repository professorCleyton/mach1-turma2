{
  // Concatenando básico - juntando os textos
  let titulo = 'Aula de JS'
  let descricao = 'Aula de JS falando sobre textos.'

  // Jeito 1 de concatenar usando +
  console.log('Texto:', titulo + ' ' + descricao)
  console.log('Tipo da variavel', typeof titulo)
}

{
  // Concatenando básico - juntando os textos
  let texto = 'Aula de JS'
  // Jeito 2 de concatenar usando +
  texto = texto + ' ' + 'Aula de JS falando sobre textos.'

  console.log('Texto:', texto)
  console.log('Tipo da variavel', typeof texto)
}

{
  // Concatenando utilizando caracteres de scape
  let texto = 'Aula de JS'
  // Jeito 3 e mais top mais utilizado
  texto = `${texto} Aula de JS falando sobre textos.`
  console.log('Texto:', texto)
  console.log('Tipo da variavel', typeof texto)
}

{
  // CONCATENANDO TEXTO COM OUTROS TIPOS DE DADOS
  /*
  Média simples
  ALUNO     NOTA1    NOTA2     NOTA3    Média
  Cleyton    5         8        10  

  Notação matemática
  Média = (N1 + N2 + N3) / 3

  */
  // Recebendo as notas
  let nota1 = 5
  let nota2 = 8
  let nota3 = 10
  // Calcular a média
  let Media = (nota1 + nota2 + nota3) / 3
  // Criando uma mensagem para falar com o cliente
  // Concatenando texto com número
  let Mensagem = `A média do Cleyton é ${Media}`
  // Outro jeito mais feio
  // let Mensagem = 'A média do Cleyton é ' + Media
  // EXIBIR MEDIA NO CONSOLE
  console.log(Mensagem)
}

{
  // DESCOBRINDO O TAMANHO DE UM TEXTO
  let tipoNavegador = 'Mozilla'
  console.log('tamanho da string', tipoNavegador.length)
  // Pegando pedaço do texto
  console.log(tipoNavegador.slice(0, 3))
  // FICOB2530 - Ex: Código de cliente composto
  // TRANSFORMAR MEU TEXTO EM MAIÚSCULO
  console.log(tipoNavegador.toUpperCase())
  // transformar meu texto todo um minúsculo
  console.log(tipoNavegador.toLowerCase())
  // SUBSTITUINDO PEDAÇO DO TEXTO
  console.log(tipoNavegador.replace('Moz', 'Van'))
  let outroTextoComEspaco = 'Aula JS'
  console.log(outroTextoComEspaco.replace(' ', ''))
}
