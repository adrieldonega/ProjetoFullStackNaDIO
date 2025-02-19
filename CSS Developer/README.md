# CSS Developer

## O que é CSS?

* Cascading Style Sheets (CSS), ou Folha de Estilo em Cascata, é um mecanismo para adicionar estilos a um documento web (html);
* Determina como deve ser o Layout de uma pagina e como os elementos do nosso site deve ser;
* Criado em 1994 por Hakon Wium Lie para facilitar a programação de sites.
* 1995 o CSS foi desenvolvido pela W3C;
* 1997 / 1999 o CSS ficou popularmente conhecido;
* Atualmente se encontra na versão CSS3.

## O que o CSS não é?

* O CSS é uma **linguagem de estilos**;
* **Não** é uma linguagem de programação;
* **Não** é uma linguagem de marcação;

## O que pode ser criado com CSS?

* Layouts e estilização de páginas web;
* Animações;
* Formas geometricas e desenhos;
* Filtros;
* Contadores.

## Formas de Declaração do CSS

### Propriedades e Valores

* Uma **propriedade** é uma característica de um elemento do nosso HTML (cor de fundo, largura, altura, espaçamento, etc). 
* Um **valor** define o resultado de uma propriedade e como o navegador deve exibir o estilo daquele elemento.

        propriedade:valor;

* Por exemplo:

        background: red;
        color: white;

### Formas de declarar o CSS

* **CSS Inline:**  adicionamos o código CSS utilizando o atributo *style* dentro das tags HTML, elemento por elemento. 
  * Essa forma não é muito utilizada pois é dificil a manutenção, visto que a estilização é feita tag por tag, sem uma padronização e referencia. 
* **CSS Interno:** código CSS é adicionado dentro da tag *< head >* da pagina HTML. Dentro da tag *< head >* adicionamos outra tag, a *< style >*, e colocamos as regras CSS nessa área.
* **CSS Externo:** é criado um arquivo com a extensão .css com todas as regras CSS que queremos aplicar e esse arquivo é referenciado no HTML da pagina através da tag *< link >* adicionando dentro da tag *< head >*

## Depurando o CSS

* O processo de depuração (conhecido como debug), é uma forma de identificar problemas no codigo-fonte de uma aplicação e entender seu comportamento.
* Todos os navegadores possuem ferramentas voltadas para desenvolvedores que permitem que a gente consiga examinar nossos elementos HTML e CSS, ver requisições que estão sendo feitas para o servidor, os arquivos que estamos fazendo downloads, o tempo que vamos levar para baixar determinado recurso, performance do nosso site, entre muitos outros recursos.
* Essa ferramenta é conhecida como **Dev Tools**
* Para abrir o **Dev Tools** do Google Chrome, temos os seguintes atalhos:
  * Botao direito do mouse > Inspecionar;
  * CTRL + SHIFT + I;
  * CTRL + SHIFT + C;
  * F12.

## Seletores

### Seletor de Tags ou Tipo

* **Seletor por Tipo:** Busca elementos por uma tag HTML
* **Seletor por ID (#):** Busca elementos através do atributo "id"
* **Seletor por Classe (.):**Busca elementos através do atributo "class"
* **Seletor Universal (*):** Seleciona todos os elementos HTML
* **Seletor de Atributo ([atrib]):** Seleciona elementos que possuem um atributo especifico em nosso documento HTML e conseguimos tambem buscar atributos com valor especifico.

### Seletor de ID



