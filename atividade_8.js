function raizQuadradaInteira (num) {
    let raiz = 0;

    while ((raiz + 1) * (raiz + 1) <= num) {
        raiz++;
    }

    return raiz;
}

while (true) {
    const number = Number(prompt('Digite um número: '))

    if (!number) continue

    alert(raizQuadradaInteira(number))
    break
}