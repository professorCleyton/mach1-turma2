/*
 Receba um número e determine quantos 
 números ímpares deste número até 0

 10 e 0
 9 7 5 3 1

 Se um número divido por 2 for resto 0 ele é um número 
 Senão ele é um número ímpar
*/

{
  /* Fazendo sem usar a ferramenta correta */
  // Recebendo os dados
  let numeroRecebido = 5
  let numerosImpares = 0

  // Verifico se é par ou ímpar
  if (numeroRecebido % 2 == 0) {
    numeroRecebido-- // Decremento
  } else {
    numerosImpares += 1 // Somo um ímpar na brincadeira
    numeroRecebido-- // Decremento
  }

  // Verifico se é par ou ímpar
  if (numeroRecebido % 2 == 0) {
    numeroRecebido-- // Decremento
  } else {
    numerosImpares += 1 // Somo um ímpar na brincadeira
    numeroRecebido-- // Decremento
  }

  // Verifico se é par ou ímpar
  if (numeroRecebido % 2 == 0) {
    numeroRecebido-- // Decremento
  } else {
    numerosImpares += 1 // Somo um ímpar na brincadeira
    numeroRecebido-- // Decremento
  }

  // Verifico se é par ou ímpar
  if (numeroRecebido % 2 == 0) {
    numeroRecebido-- // Decremento
  } else {
    numerosImpares += 1 // Somo um ímpar na brincadeira
    numeroRecebido-- // Decremento
  }

  // Verifico se é par ou ímpar
  if (numeroRecebido % 2 == 0) {
    numeroRecebido-- // Decremento
  } else {
    numerosImpares += 1 // Somo um ímpar na brincadeira
    numeroRecebido-- // Decremento
  }

  // console.log('Numeros ímpares', numerosImpares)
}

{
  // Recebi os dados
  let recebeNumero = 16
  let numerosImpares = 0
  // Percorrendo o número até o intervalo de 0
  while (recebeNumero > 0) {
    // Verifico se é par ou ímpar
    if (recebeNumero % 2 !== 0) {
      numerosImpares += 1 // Somo um ímpar na brincadeira
    }
    recebeNumero--
  }
  console.log('Numeros ímpares', numerosImpares)
}

{
  let diasDaSemana = 7
  let diasEstudo = 1
  while (diasEstudo <= diasDaSemana) {
    // Condição
    switch (diasEstudo) {
      case 1:
        console.log('Fui estudar na Segunda')
        break
      case 2:
        console.log('Fui estudar na Terça')
        break
      case 3:
        console.log('Fui estudar na Quarta')
        break
      case 4:
        console.log('Fui estudar na Quinta')
        break
      case 5:
        console.log('Fui estudar na Sexta')
        break
      default:
        console.log('Não fui estudar!')
        break
    }

    diasEstudo++ // Incremento
  }
}

{
  // Exemplo de uso do while
  let cont = 2

  do {
    cont ++
    console.log('contagem', cont)
  } while (cont < 1)

  
}
