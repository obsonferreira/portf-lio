
let botaoGerarCpf = document.querySelector("#gerar-cpf")
botaoGerarCpf.addEventListener('click', () => {
    let cpfInput = geraCpf();
    let cpfFormatado = exibeCpfFormatado(cpfInput)
    document.getElementById("cpfAleatorio").innerHTML = cpfFormatado;
});

let botaoValidaCpf = document.querySelector("#verificar-cpf");
botaoValidaCpf.addEventListener('click', () => {
    let input = document.getElementById('input-cpf').value;
    let renderizarCpf = validaCpfCompleto(input);
    document.getElementById("cpf-verificado").innerHTML = renderizarCpf;
});

// validaçoes do cpf digitado pelo usuario.
function validaCpfCompleto(input) {
    let cpfLimpo = limpaInput(input);
    let validacaoCpf = verificaCpf(cpfLimpo);
    let tamanhoValido = verificaTamanho(cpfLimpo);
    let digitoRepetido = verificaDigitosRepetidos(cpfLimpo);
     

    if (!tamanhoValido) {
        return (`CPF digitado incompleto, digite 11 numeros do cpf!`);

    } else if (!digitoRepetido) {
       return mensagemCpf(cpfLimpo, digitoRepetido);

    };
    if (tamanhoValido && digitoRepetido) {

        return mensagemCpf(cpfLimpo, validacaoCpf);
    };
};

function verificaTamanho(input) {

    return input.length === 11

};

function limpaInput(cpfInput) {
    let inputUsuario = cpfInput
    let cpfLimpo = inputUsuario.replace(/[^0-9]/g, "");

    return Array.from(cpfLimpo).map(digito => parseInt(digito));

};

function verificaDigitosRepetidos(input) {

    let todosRepetidos = 0;
    let primeiroDigito = input[0]

    for (let index = 1; index < input.length; index++) {
        if (primeiroDigito === input[index]) {

            todosRepetidos++;
        };
    };

    return todosRepetidos !== 10;
};

// validações internas para saber se o cpf é valido.

function somaDigitosCpf(cpfConvertido) {

    let peso = cpfConvertido.length + 1;

    let soma = 0;

    for (let digito of cpfConvertido) {

        soma += digito * peso;
        peso--;

    };
    return soma;
};

function digitoValidador(soma) {

    let resto = soma % 11;

    if (resto < 2) {

        return 0;

    } else {

        return 11 - resto;

    };

};


function verificaCpf(cpfInput) {

    let cpfValidado = retornaCpfValidado(cpfInput);
    const compare = (cpfValidado, cpfInput) => { return cpfValidado.length === cpfInput.length && cpfValidado.every((item, index) => item === cpfInput[index]) };
    let valida = compare(cpfValidado, cpfInput);

    return valida;
};

function retornaCpfValidado(cpfInput) {

    let cpfValidacao;
    let primeiroDigito;
    let segundoDigito;

    if (cpfInput.length === 9) {
        cpfValidacao = cpfInput.slice(0);
    } else {
        cpfValidacao = cpfInput.slice(0, -2);
    };

    primeiroDigito = digitoValidador(somaDigitosCpf(cpfValidacao));
    cpfValidacao.push(primeiroDigito);
    segundoDigito = digitoValidador(somaDigitosCpf(cpfValidacao));
    cpfValidacao.push(segundoDigito);

    return cpfValidacao;

};

// Gerar cpf automatico

function geraDigitos() {

    let digitos = [];

    for (let cont = 0; cont < 9; cont++) {

        digitos.push(Math.floor(Math.random() * (9 - 0 + 1)) + 0);

    };
    return digitos;

};

function geraCpf() {

    let cpf = retornaCpfValidado(geraDigitos());
    console.log(`funçao gerar cpf`);
    
    return cpf;
};

// formatar a exibição do cpf

function exibeCpfFormatado(cpfInput) {
    let cpfString = cpfInput.join('')
    return (`${(cpfString).slice(0, 3)}.${(cpfString).slice(3, 6)}.${(cpfString).slice(6, 9)}-${(cpfString).slice(9)}`);

};

function mensagemCpf(cpfInput, cpfValidacao) {
    let cpfString = cpfInput.join('')
    return (`${(cpfString).slice(0, 3)}.${(cpfString).slice(3, 6)}.${(cpfString).slice(6, 9)}-${(cpfString).slice(9)}, e um CPF ${cpfValidacao ? "Valido" : "Invalido"} `);

};


