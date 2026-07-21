function Funcionario(nome, idade) {
    this.nome = `Nome: ${nome}`
    this.idade = `Idade: ${idade} anos`
}

function Junior(nome, idade, salario, localDeTrabalho) {
    Funcionario.call(this, nome, idade)

    this.salario = `O salário do funcionário é de: R$ ${salario}`
    this.localDeTrabalho = `Este funcionário trabalha em ${localDeTrabalho}`
    this.nivel = "O nível da pessoa é: Junior"
}

function Pleno(nome, idade, salario, localDeTrabalho) {
    Funcionario.call(this, nome, idade)

    this.salario = `O salário do funcionário é de: R$ ${salario}`
    this.localDeTrabalho = `Este funcionário trabalha em ${localDeTrabalho}`
    this.nivel = "O nível da pessoa é: Pleno"
}

const Joana = new Funcionario("Joana", 50)
const Enzo = new Junior("Enzo", 27, "3.500", "Modelo home-office")
const Marcelo = new Pleno("Marcelo", 30, "6.500", "Modelo presencial")

console.log(Joana)
console.log(Enzo)
console.log(Marcelo)