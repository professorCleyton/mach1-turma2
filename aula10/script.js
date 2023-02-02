{
  let nome = 'Cleyton' // String ou texto
  let idade = 32 // Number ou número
  let filhos = ['Maria', 'Rael'] // Array (Object)

  /* Descrevendo objeto pessoa */
  let pessoa = {
    nome: 'Cleyton',
    idade: 32,
    filhos: ['Maria', 'Rael'],
    altura: 1.69,
    corDosOlhos: 'Castanho Escuro',
    estadoCivil: 'Casado'
  }

  // console.log(pessoa)
}

{
  let transacaoPix = {
    chavePixDestinatario: 'cleytonwide@gmail.com',
    valor: 1000.0,
    data: '01/02/2023',
    chaveDeTransacao: 202315646546451,
    descricao: 'Ajuda ao professor'
  }

  // console.log(transacaoPix)
  // console.log('Valor do PIX',transacaoPix.valor)
  // console.log('Data do PIX',transacaoPix.data)
}

{
  let carro = {
    tipoDeCarro: 'SUV',
    marca: 'Jeep',
    modelo: {
      tipo: 'Compass',
      anoModelo: 2024,
      descricaoModelo: 'Adventure'
    },
    motor: {
      tipoMotor: '2.8 Diesel',
      descricao: 'V8 Boladão',
      cavalos: '500 cv',
      tracao: '4x4'
    },
    opcionais: ['Ar', 'Direção', 'Controle de tração', 'Multimidia'],
    anoFabricacao: 2023,
    cambio: 'Automático',
    preco: 200000
  }

  console.log(carro)
  console.log('Ano modelo', carro.modelo.anoModelo) // Acessando objeto dentro do objeto
  console.log('Opcionais', carro.opcionais[0]) // Acessando uma propriedade do tipo array
  console.log('Opcionais', carro.opcionais[1])

  // Adicionando uma propriedade no objeto
  carro.cor = 'Branco'
  // Substituir o valor de uma propriedade
  carro.cambio = 'Manual'

  console.log(carro)
}

{
  // Exemplo de array de objetos
  let pessoa1 = {
    nome: 'Cleyton',
    idade: 32,
    filhos: ['Maria', 'Rael'],
    altura: 1.69,
    corDosOlhos: 'Castanho Escuro',
    estadoCivil: 'Casado'
  }

  let pessoa2 = {
    nome: 'Dimas',
    idade: 34,
    filhos: [],
    altura: 1.83,
    corDosOlhos: 'Castanho Escuro',
    estadoCivil: 'Casado'
  }

  // Array de objetos
  let convidados = [pessoa1,pessoa2]

  console.log (convidados)
 // Acessando o objeto dentro do array
 console.log ('Nome do primeiro convidado da lista',convidados[0].nome)
 console.log ('Nome do segundo convidado da lista',convidados[1].nome)
}