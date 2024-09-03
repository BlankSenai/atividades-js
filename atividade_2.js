function calculadora(operation, num1, num2) {
	switch (operation) {
		case '+':
			return num1 + num2
		case '-':
			return num1 - num2
		case '*':
			return num1 * num2
		case '/':
			return num1 / num2
	}
}

while (true) {
	const operation = prompt('Qual operação deseja fazer?')
	const operations = ['+', '-', '*', '/']

	if (!operation || !operations.includes(operation) ) continue 

	const firstNumber = Number(prompt('Digite o primeiro número: '))

	if (!firstNumber) continue

	const secondNumber = Number(prompt('Digite o segundo número: '))

	if (!secondNumber) continue

	alert(calculadora(operation, firstNumber, secondNumber))
	break
}