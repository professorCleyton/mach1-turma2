  {
    // Criando Função com retorno 
    function quadrado (numero) {
      return numero * numero
    }

     // Chamando a função
     //console.log(quadrado(2))
     let quadradoNumero = quadrado(2)
     //console.log(quadradoNumero)
  }

  {
    let texto = 'Texto que escrevi'
   
    // Essa função é uma função sem retorno ou void
    function exibeTextoNaTela (textoDigitado){
      if(textoDigitado !== ""){
        alert(textoDigitado)
      }else{
        alert('Coloque um texto válido para ser exibido')
      }
    }
      // Chamada 1ª vez
    //exibeTextoNaTela(texto)
    // Chamada 2ª vez
    //exibeTextoNaTela('Esse eu escrevi')

  }


  {
    // VOID ou sem retorno
    function goleiro (nome,titular){
      console.log(`${nome} É titular? ${titular} `)
    }

    goleiro('Dimas',true)
    goleiro('Cleyton',false)
  }

  {
    // Função com retorno texto ou string
    function definirPosicao (carcteristica1,carcteristica2){
      if(carcteristica1 =='Alto' && carcteristica2 =='Marcador'){
        return 'Zagueiro'
      }else if(carcteristica1 =='Baixo' && carcteristica2 =='Veloz'){
        return 'Ponta'
      }else if(carcteristica1 =='Alto' && carcteristica2 =='Finalizador'){
        return 'Centro-Avante'
      }else{
        return 'Jogador curinga'
      }
    }

    console.log(definirPosicao('Alto'))
    console.log(definirPosicao('Baixo','Lento'))
  }


{
  // Função que me retorna se um numero passado como argumento é par ou ímpar
  // retorna um texto ou string
  function parOuImpar(numero){
    if(!isNaN(numero)){
      if(numero % 2 == 0){
        return 'Par'
      }else{
        return 'Ímpar'
      }
    }else{
      return 'Número inválido'
    }

  }
  console.log(parOuImpar(2))
  console.log(parOuImpar(3))
  console.log(parOuImpar())
}
