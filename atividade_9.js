function inverterString(string) {
	const stringArr = string.split('')

	let reversedString = ''

	stringArr.reverse()
	
	stringArr.forEach((char) => {
		reversedString += char
	})

	return reversedString
}

while (true) {
	const string = prompt('Digite uma palavra: ')

	if (!string) continue

	alert(inverterString(string))
	break
}