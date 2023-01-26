// CASO DE USO NO BOM PORTUGUÊS
const frutas = prompt('Digite o nome de uma fruta para saber o preço:')
switch (frutas) {
  // Caso de SE
  case 'Laranja':
  case 'laranja':
  case 'LARANJA':
    console.log('Laranjas custam R$ 2,00 o quilo.')
    break
  // Caso de ou com duas condições
  case 'Manga':
  case 'Papaya':
    console.log('Mangas e papayas custam R$ 5,00 o quilo.')
    break
  default:
    console.log(`Desculpe, não encontramos nenhuma fruta:
    ${frutas}. no catálogo`)
}

{
  // NEGAÇÃO - QUANDO EU NEGO UMA CONDIÇÃO VERDADEIRA
  let recebeDado = 10
  let ehUmNumero = !isNaN(recebeDado) // Negando a condição
  console.log('Valor recebido', recebeDado)
  console.log('É um número:', ehUmNumero)
}

{
  let modeloCarro1 = 'Celta'
  let modeloCarro2 = 'Celta'
  // Quero compara se são diferes
  if (modeloCarro1 !== modeloCarro2) {
    console.log('Modelos de carros são diferentes')
  }else{
    console.log('Modelos de carros são iguais')
  }
}

{
  let modeloCarro1 = '206'
  let modeloCarro2 = 206
  // Quero compara se são diferes
  if (modeloCarro1 !== modeloCarro2) {
    console.log('Modelos de carros são diferentes')
  }else{
    console.log('Modelos de carros são iguais')
  }
}
