//Variáveis e tipos de dados
// declaração or declaration
var name;

// assignment or atribuição de valores
name = "Simone";

// que tipo de dado foi colocado na variável
console.log(typeof name); //string

//agrupamento de declarações
let age, isHuman;

age = 30;
isHuman = true;

console.log(name, age, isHuman);

// escrito de texto + variáveis
//concatenando valores
console.log("A " + name + " tem " + age + " anos. ");

//interpolando valores com template literals or template strings
console.log(`A ${name} tem ${age} anos.`);
