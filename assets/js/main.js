const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMore')
const limit = 5;
let offset = 0;
const maxRecord = 151


function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) =>{
        const newHtml = pokemons.map((pokemon) => {
                return `<li class="pokemon ${pokemon.type}" id="infoPoke">
                <span class="number">${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>
            
            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>
                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
            </li>`
        }).join('')
        pokemonList.innerHTML += newHtml
        })
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () =>{
    offset += limit

    const qtdRecordNextPage = offset + limit

    if(qtdRecordNextPage >= maxRecord){
        const newLimit = qtdRecordNextPage - maxRecord
        loadPokemonItens(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else {
        loadPokemonItens(offset, limit)
    }
})








