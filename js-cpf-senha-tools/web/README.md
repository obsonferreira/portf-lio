# ferramentas Web: Validador de CPF + Gerador Senha 

Validador e gerador de CPF e gerador de senha forte. Projeto pra praticar DOM puro sem biblioteca. Estou aperfeiçoando minha skill front-end.

## Por que fiz

Quis melhorar a apresentação do meu projeto CLI e praticar meu ponto mais fraco: front-end.
Reutilizei o mesmo algoritmo e troquei a forma de input e output.
No input troquei `readline-sync` por `document.getElementById().value`. 
No output troquei `console.log` por `innerHTML`.

## Como rodar

### Opção 1: Testar online - mais rápido
1. Acesse: https://obsonferreira.github.io/portfolio/
2. Pronto. Não precisa instalar nada

### Opção 2: Rodar local no seu PC
1. Baixe o repositório: `git clone https://github.com/obsonferreira/portfolio.git`
2. Entre na pasta: `cd portfolio/web`
3. Abra o arquivo `index.html` no navegador
   - Windows: duplo clique no arquivo
   - Ou arrasta o `index.html` pra dentro do Chrome

Não precisa de Node, não precisa de servidor. É HTML + JS puro rodando direto no navegador.


## O que faz o meu projeto

**Módulo CPF - `cpfTools.js`**

- Gera CPF válido aleatório (`Lembrando que válido não significa que ele faz parte do banco de dados da receita ou pertence a uma pessoa`).
- Valida CPF digitado: formatos aceitos `123.456.789-09 `, `12345678909`.
- Bloqueia CPF com dígitos repetidos, ex.:(`111.111.111-11`).
- Valida tamanho: avisa se digitou menos de 11 números (`Lembrando que letras não contabilizados como digitos válidos`).

**Módulo Senha - `senhaUtils.js`**

- Pede quantidade de dígitos e gera uma senha forte.
- Garante `uma letra maiúscula, uma letra minúscula, um número e um caracter especial`.
- Tamanho minímo: `4 digitos`

## Print

<img src="https://github.com/obsonferreira/portfolio/blob/main/js-cpf-senha-tools/web/demo-web.gif" width="500" alt= "Teste cpfTools.js e senhaUtils.js versão web">



## O que aprendi fazendo

1. Separar lógica de negócio do DOM: mesma função roda no Node e no navegador.
2. Manipular HTML com `querySelector` e `addEventListener`.
3. Pegar valor de input e renderizar resultado com `innerHTML`.
4. Linkar CSS e JS externo no HTML.
5. Organizar arquivos: HTML chama JS que importa utils.
6. Criar layout responsivo básico com CSS

## Tecnologias
`JavaScript` + `HTML`+ `CSS`

## Próximos passos

- Melhorar o layout e criar páginas para cada nicho(cpf e senha).
- Adicionar testes automatizados.
- Evoluir de front estático pra consumir API própria com Express.
- Trabalhar com banco de dados `CRUD`.

Código de estudo. Sugestão e feedbacks são bem-vindos.
