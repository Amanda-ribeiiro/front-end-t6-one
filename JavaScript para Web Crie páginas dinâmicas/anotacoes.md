## O que é o DOM?

> O DOM (Document Object Model) é como uma árvore genealógica, porém, de forma invertida. O elemento que antecede o document é o window, que nada mais é que a janela do navegador. Em sua estrutura, o document está no topo como objeto global e tem como elemento raiz a tag html e todas as outras descendem dela através das suas ramificações (branchs)

- Ao carregar a página, o navegador cria o documento, a interface, e o **Javascript usa o DOM para se conectar ao HTML**.
- Maneiras de manipulá-lo: no DevTools do navegador, na aba Console, ao digitar console.dir (diretório) e passar o parâmetro document, é exibida uma lista com propriedades e funcionalidades do documento.

## Algoritmos e Lógica de programação

> Quando a necessidade é desenvolver um programa ou rotina a ser executada pelo computador, precisamos deixar bem claro a sequência que deve ser seguida para atingir o resultado esperado. A esse encadeamento lógico na programação, chamamos de Lógica de Programação, e a descrição de como fazer, definimos como Algoritmos.

- **Algoritmos**: são sequências de passos que seguimos com a intenção de atingir um objetivo, criar o algoritmo e avaliar se o resultado obtido é a solução esperada. 
- **Lógica de Programação**: em linhas gerais, lógica de programação é todo conjunto de regras e conceitos que precisamos aplicar para criar códigos que serão interpretados e executados por um computador.

## Arquivos `js`

> local correto do arquivo js

O navegador ler linha por linha, então se o nosso arquivo `js` depende da nossa estrutura html carregada e pronta ele precisa necessariamente ser colocado  dentro da tag `<body>` logo antes do seu fechamento `</body>`.

```js
document.querySelector('#som_tecla_pom').play();
```

"." entrar pra dentro do elemento que está sendo buscado no `querySelector` e vai trazer todas as funcionalidades e propriedades que são possíveis ser consultadas ou executadas dentro do elemento.

Os parâmetros são os nomes que damos a valores que uma função pode receber em sua chamada, que podem ou não ter um valor padrão. Os parâmetros de uma função são como variáveis ficam disponíveis apenas no corpo da função.

## Quando funções anônimas são úteis?

As funções anônimas são bem úteis quando queremos executar alguma coisa uma única vez ou em apenas um lugar.

## Referências

- [Artigo o que é o DOM](https://www.alura.com.br/artigos/o-que-e-o-dom?_gl=1*u9ib37*_ga*MjA2MTQxMDE1MS4xNjg1MDQyNjc1*_ga_1EPWSW3PCS*MTcxMjc4NzU2My44NC4xLjE3MTI3ODk3NjcuMC4wLjA.*_fplc*UUw2a0FjZEF0c0F0ciUyQmp4S2xGNlJDd04lMkJJSDJJYVolMkJaV044MG5kSkI1MmQ3OFd3T29waSUyRjZORGkzMGZ0aXN4Z293ZktnR0ZrVEZlbkw5R1pVVXMwOGJ2Rnd1RUFvdlRmd1p2WDI5andEc2I2V0o5UkFHS2Z5dmpHQ1F3MVElM0QlM0Q.#:~:text=A%2520tradu%25C3%25A7%25C3%25A3o%2520do%2520acr%25C3%25B4nimo%2520ingl%25C3%25AAs,modelagem%2520de%2520todo%2520o%2520HTML.s)
- [Algoritmos e Lógica de programação: O que são e qual a importância?](https://www.alura.com.br/artigos/algoritmos-e-logica-de-programacao)
- [CodePen](https://codepen.io/vanessametonini/pen/eYEVEqR)
