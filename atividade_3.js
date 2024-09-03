function contarOcorrencias(string, char) {
	let count = 0

	for (let i = 0; i < string.length; i++) {
		if (string.charAt(i) === char) count++
	}

	return count
}

while (true) {
	const string = prompt('Digite algum texto: ')

	if (!string) continue

	const char = prompt('Escolha um caractere para verificar quantas vezes apareceu: ')

	if (!char) continue

	alert(contarOcorrencias(string, char))
	break
}