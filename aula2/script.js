{
  // Inicializando variáveis e garantindo que sejam numéricas
  /* SOMANDO EM JS + */
  let primeiroNumero = 10
  let segundoNumero = 10
  let Soma = 0

  /* Acrescentando um valor ao valor existe da variável */
  // primeiroNumero = primeiroNumero + 10; //20
  // segundoNumero = segundoNumero + 5; // 15

  /* Outro jeito de fazer */
  primeiroNumero += 10
  segundoNumero += 5

  Soma = primeiroNumero + segundoNumero
  console.log('Soma', Soma) // 35
  console.log('Tipo da variavel numero', typeof Soma)
}

{
  // SUBTRAÇÃO -
  let primeiroNumero = -10
  let segundoNumero = 5
  let Subtracao = primeiroNumero - segundoNumero // subtracao = -10 -5
  console.log('Subtração', Subtracao)

  primeiroNumero = 30
  segundoNumero = 10
  Subtracao = primeiroNumero - segundoNumero
  console.log('Subtração2', Subtracao)
}

{
  // MULTIPLICAÇÃO *
  let primeiroNumero = 2
  let segundoNumero = 5
  let Multiplicacao = primeiroNumero * segundoNumero
  console.log('Multiplicação', Multiplicacao)
}

{
  // DIVISÃO /
  let primeiroNumero = 10
  let segundoNumero = 2
  let Divisao = primeiroNumero / segundoNumero

  console.log('Divisão', Divisao)
}

/* MÉDIA SIMPLES 
ALUNO     NOTA1    NOTA2      Média
Cleyton    5         8         5.5
Vah        10        6          9
Jorge      10        10         10

Média = (N1 + N2) / 2 
*/
{
  let nota1 = 5
  let nota2 = 8
  let Media = (nota1 + nota2) / 2
  // Decremento
  Media--
  console.log('Média do Cleyton', Media)

  nota1 = 10
  nota2 = 6
  Media = (nota1 + nota2) / 2
  // INCREMENTAR
  Media++
  console.log('Média do Vah', Media)
}
