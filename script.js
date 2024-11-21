// Cadastro de recrutas

let primeiroNome = prompt('Digite seu primeiro nome:');  // Solicita o primeiro nome
let sobrenome = prompt('Digite seu sobrenome:');  // Solicita o sobrenome
let curso = prompt('Digite seu curso da base técnica:');  // Solicita o curso
const anoNascimento = parseInt(prompt('Digite seu ano de nascimento:'));  // Solicita o ano de nascimento e converte para número

let idade = 2024 - anoNascimento;  // Calcula a idade com base no ano de nascimento

console.log(`
    Olá ${primeiroNome} ${sobrenome}
    Então você estuda ${curso} e tem ${idade} anos. Legal!
`);

// Calculadora

let num1 = parseInt(prompt('Digite um número:'));  // Solicita o primeiro número
let num2 = parseInt(prompt('Digite outro número:'));  // Solicita o segundo número

let soma = num1 + num2;  // Realiza a soma
let sub = num1 - num2;  // Realiza a subtração
let multi = num1 * num2;  // Realiza a multiplicação
let div = num1 / num2;  // Realiza a divisão

console.log(`
    Resultado:
    ${num1} + ${num2} = ${soma}
    ${num1} - ${num2} = ${sub}
    ${num1} * ${num2} = ${multi}
    ${num1} / ${num2} = ${div}
`);
