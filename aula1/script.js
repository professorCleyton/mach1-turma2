{
  // PRIMEIRO ESCOPO
  var primeiraVariavel = '10' // Texto ou String
  let segundaVariavel = 10 // Número ou inteiro
  const terceiraVariavel = ''
  console.log(primeiraVariavel + segundaVariavel)
}

{
  // SUPERMERCADO
  let cocaCola = 2.5;
  console.log('Supermercado', cocaCola)
  {
    // LANCHONETE DO SUPERMERCADO
    let cocaCola = 5.5;
    console.log('Lanchonete', cocaCola)
  }
}

// Terceiro comando de saida e entrada
let textoDigitado = prompt('Digite alguma coisa usuario:')
console.log(textoDigitado)

// SOMAR DOIS NUMEROS INTEIROS 
/* 
    SOMA = N1 + N2
    1 - ADQUIRIR AS ENTRADAS 
    2 - ARMAZENAR AS ENTRADAS
    3 - REALIZAR A SOMA
    4 - EXIBIR O RESULTADO
*/
{
let recebePrimeiroNumero = Number(prompt('Digite o primeiro numero:'));
let recebeSegundoNumero = Number(prompt('Digite o segundo numero:'));
let Soma = recebePrimeiroNumero + recebeSegundoNumero;
console.log('Soma:',Soma);
}

