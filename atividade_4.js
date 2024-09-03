function fibonacci(num) {
	const fibArray = [0, 1]

	for (let i = 0, j = 1, k = 0; k < num; i = j, j = x, k++){
		x = i + j;
		fibArray.push(x);
	}

	return fibArray	
}	

while (true) {
	const num = prompt('Insira a quantidade de números da sequência de fibonacci que você deseja: ')

	if (!num) continue

	alert(fibonacci(num))
}