function verificarPalindromo(string) {
	const stringArr = string.split('')

	let reversedString = ''

	stringArr.reverse()
	
	stringArr.forEach((char) => {
		reversedString += char
	})

	return string === reversedString ? 'É Palíndromo' : 'Não é Palíndromo'
}

while (true) {
	const string = prompt('Digite uma palavra: ')

	if (!string) continue

	alert(verificarPalindromo(string))
	break
}