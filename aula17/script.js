/* 
1 - Validar se todos os campos do formulário estão preenchidos
4 - Criar um objeto produto com as propriedades descritas no form
5 - Ao clicar no cadastrar, preencher uma posição no array com o objeto produto
 e exibir uma mensagem de produto cadastrado com sucesso
6 - Limpar o formulário após a inserção do dado no array
7 - Ao clicar no concluir cadastramento, escoder o form e exibir a lista
8 - Percorrer o array e injetar todos os registros no HTML


Atividade secundária
1 - Limitar quantidade de caracteres do nome e descrição
2 - Realmente quer concluir o cadastramento
3 - Validar se o código digitado já existe
*/

/* Identificar os elementos no html através do ID */
let codigoProduto = document.getElementById('codigo-produto')
let nomeProduto = document.querySelector('#nome-produto')
let descricaoProduto = document.getElementById('descricao-produto')
let precoProduto = document.querySelector('#preco-produto')
let botaoSalvar = document.getElementById('botao-salvar')
let botaoConcluir = document.getElementById('botao-concluir')
let sectionCadastramento = document.getElementById('cadastramento-produtos')
let sectionListaProdutos = document.getElementById('listagem-produtos')
let formulario = document.querySelector('form')

/* Variaveis de armazenamento */
let produto = {
  codigo:0,
  nome: '',
  descricao:'',
  preco:0
}

let listaProdutos = []

/* Verificar se todos os campos do form estão preenchidos */
function camposPreenchidos () {
  // Sim ou não // True or False
  if (
    codigoProduto.value !== '' &&
    nomeProduto.value !== '' &&
    descricaoProduto.value !== '' &&
    precoProduto.value !== ''
  ) { // Campos preenchidos
    return true
  } else { // Senao
    return false
  }
}

/* Fazendo do jeito pedreiro master  fins didáticos*/
function liparFormulario(){
  codigoProduto.value = ''
  nomeProduto.value = ''
  descricaoProduto.value = ''
  precoProduto.value = ''
}

function salvarProduto (){
  // Crio uma cópia do modelo do objeto  produto
  let produtoCriado = {...produto}
  // Atribuo valor as propriedades desse objeto
  produtoCriado.codigo = codigoProduto.value
  produtoCriado.nome = nomeProduto.value
  produtoCriado.descricao = descricaoProduto.value
  produtoCriado.preco = precoProduto.value

  // Enviando pro array que armazena os produtos
  listaProdutos.push(produtoCriado)
  // Limpando o form
  formulario.reset() // Forma fácil de fazer se souber pesquisar antes do professor ensinar
  //liparFormulario() // Pedreiro master fins didáticos
  console.log(listaProdutos)
}

botaoSalvar.onclick = () => {
  if (camposPreenchidos()) { // Se for true
    salvarProduto()
  } else { // senao 
    console.log('Campos não preenchidos')
  }
}
