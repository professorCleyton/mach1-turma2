/*
Notação matemática:
 Média = (nota1 + nota2 + nota3) / 3
 Fase 1
 1- Criar variável nomeAluno e receber com prompt o nome

 2- Criar variável nota1 e converter em número recebendo 
 com promt a primeira nota

 3 - Criar variável nota2 e converter em número recebendo 
 com promt a segunda nota

 4- Criar variável nota3 e converter em número recebendo 
 com promt a terceira nota

 Segunda fase

 5- Calcular a media do aluno e atribuir a uma variável

 6 - Se a média do aluno for maior ou igual a 7 ele está aprovado

 7 - Exibo no console que o aluno está aprovado se a média for maior ou igual a 7


*/

{
  // Recebendo os dados
  let nomeAluno = prompt('Digite o nome do aluno')
  let nota1 = Number(prompt('Digite a primeira nota'))
  let nota2 = Number(prompt('Digite a segunda nota'))
  let nota3 = Number(prompt('Digite a terceira nota'))
  // Calculando a média
  let Media = (nota1 + nota2 + nota3)/3
  
  // Verificando se a média do aluno é >= 7
  if(Media >= 7){
    console.log(nomeAluno + ' Aprovado' + ' Média:'+ Media )
    // Media <=6 ou Media == 5 OU mais fácil Media >= 5
  }else if (Media>=5){
    console.log(nomeAluno + ' Recuperação' + ' Média:'+ Media )
    // Se nada de cima for verdadeiro então
  }else{
    console.log(nomeAluno + ' Reprovado' + ' Média:'+ Media )
  }
}