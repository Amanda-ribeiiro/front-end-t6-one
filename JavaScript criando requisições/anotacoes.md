# JavaScript: criando requisições

## Mockar uma API

> Mockar vem da palavra mockup, nós só verbalizamos, botamos um verbo na palavra mockup, que na área de design, na área de arquitetura quer dizer um rascunho, um esboço de algo que vai ser feito no futuro mais profundamente. Neste caso um rascunho de uma API.

## Node.js 

> O Node é o ambiente de execução, de Javascript, que antes para rodarmos algum código, precisávamos entrar em um projeto no navegador e rodar os comandos através dessa conexão entre o HTML e Javascript. [instalação](https://nodejs.org/en)

Node.js é um ambiente de execução JavaScript que permite executar aplicações desenvolvidas com a linguagem sem depender de um navegador. Com o Node.js podemos executar aplicações sem o uso do navegador. Além disso, com ele é possível criar praticamente qualquer tipo de aplicações web, desde APIs até servidores para sites estáticos e dinâmicos.

## Instalando o json-server globalmente

Instalar o pacote `json-server` globalmente no computador, e assim poder utilizá-lo em qualquer projeto.

```bash
npm init
npm install json-server -g // instalar globalmente
npm install -g json-server@0.17.0 // instalar uma versão especifica
```

## Json-server

O json-server é um pacote NPM que pode ser instalado globalmente em ambientes que possuam o Node.JS instalado. Podemos executar o comando json-server no terminal, a partir de qualquer diretório.
Sempre que o arquivo JSON for alterado manualmente, temos que interromper o comando e iniciá-lo novamente para carregar as novas alteraçõe, o ideal é que o json-server carregue automaticamente as novas informações, então adicionamos a opção --watch, pra ele ficar olhando se tem alguma alteração.

```bash
json-server --watch db.json
```

> Vale ressaltar que, por baixo dos panos, o json-server usa o [lowdb](https://github.com/typicode/lowdb) para escrever as alterações direto no arquivo JSON.

Sistema impossibilitando a execução de scripts, para ajustar no Windows PowerShell executando como administrador:

```bash
Set-ExecutionPolicy RemoteSigned
```

Vai perguntar se eu quero ajustar para todos, e digitamos a e clica no botão Enter, é para todos os sistemas que tivermos aqui.

```bash
A
```


## Referências
- [Node.js: definição, características, vantagens e usos possíveis ](https://www.alura.com.br/artigos/node-js-definicao-caracteristicas-vantagens-usos?_gl=1*wnt6i5*_ga*MTg4Mzg1ODg3OS4xNzEzNDA2NTEy*_ga_1EPWSW3PCS*MTcxNzk3MjA2NS4zNy4xLjE3MTc5NzYwNDEuMC4wLjA.)
- [Node.js: o que é e como funciona](https://cursos.alura.com.br/extra/alura-mais/nodejs-o-que-e-e-como-funciona-c1414)
- [Mockando APIs REST com json-server](https://www.alura.com.br/artigos/mockando-apis-rest-com-json-server?_gl=1*4vaygn*_ga*MTg4Mzg1ODg3OS4xNzEzNDA2NTEy*_ga_1EPWSW3PCS*MTcxNzk3MjA2NS4zNy4xLjE3MTc5NzYwNDEuMC4wLjA.)
- [como criar e publicar uma biblioteca Javascript no NPM](https://www.alura.com.br/artigos/criando-e-publicando-uma-biblioteca-javascript-no-npm?_gl=1*4vaygn*_ga*MTg4Mzg1ODg3OS4xNzEzNDA2NTEy*_ga_1EPWSW3PCS*MTcxNzk3MjA2NS4zNy4xLjE3MTc5NzYwNDEuMC4wLjA.)
- [O que é uma API?](https://cursos.alura.com.br/extra/alura-mais/o-que-e-uma-api--c697)
- [Tradução livre do livro Eloquent JavaScript](https://eloquentjavascript.net/00_intro.html)
- [Revolução no Node.js: adeus ao Axios e fetch API na versão 17.5.0](https://www.alura.com.br/artigos/revolucao-node-js-adeus-axios-fetch-api-versao-17-5-0)
- [JavaScript: Consumindo e tratando dados de uma API](https://cursos.alura.com.br/course/javascript-consumindo-tratando-dados-api)
- [Começando com fetch no JavaScript](https://www.alura.com.br/artigos/comecando-com-fetch-no-javascript?_gl=1*szz84r*_ga*MTg4Mzg1ODg3OS4xNzEzNDA2NTEy*_ga_1EPWSW3PCS*MTcxODA1NTEzNS4zOS4xLjE3MTgwNTUxMzYuMC4wLjA.)
- [JavaScript assíncrono e fetch](https://cursos.alura.com.br/extra/alura-mais/javascript-assincrono-e-fetch-c93)
- [Async/await no JavaScript: o que é e quando usar a programação assíncrona?](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar?_gl=1*13rldws*_ga*MTg4Mzg1ODg3OS4xNzEzNDA2NTEy*_ga_1EPWSW3PCS*MTcxODA1NTEzNS4zOS4xLjE3MTgwNTUxMzYuMC4wLjA.)
- [Data Attributes do HTML5](https://cursos.alura.com.br/extra/alura-mais/data-attributes-do-html5-c109)
- [Template String](https://cursos.alura.com.br/extra/alura-mais/template-string-c123)
- [Strings com JavaScript: o que são e como manipulá-las](https://www.alura.com.br/artigos/strings-com-javascript-o-que-sao-e-como-manipular?_gl=1*1364ssx*_ga*MTg4Mzg1ODg3OS4xNzEzNDA2NTEy*_ga_1EPWSW3PCS*MTcxODA1NTEzNS4zOS4xLjE3MTgwNTgyNjcuMC4wLjA.)
- [Como funciona o import e export do JavaScript?](https://www.alura.com.br/artigos/como-funciona-o-import-e-export-do-javascript)
- [JavaScript: métodos de array](https://cursos.alura.com.br/course/javascript-metodos-array)
- [Conhecendo Arrow Functions](https://www.alura.com.br/artigos/conhecendo-arrow-functions?_gl=1*1so8paj*_ga*MTg4Mzg1ODg3OS4xNzEzNDA2NTEy*_ga_1EPWSW3PCS*MTcxODA1NTEzNS4zOS4xLjE3MTgwNTgyNjcuMC4wLjA.)
- [A função Math.random() no JavaScript na criação de números pseudoaleatórios](https://www.alura.com.br/artigos/funcao-math-random-javascript-numeros-pseudoaleatorios?utm_source=gnarus&utm_medium=timeline&_gl=1*o4gaxs*_ga*MTg4Mzg1ODg3OS4xNzEzNDA2NTEy*_ga_1EPWSW3PCS*MTcxODA1NTEzNS4zOS4xLjE3MTgwNjAxMDYuMC4wLjA.)
- [Diferenças entre GET e POST](https://www.alura.com.br/artigos/diferencas-entre-get-e-post?_gl=1*apdra8*_ga*MTg4Mzg1ODg3OS4xNzEzNDA2NTEy*_ga_1EPWSW3PCS*MTcxODA1NTEzNS4zOS4xLjE3MTgwNjA3ODMuMC4wLjA.)
- [UX Design em T: O que Front-End tem a ver com UX?](https://www.alura.com.br/artigos/ux-design-em-t-front-end-a-ver-com-ux?_gl=1*lebj1m*_ga*MTg4Mzg1ODg3OS4xNzEzNDA2NTEy*_ga_1EPWSW3PCS*MTcxODA1NTEzNS4zOS4xLjE3MTgwNjQ0NzEuMC4wLjA.)
- [UX Design em T: o que um programador tem a ver com a UX?](https://www.alura.com.br/artigos/ux-design-em-t-o-que-um-programador-tem-a-ver-com-a-ux?_gl=1*8xc8sa*_ga*MTg4Mzg1ODg3OS4xNzEzNDA2NTEy*_ga_1EPWSW3PCS*MTcxODA1NTEzNS4zOS4xLjE3MTgwNjQ1MTMuMC4wLjA.)
- [10 Heurísticas de Nielsen. Uma fórmula pra evitar erros básicos de usabilidade](https://www.alura.com.br/artigos/10-heuristicas-de-nielsen-uma-formula-pra-evitar-erros-basicos-de-usabilidade?_gl=1*xdxbvn*_ga*MTg4Mzg1ODg3OS4xNzEzNDA2NTEy*_ga_1EPWSW3PCS*MTcxODA1NTEzNS4zOS4xLjE3MTgwNjQ1MTguMC4wLjA.)
- [A função Math.random() no JavaScript na criação de números pseudoaleatórios](https://www.alura.com.br/artigos/funcao-math-random-javascript-numeros-pseudoaleatorios?utm_source=gnarus&utm_medium=timeline&_gl=1*o4gaxs*_ga*MTg4Mzg1ODg3OS4xNzEzNDA2NTEy*_ga_1EPWSW3PCS*MTcxODA1NTEzNS4zOS4xLjE3MTgwNjAxMDYuMC4wLjA.)
