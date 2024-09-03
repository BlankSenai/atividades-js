function contarPares(start, end) {
    let count = 0

    for (let i = start; i < end; i++) {
        if (!(i % 2)) {
            count++
        }
    }

    return count
}

while (true) {
	const firstNum = Number(prompt('Digite um número: '))

	if (!firstNum) continue

	const secondNum = Number(prompt('Digite outro número: '))

	if (!secondNum) continue

	alert(contarPares(firstNum, secondNum))
	break
}