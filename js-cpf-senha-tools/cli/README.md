# ferramentas CLI: Validador CPF + Gerador Senha 

Validador e gerador de CPF e um gerador de senha forte que roda em terminal. Projetos pra praticar lógica e organização de arquivos, busquei focar em soluções praticas e de fácil implementação.

## Por que fiz

Comecei a estudar de forma autodidata JS e na curiosidade fui pesquisar como a Receita Federal valida um cpf. No projeto optei por implementar a regra do módulo 11 na unha, antes de trabalhar com DOM.

## Como rodar

1. Instalar o Node.js (se não tiver).
2. `cd cli` (para navegar até a pasta do projeto).
3. `npm install readline-sync ` (instale a biblioteca para conseguir usar o teclado para digitar no terminal).
4. `node cpfTools.js` (executa o menu CPF no terminal).
- Menu simples com 3 opções: 1. gera cpf aleatório, 2. valida um cpf digitado e 3 finaliza a execução.
5. `node senhaUtils.js` (aqui o node executa o arquivo "senhaUtils.js" no terminal).
- Um capo onde você escolhe a quantidade de digitos da senha min. 4 digitos.

## O que faz o meu projeto

** Módulo CPF - `cpfTools.js` **

- Gera CPF válido aleatório (`Lembrando que válido não significa que ele faz parte do banco de dados da receita ou pertence a uma pessoa`).
- Valida CPF digitado: formatos aceitos `123.456.789-09 `, `12345678909`.
- Bloqueia CPF com dígitos repetidos, ex.:(`111.111.111-11`).
- Valida tamanho: avisa se digitou menos de 11 números (`Lembrando que letras não contabilizados como digitos válidos`).

** Módulo Senha - `senhaUtils.js` **

- Pede quantidade de dígitos e gera uma senha forte.
- Garante `uma letra maiúscula, uma letra minúscula, um número e um caracter especial`.
- Tamanho minímo: `4 digitos`

## Print

[./demo-cpfTools-cli.png]

[./demo-cpfTools1-cli.png]

[./demo-senhaUtils-cli.png]

## O que aprendi fazendo

1. Converter string em array do tipo `NUMBER` com `.map` e `parseInt`.
2. Limpar máscara do usuário com regex `/[^0-9]/g`.
3. Organizar responsabilidades e fluxo do código: função input só recebe, funções de calculos retornam valor e validações retornam boleanos.
4. Usar `readline-sync` para a interação do menu no terminal(`Mas nessa parte peguei o "massete" que facilitou no DOM`).
5. Gerar caractere aleatório usando: `Math.floor(Math.random())` para gerar números decimais da tabela ASCII e converter para caractere usando `String.fromCharCode()`.
6. Usar estrutura de repetição (`do-while, while, for`) e seleção (`if,if-else, switch-case`);
## Tecnologias
`JavaScript` + `Node.js` + `readline-sync`

## Próximos passos

- Remover dependências do `readline-sync` e usar `readline` nativo.
- Adicionar testes automatizados.
- Juntar CPF e Senha no mesmo menu
- Adicionar `module.exports` e escrever testes

Código de estudo. Sugestão e feedbacks são bem-vindos.
