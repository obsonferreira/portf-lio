var botao = document.querySelector("#botao-senha");
botao.addEventListener('click', () => {
    var valorInput = document.getElementById('tamanho-senha').value;
    if (valorInput < 4) {
        alert("Digitos minimos: 4");
        document.getElementById("senhaAleatorio").innerHTML = "Quantidade minima de digitos 4!"
    } else {

        var valor = geraSenha(valorInput);
        document.getElementById("senhaAleatorio").innerHTML = valor;
    };
});

function geraSenha(tamanho) {
    let valida;
    let senha = [];

    do {
        senha = [];
        for (let cont = 0; cont < tamanho; cont++) {

            let codigoAscii = Math.floor(Math.random() * (126 - 33 + 1)) + 33;

            senha.push(String.fromCharCode(codigoAscii));

        };
        valida = validaSenha(senha);
    } while (!valida);

    return senha.join("");

};

function validaSenha(senhaArray) {

    let charMaiusculo = 0;
    let charMinusculo = 0;
    let num = 0;
    let charEspecial = 0;

    for (let character of senhaArray) {

        const codigo = character.charCodeAt(0);

        if (codigo >= 97 && codigo <= 122) {

            charMinusculo++;

        } else if (codigo >= 48 && codigo <= 57) {

            num++;

        } else if (codigo >= 65 && codigo <= 90) {

            charMaiusculo++;

        } else {

            charEspecial++;

        };
    };


    return charMaiusculo > 0 && charMinusculo > 0 && num > 0 && charEspecial > 0;
};

function recebeQuantidade() {

    const quantidade = readlineSync.question("quantidade de caracter para gerar sua senha aleatoria: ");
    const numero = parseInt(quantidade);

    if (isNaN(numero)) {
        console.log("Digite apenas numeros!")
        return 0;
    };

    return numero;
};
