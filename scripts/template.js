function renderPokemon(pokemonData, typesOfPokemon, bgColor, int) {
    return `<div class="center">
                <div class="center pokemonImagesDiv">
                    <div class="d_flex" style="margin-bottom: 20px; gap: 30px;">
                        <span class="f_s_28">#${int}</span>
                        <span class="f_s_28">${bigLetter(pokemonData.name)}</span>
                    </div>    
                    <div id="pokemonImg" class="center" onclick="showBigPicture(${int})" style="width: 115%; height: 290px; align-items: center; margin: 25px; background-color: ${bgColor}">
                        <img src=${pokemonData.sprites.other.dream_world.front_default} class="pokemonImages"></img>
                    </div>
                    <div class="d_flex_c f_s_18"" style="width: 125%; margin-bottom: 18px;">
                        <div>
                            <span>Weight:</span>
                            <span>${pokemonData.weight / 1000} kg</span>  
                        </div>
                        <div>
                            <span>Height:</span>
                            <span>${pokemonData.height} cm</span>
                        </div>
                    </div>
                    <div class="center" style="width: 100%; gap: 24px;">
                        <div style="height: 48px; width: 20%; border-radius: 24px; background-color: ${bgColor};"></div>   
                        <div style="height: 48px; width: 20%; border-radius: 24px; background-color: ${getColor(typesOfPokemon[1])};"></div>     
                    </div>        
                </div>
            </div>`;
}

function renderBigPicturePokemon(int, pokemonData) {
    return `<div class="center" style="font-size: 56px; margin-bottom: 25px;">    
                <div>
                    <span>${bigLetter(pokemonData.name)}</span>
                </div>
            </div>
            <div class="d_flex_c" style="gap: 12px; background-color: rgba(255, 255, 255, 0.2); padding: 20px 0;">
                <button onclick="showPokemonData(${int})">Home</button>
                <button onclick="showPokemonStats(${int})">States</button>
                <button onclick="searchEvoChain(${int})">Evo-Chain</button>
            </div>  
            <div id="imgDiv">
                <div class="center" onclick="showBigPicture(${int})" style="height: 290px; align-items: center; margin: 38px 0;">
                    <img src=${pokemonData.sprites.other.dream_world.front_default} class="pokemonImagesXL"></img>
                </div>
                <div id="pokemonStats" class="d_flex_c f_s_18"" style="width: 100%; margin-bottom: 18px; flex-direction: column; align-items: center;">
                    <div class="pokemonStats">
                        <span>Height:</span>
                        <span>${pokemonData.height} cm</span>
                    </div>
                    <div class="pokemonStats">
                        <span>Weight:</span>
                        <span>${pokemonData.weight / 1000} kg</span>  
                    </div>
                </div>
            </div>`;
}

function renderPokemonWithStats(int, pokemonData) {
    return `<div class="d_flex_c f_s_18"" style="width: 100%; margin-bottom: 18px; flex-direction: column; align-items: center;">
                <table>
                    <tr>
                        <th style="padding-right: 118px;">EP:</th>
                        <th class="distance">${pokemonData.base_experience}</th>
                    </tr>
                    <tr>
                        <td>HP:</td>
                        <td class="distance">${pokemonData.stats[0].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Attack:</td>
                        <td class="distance">${pokemonData.stats[1].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Defense:</td>
                        <td class="distance">${pokemonData.stats[2].base_stat}</td>
                    </tr>

                    <tr>
                        <td>Spezial Attack:</td>
                        <td class="distance">${pokemonData.stats[3].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Special Defense:</td>
                        <td class="distance">${pokemonData.stats[4].base_stat}</td>
                    </tr>
                    <tr>
                        <td>Speed:</td>
                        <td class="distance">${pokemonData.stats[5].base_stat}</td>
                    </tr>
                </table> 
            </div>`;
}

function renderPokemonEvolutin(imgPictureArray) {
    return `<div class="imgPictureArrayDiv">
                <img src="${imgPictureArray[0]}" class="evolutionPokemon"></img>
                <img src="${imgPictureArray[1]}" class="evolutionPokemon"></img>
                <img src="${imgPictureArray[2]}" class="evolutionPokemon"></img>
            </div>`;
}