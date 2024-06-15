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

## Trabalhando com atributos

**getAttribute:**
O método `getAttribute` é usado para obter o valor de um atributo específico de um elemento HTML. Ele recebe um argumento, que é o nome do atributo que desejamos recuperar o valor.

```js
// HTML: <div id="meuElemento" data-info="Exemplo de atributo">

const elemento = document.getElementById('meuElemento');
const valorDoAtributo = elemento.getAttribute('data-info');
console.log(valorDoAtributo); // Saída: "Exemplo de atributo"
```
> O método `getAttribute` foi usado para obter o valor do atributo data-info do elemento com o ID "meuElemento".

**setAttribute:**
O método `setAttribute` é usado para definir ou modificar o valor de um atributo em um elemento HTML. Ele aceita dois argumentos: o primeiro é o nome do atributo que queremos definir ou modificar, e o segundo é o valor que queremos atribuir a esse atributo. Se o atributo já existir, o método `setAttribute` irá sobrescrevê-lo; caso contrário, ele criará um novo atributo.

```js
// HTML: <p id="meuParagrafo">Texto inicial</p>

const paragrafo = document.getElementById('meuParagrafo');
paragrafo.setAttribute('id', 'paragrafoModificado');
paragrafo.setAttribute('data-novo-atributo', 'Novo valor');
```
> Após a execução deste código, o parágrafo terá seu ID alterado para "paragrafoModificado" e será adicionado um novo atributo data-novo-atributo com o valor "Novo valor".

**:**


```js
```
>

**hasAttribute:**
O método `hasAttribute` é usado para verificar se um elemento possui um atributo específico. Ele recebe um argumento, que é o nome do atributo que queremos verificar. O método retornará true se o atributo existir e false se o atributo não estiver presente.

```js
// HTML: <a href="https://www.exemplo.com" id="meuLink">Link de exemplo</a>

const link = document.getElementById('meuLink');
const temHref = link.hasAttribute('href');
console.log(temHref); // Saída: true
const temTarget = link.hasAttribute('target');
console.log(temTarget); // Saída: false
```
> O método `hasAttribute` foi usado para verificar se o elemento com o ID "meuLink" possui o atributo "href" (que é verdadeiro) e se possui o atributo "target" (que é falso).

**removeAttribute:**
O método `removeAttribute` é usado para remover um atributo específico de um elemento HTML. Ele recebe um argumento, que é o nome do atributo que desejamos remover. 

```js
// HTML: <img src="imagem.jpg" alt="Imagem de exemplo" id="minhaImagem">


const imagem = document.getElementById('minhaImagem');
imagem.removeAttribute('alt');
```
> Após a execução desse código, o atributo alt da imagem será removido, tornando-a menos acessível para pessoas com deficiência visual e fazendo com que o navegador não exiba um texto alternativo quando a imagem não puder ser carregada.

## Manipulando classes com ClassList
Uma das tarefas comuns na manipulação da interface do usuário é a alteração de classes CSS de elementos HTML. Anteriormente, a forma tradicional de fazer isso era manipular a propriedade className, que envolvia trabalhar com strings e pode ser propenso a erros.  No entanto, **com a introdução do método `classList`, a partir do ECMAScript 5, essa tarefa se tornou mais fácil e segura.**

**Adicionando uma classe: `add()`**
Para adicionar uma classe a um elemento HTML, podemos usar o método `add()` do `classList`. Este método aceita o nome da classe como argumento e adiciona a classe ao elemento, se ela ainda não estiver presente.

```js
const element = document.getElementById('meuElemento');
element.classList.add('minhaClasse');
```

**Removendo uma classe: `remove()`**
Para remover uma classe de um elemento HTML, podemos utilizar o método `remove()` do `classList`. Este método aceita o nome da classe como argumento e remove a classe do elemento, se ela estiver presente.

```js
const element = document.getElementById('meuElemento');
element.classList.remove('minhaClasse');
```

**Alternando uma classe: `toggle()`**
O método `toggle()` do classList permite alternar uma classe em um elemento. Se a classe já estiver presente no elemento, o método a `remove`; caso contrário, ele a `adiciona`, conforme exemplo a seguir:

```js
const element = document.getElementById('meuElemento');
element.classList.toggle('minhaClasse');
```

**Verificando se uma classe está presente: `contains()`**
Para verificar se uma classe específica está associada a um elemento, podemos usar o método `contains()` do `classList`.

```js
const element = document.getElementById('meuElemento');
if (element.classList.contains('minhaClasse')) {
  // A classe 'minhaClasse' está presente no elemento
  // Faça algo aqui...
}
```

**Substituindo classes:**
Como feito em aula, podemos substituir uma classe por outra usando os métodos `add()` e `remove()` em sequência.

```js
const element = document.getElementById('meuElemento');
element.classList.remove('classeAntiga');
element.classList.add('classeNova');
```

**Manipulando várias classes simultaneamente:**
É possível adicionar ou remover várias classes de uma vez usando o método `add()` ou `remove()` passando vários argumentos separados por vírgula.

```js
const element = document.getElementById('meuElemento');
element.classList.add('classe1', 'classe2', 'classe3');
element.classList.remove('classe2', 'classe3');
```

## Utilizando áudio em páginas da web

**Controles básicos de áudio**
- `play()`: inicia a reprodução do áudio;
- `pause()`: pausa a reprodução do áudio;
- `currentTime`: propriedade que retorna ou define a posição atual de reprodução do áudio, em segundos;
- `volume`: propriedade que retorna ou define o nível de volume do áudio, variando de 0 a 1.

```js
const audioElement = new Audio('caminho/do/arquivo-de-audio.mp3');

audioElement.play(); // Inicia a reprodução
audioElement.pause(); // Pausa a reprodução
audioElement.currentTime = 10; // Move para 10 segundos no áudio
audioElement.volume = 0.5; // Define o volume para metade (50%)
```

## Acessando dados com propriedades no DOM

**Propriedade [parentNode](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/parentNode)**
A propriedade `parentNode` é utilizada para acessar o nó pai de um elemento no DOM. Por meio dela, podemos navegar pela árvore do DOM em direção ao nó pai do elemento atual.

```html
<div id="container">
  <p>Este é um parágrafo</p>
</div>
```

podemos usar o ‘parentNode’ para acessar o elemento pai do parágrafo:

```js
const paragraph = document.querySelector('p');
const parentElement = paragraph.parentNode;

console.log(parentElement.id); // Saída: "container"
```

**Propriedade [childNodes](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/childNodes)**
A propriedade `childNodes` é utilizada para acessar todos os nós filhos de um elemento no DOM. Ela retorna uma lista de nós, incluindo nós de texto e elementos HTML.

```html
<div id="container">
  <p>Este é um parágrafo</p>
</div>
```

```js
const container = document.getElementById('container');
const childNodes = container.childNodes;

console.log(childNodes.length); // Saída: 1 (o nó de texto "\n  " é considerado um nó filho)
console.log(childNodes[0].nodeName); // Saída: "#text"
console.log(childNodes[1].nodeName); // Saída: "P"

```



**Propriedade [nextElementSibling](https://developer.mozilla.org/en-US/docs/Web/API/Element/nextElementSibling)**

A propriedade `nextElementSibling` permite acessar o próximo irmão (nó adjacente) de um elemento no DOM.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```
Agora, podemos usar o `nextElementSibling` para acessar o próximo irmão de um elemento `<li>`:

```js
const item1 = document.querySelector('li:first-child');
const item2 = item1.nextElementSibling;

console.log(item2.textContent); // Saída: "Item 2"
```



**Propriedade [previousElementSibling](https://developer.mozilla.org/en-US/docs/Web/API/Element/previousElementSibling)**
A propriedade `previousElementSibling` é semelhante ao `nextElementSibling`, mas permite acessar o irmão anterior (nó adjacente) de um elemento no DOM.

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```
vamos usar o `previousElementSibling` para acessar o irmão anterior do elemento `<li>` que selecionamos:

```js
const item3 = document.querySelector('li:last-child');
const item2 = item3.previousElementSibling;

console.log(item2.textContent); // Saída: "Item 2"
```

## Objeto Date
Para criar uma instância do objeto ‘Date’, pode usar uma das várias formas de construção:

**Construtor sem argumentos:**

```js
const dataAtual = new Date();
```

**Construtor com argumentos (ano, mês, dia, hora, minuto, segundo, milissegundo):**

```js
const dataEspecifica = new Date(2023, 7, 3, 12, 30, 0, 0);
```

**Construtor com uma string que representa a data (formato padrão é "yyyy-mm-dd"):**

```js
const dateString = "2023-08-03";
const formatoDeData = new Date(dateString);
```

Uma vez criado um objeto Date, podemos acessar informações específicas da data e hora, como o ano, mês, dia, hora, minuto e segundo usando os métodos de acesso do objeto:

```js
const currentDate = new Date();

const ano = currentDate.getFullYear();  // Acessa o ano
const mês = currentDate.getMonth(); // Acessa o mês - Janeiro é 0, Fevereiro é 1, ..., Dezembro é 11
const dia = currentDate.getDate(); // Acessa o dia
const horas = currentDate.getHours(); // Acessa as horas 
const minutos = currentDate.getMinutes(); // Acessa os minutos
const segundos = currentDate.getSeconds(); // Acessa os segundos
const milissegundos = currentDate.getMilliseconds();  // Acessa os milissegundos 
```

também pode modificar a data e hora usando os métodos de definição:

```js
const data = new Date();

data.setFullYear(2024);  // Define o ano
data.setMonth(10); // Define o mês
data.setDate(25); // Define o dia
data.setHours(10);  // Define as horas
data.setMinutes(30); // Define os minutos
data.setSeconds(0); // Define os segundos
```

## Referências

- [Artigo o que é o DOM](https://www.alura.com.br/artigos/o-que-e-o-dom?_gl=1*u9ib37*_ga*MjA2MTQxMDE1MS4xNjg1MDQyNjc1*_ga_1EPWSW3PCS*MTcxMjc4NzU2My44NC4xLjE3MTI3ODk3NjcuMC4wLjA.*_fplc*UUw2a0FjZEF0c0F0ciUyQmp4S2xGNlJDd04lMkJJSDJJYVolMkJaV044MG5kSkI1MmQ3OFd3T29waSUyRjZORGkzMGZ0aXN4Z293ZktnR0ZrVEZlbkw5R1pVVXMwOGJ2Rnd1RUFvdlRmd1p2WDI5andEc2I2V0o5UkFHS2Z5dmpHQ1F3MVElM0QlM0Q.#:~:text=A%2520tradu%25C3%25A7%25C3%25A3o%2520do%2520acr%25C3%25B4nimo%2520ingl%25C3%25AAs,modelagem%2520de%2520todo%2520o%2520HTML.s)
- [Algoritmos e Lógica de programação: O que são e qual a importância?](https://www.alura.com.br/artigos/algoritmos-e-logica-de-programacao)
- [CodePen](https://codepen.io/vanessametonini/pen/eYEVEqR)
