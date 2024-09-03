function checkEvenOrOdd (number) {
  !(number % 2) ? alert('Par') : alert('Ímpar')
}

while (true) {
  const number = Number(prompt('Digite um número: '))
  
  if (number) {
    checkEvenOrOdd(number)
    break 
  } else {
    alert('Digite um número')
  } 
}