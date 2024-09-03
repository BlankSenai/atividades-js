function adivinheNumero() {
    const randomNum = Math.floor(Math.random() * 10)

    while (true) {
        const number = Number(prompt('Adivinhe o número...'))

        if (!number) continue

        if (number === randomNum) {
            alert('Parabéns!!!!! :o')
            break
        }
    }
}

adivinheNumero()
