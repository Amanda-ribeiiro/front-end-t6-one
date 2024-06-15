# JavaScript: consumindo e tratando dados de uma API

## Sincrono e Assincrono

> Por padrão o JavaScript funciona de modo síncrono, executando as tarefas linha a linha.

O modelo de execução `síncrono` é aquele em que as tarefas são realizadas uma de cada vez, em sequência. Cada linha de código é executada apenas após a conclusão da linha anterior. Isso significa que uma tarefa que demora mais tempo para ser concluída pode bloquear a execução das próximas tarefas. Em outras palavras, no modelo `síncrono`, o JavaScript aguarda a conclusão de uma tarefa antes de passar para a próxima.

O modelo de execução `assíncrono` permite que o JavaScript inicie uma tarefa e, enquanto espera sua conclusão, continue executando outras tarefas. Isso é especialmente útil para operações que podem demorar, como chamadas de rede ou leituras de arquivos. Em vez de bloquear o fluxo do programa, essas operações são realizadas em segundo plano, permitindo que o código continue a ser executado.

- No modelo síncrono, tarefas de longa duração bloqueiam a execução do restante do código, enquanto no modelo assíncrono, o JavaScript pode continuar a executar outras tarefas enquanto aguarda a conclusão de operações de longa duração.
- O código assíncrono pode ser mais difícil de ler e escrever, especialmente quando se usa muitos callbacks (callback hell). No entanto, Promises e async/await ajudam a tornar o código assíncrono mais manejável e legível.

## Callback

Um `callback` é uma função passada como argumento para outra função, que será executada após a conclusão dessa função. É comumente usado para operações assíncronas.

## Event Loop, Call Stack e Task Queue

- `Event Loop` é um ciclo que monitora e executa as ações que mandamos para o JavaScript. O processo de leitura do código só é finalizado quando não existem mais ações a serem executadas. 
- `call stack` é um mecanismo que organiza como irá funcionar o script quando existem muitas funções: qual função está sendo executada, quais estão sendo chamadas dentro de alguma função, etc. 
- `task queue` é a fila de tarefas assíncronas. Se algo precisa ocorrer em segundo plano ou mais tarde, é nessa fila que ele será adicionado e executado mais tarde.

## Then e JSON

O método `.then()` é usado para lidar com uma Promise resolvida, permitindo o encadeamento de operações assíncronas. O JSON (JavaScript Object Notation) é um formato de dados leve usado para intercâmbio de dados.

## Catch

O método `.catch()` é usado para lidar com erros em uma Promise. Se ocorrer um erro em qualquer ponto do encadeamento de Promises, o .catch() irá capturá-lo e permitir a manipulação adequada.

## Finally

O método `.finally()` é usado para executar código após uma Promise ser concluída, independentemente de ela ter sido resolvida ou rejeitada. É útil para limpeza ou execução de operações que devem ocorrer em qualquer situação.

## Callback Hell

Quando produzimos um código assíncrono com o uso do .then nós fazemos uso de callback dentro deles. O maior problema com callbacks é que eles não são bem dimensionados mesmo para códigos assíncronos moderadamente complexos, onde temos vários .then em seguida do outro. O código resultante geralmente se torna difícil de ler, fácil de quebrar e difícil de depurar. Isso é o que chamamos de callback hell.

```js
var consultarCep = fetch('https://viacep.com.br/ws/01001000/json/')
.then(resposta => resposta.json())
.then(r => {
    if (r.erro) {
        throw Error('Esse CEP não existe!')
    } else
    console.log(r)
})
.catch(erro => console.log(erro))
.finally(mensagem => console.log('Processamento concluído'));

console.log(consultarCep);
```

Para resolver isso, foi desenvolvido outra forma de construir um código assíncrono: o async await, que funciona de forma semelhante ao then mas o código fica mais “bonito”. Esse “embelezamento” em códigos é o que chamamos de syntax sugar.

```js
async function buscarEndereco () {
    try {
        var consultarCep = await fetch('https://viacep.com.br/ws/01001000/json/');
        var consultarCepConvertido = await consultarCep.json();
        if (consultarCepConvertido.erro) {
            throw Error('CEP não existente!');
        }
        console.log(consultarCepConvertido)
    } catch(erro) {
        console.log(erro)
    }
}

buscarEndereco();
```

> O async/await apesar de ser uma opção mais "legível" ao .then() é importante frisar que não são logicamente equivalentes: o async/await faz o processamento de forma sequencial, Promises com .then() são processadas em paralelo, o que faz com que este método seja mais rápido. O async/await simplifica a escrita e a interpretação do código, mas não é tão flexível e só funciona com uma Promise por vez. 

## Referências

- [10 Heurísticas de Nielsen. Uma fórmula pra evitar erros básicos de usabilidade](https://www.alura.com.br/artigos/10-heuristicas-de-nielsen-uma-formula-pra-evitar-erros-basicos-de-usabilidade?_gl=1*fou6t8*_ga*MTg4Mzg1ODg3OS4xNzEzNDA2NTEy*_ga_1EPWSW3PCS*MTcxNzk2MDYyOS4zNS4xLjE3MTc5NjE2NTguMC4wLjA.)
- [Async/await no JavaScript: o que é e quando usar a programação assíncrona?](https://www.alura.com.br/artigos/async-await-no-javascript-o-que-e-e-quando-usar?_gl=1*1a5vf33*_ga*MTg4Mzg1ODg3OS4xNzEzNDA2NTEy*_ga_1EPWSW3PCS*MTcxNzk1MTI5Mi4zNC4xLjE3MTc5NTc4OTEuMC4wLjA.)
- [Arrow Function do JavaScript](https://www.youtube.com/watch?v=3EkS9-P3cIM)
- [HTTP Cats](https://http.cat/)
- [Começando com fetch no Javascript](https://www.alura.com.br/artigos/comecando-com-fetch-no-javascript?_gl=1*r3gib4*_ga*MTg4Mzg1ODg3OS4xNzEzNDA2NTEy*_ga_1EPWSW3PCS*MTcxNzk1MTI5Mi4zNC4xLjE3MTc5NTY4NzYuMC4wLjA.)
- [Hoisting no Javascript](https://www.alura.com.br/artigos/hoisting-no-javascript?_gl=1*kon7pl*_ga*MTg4Mzg1ODg3OS4xNzEzNDA2NTEy*_ga_1EPWSW3PCS*MTcxNzk1MTI5Mi4zNC4xLjE3MTc5NTM0MTMuMC4wLjA.)
- [HTTP: GET e POST - Conheça as diferenças entre os métodos](https://www.alura.com.br/artigos/diferencas-entre-get-e-post)