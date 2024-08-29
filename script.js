// cadastro de recrutas

let sobrenome = 'Digite seu sobrenome:'
let curso = 'Digite seu curso da base técnica:'
const anoNascimento = parseInt('Digite seu ano de nascimento:')

let idade = 2024 - anoNascimento

console.log(`
    Olá ${primeiroNome} ${sobrenome}
    Então você estuda ${curso} e tem ${idade} anos. Legal!
`)

//calculadora
let num1 = parseInt('Digite um número:')
let num2 = parseInt('Digite outro número:')

let soma = num1 + num2
let sub = num1 - num2
let multi = num1 * num2
let div = num1 / num2

console.log(`
    Resultado:
    ${num1} + ${num2} = ${soma}
    ${num1} - ${num2} = ${sub}
    ${num1} * ${num2} = ${multi}
    ${num1} / ${num2} = ${div}
`)