function somaAte (num) {
    let sum = 1
    let count = 1

    while (count != num) {
        count++
        sum += count
    }

    return sum
}

while (true) {
    const num = prompt('Digite um número para somar de 1 até ele: ')

    if (!num) continue

    alert(somaAte(num))
    break
}