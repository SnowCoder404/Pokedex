function renderPokemon(pokemonData, typesOfPokemon, bgColor) {
    return `<div class="center">
                <div class="pokemonImagesDiv">
                    <div style="margin-bottom: 20px;">
                        <span>${pokemonData.name}</span>
                    </div>    
                    <div class="center" style="width: 125%; height: 290px; align-items: center; margin: 25px; background-color: ${bgColor} ">
                        <img src=${pokemonData.sprites.other.dream_world.front_default} class="pokemonImages"></img>
                    </div>
                    <div style="width: 125%; justify-content: space-around; display: flex;">
                        <span>Weight:</span>
                        <span>${pokemonData.weight / 1000} kg</span>  
                    </div>
                    <span>Type: ${typesOfPokemon}</span>       
                </div>
            </div>`;
}