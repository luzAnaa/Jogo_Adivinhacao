var sorteado, inserido

sorteado = Math.round((Math.random() * 100)+1)

inserido = parseInt(prompt("Adivinhe o número de 1 a 100:"))

if (inserido == sorteado) {
    alert("Parabéns! Você acertou!")
}

else if (inserido != sorteado) {

    while (inserido != sorteado) {
        if (inserido < sorteado) {
            inserido = prompt("Tente um número maior que " + inserido)

        }
        else if (inserido > sorteado) {
            inserido = prompt("Tente um número menor que " + inserido)
        }
    }
    if (inserido == sorteado) {
    alert("Parabéns! Você acertou!")
}
}



