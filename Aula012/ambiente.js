let num = [2,8,4,9,3]
num.sort() // Esse comando coloca a posiçãos dos vetores em ordem crescente
num.push(1) // Esse comando acrescenta o valor colocado entre parenteses após o ultimo espaço do vetor
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log(`O quinto valor do vetor é ${num[4]}`)

let vet = num.indexOf(9) // Esse comando encontra a posição que o valor entre parenteses esta dentro do vetor

console.log(`O valor 9 esta na posição ${vet}`)