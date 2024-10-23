function renderPokemon(pokemonData, typesOfPokemon, bgColor) {
    return `<div class="center">
                <div class="center pokemonImagesDiv">
                    <div style="margin-bottom: 20px;">
                        <span class="f_s_28">#${pokemonData.order}</span>
                        <span class="f_s_28" style="padding: 42px;">${pokemonData.name}</span>
                    </div>    
                    <div id="pokemonImg" class="center" onclick="showBigPicture()" style="width: 115%; height: 290px; align-items: center; margin: 25px; background-color: ${bgColor}">
                        <img src=${pokemonData.sprites.other.dream_world.front_default} class="pokemonImages"></img>
                    </div>
                    <div class="d_flex_c f_s_18"" style="width: 125%; margin-bottom: 18px;">
                        <span>Weight:</span>
                        <span>${pokemonData.weight / 1000} kg</span>  
                    </div>
                    <div class="center" style="width: 100%; gap: 24px;">
                        <div style="height: 48px; width: 20%; border-radius: 24px; background-color: ${bgColor};"></div>   
                        <div style="height: 48px; width: 20%; border-radius: 24px; background-color: ${getColor(typesOfPokemon[1])};"></div>     
                    </div>        
                </div>
            </div>`;
}