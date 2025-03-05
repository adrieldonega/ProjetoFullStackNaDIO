const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const maxRecords = 160
const limit = 10;
let offset = 0;


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHTML = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}" />
                </div>
            </li>
        `).join('');

        pokemonList.innerHTML += newHTML; // Corrigido o nome da variável
    });
}

// Carrega os primeiros 5 Pokémons
loadPokemonItens(offset, limit);

loadMoreButton.addEventListener('click', () => {
    offset += limit; // Atualiza o offset para carregar os próximos Pokémons
    
    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords){
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit);        
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonItens(offset, limit);     
    }    
});




/*
.then() é executado quando a Promise é resolvida com sucesso (por exemplo, quando a requisição foi feita com sucesso).
    .then(function(response){

    A resposta da requisição (response) é um objeto Response.
    O método .json() converte a resposta para JSON (pois é geralmente o formato de dados retornado pelas APIs).
    O .json() também retorna uma Promise, por isso, o próximo .then() vai lidar com os dados convertidos.

        return response.json()
    })
 
    O segundo .then() é chamado quando a Promise do primeiro .then() foi resolvida.
.then(function(jsonBody){
 
 Aqui, os dados convertidos para JSON são manipulados.
O 'jsonBody' contém os dados retornados da API em formato JSON.
    console.log(jsonBody);  // Exibe os dados no console.
})
 
.catch() é executado se a Promise for rejeitada em qualquer etapa anterior.
.catch(function(error){
    Caso ocorra um erro (por exemplo, falha na requisição ou erro ao tentar converter a resposta para JSON),
    o erro será capturado aqui.
        console.error(error);  // Exibe o erro no console.
})

.finally() é executado independentemente de a Promise ter sido resolvida ou rejeitada.
.finally(function(){
    Esse bloco é sempre chamado no final, seja o resultado uma execução bem-sucedida ou erro.
    Pode ser usado para tarefas de "limpeza", como ocultar indicadores de carregamento ou mensagens de status.
console.log('Requisição concluída');  // Exibe uma mensagem indicando que a requisição foi finalizada.
})


.then(): Manipula o sucesso da Promise. O primeiro .then() lida com a resposta da requisição e a converte para JSON. O segundo .then() manipula os dados no formato JSON.
.catch(): Captura e exibe erros que podem ocorrer durante o processo (erro na requisição ou na conversão para JSON).
.finally(): Executa um código de "finalização", independentemente de ter ocorrido sucesso ou erro na Promise. Neste caso, apenas imprime uma mensagem no console.
*/