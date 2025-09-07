var sorteado, inserido

sorteado = Math.round((Math.random() * 100)+1)

inserido = parseInt(prompt("Adivinhe o número:"))

if (inserido == sorteado) {
    alert("Parabéns! Você acertou!")
}

else if (inserido != sorteado) {

    while (inserido != sorteado) {
        if (inserido < sorteado) {
            inserido = prompt("Tente um número maior:")

        }
        else if (inserido > sorteado) {
            inserido = prompt("Tente um número menor:")
        }
    }
    if (inserido == sorteado) {
    alert("Parabéns! Você acertou!")
}
}



