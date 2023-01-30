/* Exemplo de laço for, contagem de 1 a 8 */
{
  for (let contador = 1; contador < 9; contador++) {
    //console.log(contador)
  }
}
{
  /* O mesmo exemplo em while */
  let contador = 1
  while (contador < 9) {
    //console.log(contador)
    contador++
  }
}

/*
Exemplo de lista escrita na mão
  1 - Elis
  2 - Dimas
  3 - Charle
  4 - Vah
*/

/*
Exemplo de lista array JS
  0 - Elis
  1 - Dimas
  2 - Charle
  3 - Vah
*/

{
  /* Declarando uma variável do tipo array */
  let convidados = ['Elis', 'Dimas', 'Charle', 'Vah']
  console.log(convidados) // Exibo o array inteiro com todas as posições
  /* PÉSSIMO EXEMPLO DE COMPARAÇÃO */
  if (convidados == 'Elis') {
    // FALSA
  }
  /* PÉSSIMO EXEMPLO DE COMPARAÇÃO */
  if (
    convidados[0] == 'Elis' ||
    convidados[1] == 'Elis' ||
    convidados[2] == 'Elis' ||
    convidados[3] == 'Elis'
  ) {
  }

  // console.log(convidados[0])
  // console.log('Tipo de dado que eu criei',typeof convidados)
}

{
  /* Declarando uma variável do tipo array */
  let convidados = ['Elis', 'Dimas', 'Charle', 'Vah']

  for (let contador = 0; contador < convidados.length; contador++) {
    // QUERO EXIBIR TODOS MENOS O DIMAS
    if (convidados[contador] !== 'Dimas') {
      console.log('Convidado' + (contador + 1), convidados[contador])
    }
  }
}

{
  /* Declarando uma variável do tipo array */
  let convidados = ['Elis', 'Dimas', 'Charle', 'Vah']
  for (let convidado of convidados) {
    console.log(convidado)
  }
}
