// IF - SE
// Verificando se um número armazenado na variável é menor que 10
/*
    Comparando se é menor
    5 < 10 = Verdadeiro ou true
    11 < 10 = Falso ou false
    10 < 10 = Falso ou false

    Comparando se é maior
    10 > 10 = Falso ou false
    8 > 10 = Falso ou false
    15 > 10 = Verdadeira ou true

    Comparando se um número é maior ou  igual
    10 >= 10 = Verdadeiro ou true
    9 >= 10 = Falso ou false

    Comparando se um número é menor ou igual 
    10 <= 10 = Verdadeiro ou true
    11 <= 10 = Falso ou false

    Comparar se o valor dos números é exatamente igual 
    10 == 10 = Verdadeiro ou true
    10 == '10' = Verdadeiro ou true

    Comparar se o valor e o tipo são exatamente iguais
    10 === 10 Verdadeiro ou true 
    10 === '10' = Falso ou false

*/
{
  // Jeito 1 de fazer - Não muito bom mas funciona
  let numeroRecebido = 25
  let numeroComparado = 25

  // Numero recebido é maior que o número comparado
  if (numeroRecebido > numeroComparado) {
    console.log('O número recebido é maior!')
  } else {
    // Número recebido é menor que o número comparado
    if (numeroRecebido < numeroComparado) {
      console.log('O número recebido é menor!')
    } else {
      console.log('O número recebido é igual!')
    }
  }
}

{
  let numeroRecebido = 30
  let numeroComparado = 25

  if (numeroRecebido > numeroComparado) {
    // Exiba
    console.log('O número recebido é maior!')
    // Senão SE
  } else if (numeroRecebido < numeroComparado) {
    // Exiba
    console.log('O número recebido é menor!')
  } else {
    // Exiba
    console.log('O número recebido é igual!')
  }
}

{
  /* Receba uma idade e determine se a idade 
  digitada é de uma pessoa maior ou menor de idade */
  // Recebendo o dado
  let idade = 25

  if (idade >= 18) {
    console.log('Maior de idade')
  } else {
    console.log('Menor de idade')
  }
}

{
  // Usando ternários
  let idade = 10
  let maioridade = idade >= 18 ? 'Maior de idade' : 'Menor de idade'
  console.log(maioridade)
}

{
  /*
  Verificar se a pessoa pode ou não comprar um carro */

  let idade = 18
  let cnh = true
  let maioridade = idade >= 18 ? true : false
  // E se as duas condições são verdadeiras
  if(maioridade && cnh){
    console.log('Pode comprar um carro')
  }else{
    console.log('Não comprar um carro')
  }
}

{
  /* A pessoa pode entrar numa balada? */

  let idade = 15
  let dinheiro = true

  // OU se uma das condições forem verdadeiras
  if(idade>=18 || dinheiro){
    console.log('Entrou na balada')
  }else{
    console.log('Não entrou na balada')
  }
}

{
  /* Validar o tipo de dado recebido */
  // Recebo a idade
  let idade = prompt('Digite a idade') 
  // Verifico se a idade NÃO É UM NÚMERO
  let naoEhUmNumero = isNaN(idade)
  console.log(naoEhUmNumero) // Isso não é um número ? true : false
  
  // SE IDADE MAIOR QUE 18 E naoEhUmNumero false 
  if (idade >= 18 && naoEhUmNumero === false) {
    console.log('Maior de idade')
    // Senao se naoEhUmNumero false 
  } else if(naoEhUmNumero === false) {
     console.log('Menor de idade')
     // Se não a pessoa não digitou um número
  }else{
    console.log('Não digitou um número')
  }
}