import readlineSync from 'readline-sync';

let cpfUsuario;
let cpfAleatorio;
let sistem = true;

while (sistem) {

    let opcao = parseInt(recebeDados("digite uma opcao\n 1- Gerar um cpf aleatorio\n 2- Verificar um cpf \n 0- encerrar programa \n"));


    switch (opcao) {
        case 1:

            cpfAleatorio = geraCpf();
            exibeCpfFormatado(cpfAleatorio);

            break;
        case 2:

            let cpf = cpfInput();
            let cpfValidacao = verificaCpf(cpf);
            mensagemCpf(cpf, cpfValidacao);

            break;

        case 0:
            console.log(`Sistema sendo finalizado!`);

            sistem = false;
            break;

        default:

            console.log(`opcao invalida! `);

            break;
    };
};

// recebe dados brutos digitados pelo usuario.
function recebeDados(mensagem) {

    return readlineSync.question(mensagem);

};

// validaçoes do cpf digitado pelo usuario.

function verificaTamanho(input) {

    return input.length === 11

};

function inputSemCaracter() {
    let inputUsuario = recebeDados("digite um cpf\n");
    let cpfLimpo = inputUsuario.replace(/[^0-9]/g, "");

    return Array.from(cpfLimpo).map(digito => parseInt(digito));

};

function cpfInput() {
    let inputUsuario;
    let tamanhoValido;
    let digitoRepetido;


    do {

        inputUsuario = inputSemCaracter();
        tamanhoValido = verificaTamanho(inputUsuario);
        digitoRepetido = verificaDigitosRepetidos(inputUsuario);


        if (!tamanhoValido) {
            console.log(`CPF digitado incompleto, digite 11 numeros do cpf!`);

        } else if (!digitoRepetido) {
            mensagemCpf(inputUsuario, digitoRepetido);

        };

        if (tamanhoValido && digitoRepetido) {

            return inputUsuario;

        };
    } while (!tamanhoValido || !digitoRepetido);
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

function verificaCpf(cpfInput) {
    let cpfValidado = retornaCpfValidado(cpfInput);
    const compare = (cpfValidado, cpfInput) => { return cpfValidado.length === cpfInput.length && cpfValidado.every((item, index) => item === cpfInput[index]) };
    let valida = compare(cpfValidado, cpfInput);

    return valida;
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
    return cpf;
};

// formatar a exibição do cpf

function exibeCpfFormatado(cpfInput) {
    let cpfString = cpfInput.join('')
    console.log(`CPF gerado: ${(cpfString).slice(0, 3)}.${(cpfString).slice(3, 6)}.${(cpfString).slice(6, 9)}-${(cpfString).slice(9)}`);

};

function mensagemCpf(cpfInput, cpfValidacao) {
    let cpfString = cpfInput.join('')
    console.log(`O CPF digitado: ${(cpfString).slice(0, 3)}.${(cpfString).slice(3, 6)}.${(cpfString).slice(6, 9)}-${(cpfString).slice(9)}, e um CPF ${cpfValidacao ? "Valido" : "Invalido"} `);

};

// teste navegador

