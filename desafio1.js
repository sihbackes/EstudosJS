/* ### Transformar notas escolares

Crie um algoritmo que transforme as notas do sistema númerico para sistema de notas em caracteres tipo A B C

* de 90 para cima - A
* de 80 - 89      - B
* de 70 - 79      - C
* de 60 - 69      - D
* menor que 60    - F
*/

//Minhas anotações

//Let, const e var são variáveis, no exercício está sendo usada let.
// && signinifca ou
function getScore(score) {
  /*Vai ser scoreA se a nota for maior ou igual a 90 ou(&&) menor ou igual a 100*/
  let scoreA = score >= 90 && score <= 100

  /*Vai ser scoreB se a nota for maior ou igual a 80 ou(&&) menor ou igual a 89*/
  let scoreB = score >= 80 && score <= 89

  /*Vai ser scoreC se a nota for maior ou igual a 70 ou(&&) menor ou igual a 79*/
  let scoreC = score >= 70 && score <= 79

  /*Vai ser scoreD se a nota for maior ou igual a 60 ou(&&) menor ou igual a 69*/
  let scoreD = score >= 60 && score <= 69

  /*Vai ser scoreF se a nota for menor 60 ou(&&) maior ou igual a 0*/
  let scoreF = score < 60 && score >= 0

  //Declarada outra variável que foi dada o nome de scoreFinal usando let novamente
  let scoreFinal

  // aqui chamamos as variáveis declaradas a acima
  //if significa se e else significa senão(outro)
  //logo se(scoreA) o scorefinal vai ser = A
  if (scoreA) {
    scoreFinal = 'A'
  }
  //Não sendo scoreA, se for scoreB o scorefinal vai ser = B
  else if (scoreB) {
    scoreFinal = 'B'
  }
  //Não sendo scoreB, se for scoreC o scorefinal vai ser = C
  else if (scoreC) {
    scoreFinal = 'C'
  }
  //Não sendo scoreC, se for scoreD o scorefinal vai ser = D
  else if (scoreD) {
    scoreFinal = 'D'
  }
  //Não sendo scoreD, se for scoreF o scorefinal vai ser = F
  else if (scoreF) {
    scoreFinal = 'F'
  }
  //Não sendo nenhuma das variáveis vai retornar a mensagem : Nota inválida
  else {
    scoreFinal = 'Nota inválida'
  }

  //return + o nome da função faz com que o seu resultado retorne para fora da função
  return scoreFinal
}
//Aqui pelo console log você pode chamar a função e obter o retorno.
//O nome da função está entre parenteses e entre um novo parentes está a nota
//A nota que está em numeral vai retornar convertida em letras como foi definido na aplicação
console.log(getScore(101))
console.log(getScore(-10))
console.log(getScore(0))
console.log(getScore(45))
console.log(getScore(55))
console.log(getScore(65))
console.log(getScore(70))
console.log(getScore(85))
console.log(getScore(100))
console.log(getScore(95))
console.log(getScore(90))

/*Conditional Statements
Very often when you write code, you want to perform different actions for different decisions.

You can use conditional statements in your code to do this.

In JavaScript we have the following conditional statements:

Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false*/
