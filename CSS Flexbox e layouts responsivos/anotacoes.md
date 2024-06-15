# CSS: Flexbox e layouts responsivos

As Propriedades:
```css
flex-direction: column;
flex-wrap: wrap;
```

Podem ser transcritas apenas com esse trecho de código:

```css
flex-flow: column wrap ;
```

### Displays flex & inline-flex
> Ambos valores de display permitem alinhar itens com propriedades do Flexbox.

O que eles não têm em comum?
- O `display: flex` faz com que o container se expanda ocupando toda a largura do layout assim, os outros containers com o mesmo valor de display ficam um embaixo do outro, na direção vertical.

- Já o `display: inline-flex`, utiliza as mesmas características de exibição do display: inline. Exibindo os elementos em nível de linha, na horizontal, sem ocupar toda a largura do layout.

### Flex-item & Flex-container

- `flex-container`, que são sempre aplicadas no elemento pai. Possibilitando manipular todos os elementos no seu interior.
- E, também, utilizando propriedades `flex-item`, estas são sempre aplicadas em cada elemento que deseja manipular.

<img src="https://github.com/Amanda-ribeiiro/ONE-T6/assets/108890154/c383d630-de52-4f51-8f17-f85074328325" width="400">
<img src="https://github.com/Amanda-ribeiiro/ONE-T6/assets/108890154/71773ea4-7d5c-4c7d-8d23-ac95fbd4b685" width="200">

### Flex-glow & Flex-shrink

- A propriedade `flex-shrink` é ideal para ser aplicada quando queremos encolher elementos à medida que o seu container diminui de largura.
> Com a propriedade `flex-shrink` quanto maior o valor inserido, mais este item irá encolher em relação aos seus itens irmãos. 
- A propriedade `flex-grow`, que quanto maior o valor inserido, mais um item poderá crescer.
> A propriedade `flex-grow` é utilizada para expandir itens proporcionalmente de acordo com o espaço disponível em um container.

#### Opções de sites que são jogos para você aprender Flexbox se divertindo:
- [Flexbox Defense](http://www.flexboxdefense.com/)
- [Flexbox Froggy](https://flexboxfroggy.com/)
- [Flexbox Zombies](https://mastery.games/flexboxzombies/)


## References
[Criando Layouts com CSS Grid Layout](https://www.alura.com.br/artigos/criando-layouts-com-css-grid-layout?_gl=1*gah19x*_ga*MjA2MTQxMDE1MS4xNjg1MDQyNjc1*_ga_1EPWSW3PCS*MTcxMjYxNDcyMi44Mi4xLjE3MTI2MjQ5NjQuMC4wLjA.*_fplc*bks0MzZGWVpPNzV1azIzanltQUtKbG5JMXZKNnJKcFBRaE1xQWZibiUyQlAzREhjemxGdldnZjd1R3RTdlVGQmM5cnZ5YU0wJTJGOVFya2JpRXJSM01QZzR5SEJ3b281S2tyRjRORFN2SWVOb0FLMCUyRjU1T1JLSzdWRHp3NnR3UE9nJTNEJTNE)

[Reset CSS: O que é, exemplos, como Criar e usar](https://www.alura.com.br/artigos/o-que-e-reset-css?_gl=1*hfu5er*_ga*MjA2MTQxMDE1MS4xNjg1MDQyNjc1*_ga_1EPWSW3PCS*MTcxMjYxNDcyMi44Mi4xLjE3MTI2MTg3MTMuMC4wLjA.*_fplc*bks0MzZGWVpPNzV1azIzanltQUtKbG5JMXZKNnJKcFBRaE1xQWZibiUyQlAzREhjemxGdldnZjd1R3RTdlVGQmM5cnZ5YU0wJTJGOVFya2JpRXJSM01QZzR5SEJ3b281S2tyRjRORFN2SWVOb0FLMCUyRjU1T1JLSzdWRHp3NnR3UE9nJTNEJTNE)

[Flexbox CSS: Guia Completo, Elementos e Exemplos](https://www.alura.com.br/artigos/css-guia-do-flexbox?_gl=1*108a77s*_ga*MjA2MTQxMDE1MS4xNjg1MDQyNjc1*_ga_1EPWSW3PCS*MTcxMjYxNDcyMi44Mi4xLjE3MTI2MTgzMDIuMC4wLjA.*_fplc*bks0MzZGWVpPNzV1azIzanltQUtKbG5JMXZKNnJKcFBRaE1xQWZibiUyQlAzREhjemxGdldnZjd1R3RTdlVGQmM5cnZ5YU0wJTJGOVFya2JpRXJSM01QZzR5SEJ3b281S2tyRjRORFN2SWVOb0FLMCUyRjU1T1JLSzdWRHp3NnR3UE9nJTNEJTNE)

[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

