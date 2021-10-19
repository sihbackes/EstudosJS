/* ### Sistema de gastos familiar

Crie um objeto que possuira 2 propriedades, ambas do tipo array:
*receitas: []
*despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem dizendo se a família está com saldo positivo ou negativo, seguido do valor do saldo.
*/

//let family é o objeto
//dentro do obejto foram criadas duas propriedades: receitas e despesas
//array é uma lista, para criar um array você deve usar [] e separar por vírgulas
let family = {
  incomes: [2500, 3200, 250.43, 360.45],
  expenses: [320.34, 128.45, 176, 87, 1450]
}

//criar uma função para soma do array
//no final da função, vai retornar algum resultado
//então declaramos uma variável com let de total = 0
//Usamos zero pq o resultado pode ser A PARTIR DE 0, e não pode ficar sem valor
//Aqui usamos for of
//for/of - loops through the values of an iterable object
//no for of vamos listar os valores do array
//o total(que é igual a zero) vai ser igual o valor + total
// for of é um loop, ou seja na primeira rodada o valor do primeiro elemento do array vai ser somado a zero
//na segunda rodada o total já não vai ser zero, e vai ser somado novamente com o segundo elemento do array
//assim sucessivamente até somar todos os elementos do array
//poderia tb ser escrito total += valor
//o return vai trazer o resultado da somar de todos os elementos do array

function sum(array) {
  let total = 0
  for (let valor of array) {
    total = valor + total
  }
  return total
}

//essa function apenas roda a função acima
// na const calculateIncomes ele vai somar todos os elementos do array incomes dentro da variável family
//na const calculateExpenses ele vai somar todos os elementos do array expenses dentro da variável family
//na const total ele vai subtrair os dois resultados
//const isOk estabelece total igual ou maior que zero
//a let balanceText mostra "negativo", porém se itsok for positivo, ou seja, maior ou igual a zero o balanceText será "positivo"
// o console log vai mostrar o resultado concatenado com a mensagem "Seu saldo é R$"
//toFixed(2) deixa o numeral dos centavos com apenas 2 casas decimais

function calculateBalance() {
  const calculateIncomes = sum(family.incomes)
  const calculateExpenses = sum(family.expenses)

  const total = calculateIncomes - calculateExpenses

  const itsOk = total >= 0

  let balanceText = 'negativo'
  if (itsOk) {
    balanceText = 'positivo'
  }
  console.log(`Seu saldo é ${balanceText}:R$ ${total.toFixed(2)}`)
}
//aqui estamos executando a função acima
calculateBalance()
