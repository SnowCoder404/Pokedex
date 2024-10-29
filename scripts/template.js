function renderPokemon(pokemonData, typesOfPokemon, int) {
    return `<div class="center">
                <div class="center pokemonImagesDiv">
                    <div class="d_flex" style="margin-bottom: 20px; gap: 30px;">
                        <span class="f_s_28">#${int}</span>
                        <span class="f_s_28">${bigLetter(pokemonData.name)}</span>
                    </div>    
                    <div id="pokemonImg" class="center bg-${typesOfPokemon[0]}" onclick="showBigPicture(${int})" style="width: 115%; height: 290px; align-items: center; margin: 25px;">
                        <img src=${pokemonData.sprites.other.dream_world.front_default} class="pokemonImages"></img>
                    </div>
                    <div class="d_flex_c f_s_18 info" style="width: 125%; margin-bottom: 18px;">
                        <div>
                            <span>Weight:</span>
                            <span>${pokemonData.weight / 1000} kg</span>  
                        </div>
                        <div>
                            <span>Height:</span>
                            <span>${pokemonData.height} cm</span>
                        </div>
                    </div>
                    <div class="center w-100" style="gap: 24px;">
                        <div class="br-24 backgroundImageCenter ${typesOfPokemon[0]}" style="height: 48px; width: 20%;"></div>   
                        <div class="br-24 backgroundImageCenter ${typesOfPokemon[1]}" style="height: 48px; width: 20%;"></div>     
                    </div>        
                </div>
            </div>`;
}

function renderBigPicturePokemon(int, pokemonData, typesOfPokemon) {
    return `<span class="f_s_36 center">${bigLetter(pokemonData.name)}</span> 
            <div class="d_flex_c" style="font-size: 56px; margin-bottom: 25px;">    
                <div class="backgroundImageCenter pokemonTypes ${typesOfPokemon[0]}"></div>   
                <div class="backgroundImageCenter pokemonTypes ${typesOfPokemon[1]}"></div>                       
            </div>
            
            <div class="d_flex_c" style="gap: 12px; background-color: rgba(255, 255, 255, 0.2); padding: 20px 0;">
                <button class="navButton" onclick="showPokemonData(${int})">Home</button>
                <button class="navButton" onclick="showPokemonStats(${int})">States</button>
                <button class="navButton" onclick="searchEvoChain(${int})">Evo-Chain</button>
                <button class="navButton" onclick="toogleBigPicture()">Exit</button>
            </div>  
            <div id="imgDiv">
                <div class="center" onclick="showBigPicture(${int})" style="height: 290px; align-items: center; margin: 38px 0;">
                    <img src=${pokemonData.sprites.other.dream_world.front_default} class="pokemonImagesXL"></img>
                </div>
                <div class="d_flex_c">
                    <button class="br-24 center switchButton" onclick="showPokemonData(${int - 1})"><</button>
                    <button class="br-24 center switchButton" onclick="showPokemonData(${int + 1})">></button>
                </div>
                <div id="pokemonStats" class="d_flex_c f_s_18 w-100" style="margin-top: 18px; flex-direction: column; align-items: center;">
                    <div class="w-400 d_flex_c">
                        <span>Height:</span>
                        <span>${pokemonData.height} cm</span>
                    </div>
                    <div class="w-400 d_flex_c">
                        <span>Weight:</span>
                        <span>${pokemonData.weight / 1000} kg</span>  
                    </div>
                </div>
            </div>`;
}

function renderPokemonWithStats(int, pokemonData) {
    return `<div class="d_flex_c f_s_18 w-100" style="margin-bottom: 18px; flex-direction: column; align-items: center;">
                EP :
                <div class="statsDiv"> 
                    <div class="statsText" style="width: ${pokemonData.base_experience}px;">${pokemonData.base_experience}</div>
                </div>               
                HP :
                <div class="statsDiv">
                    <div class="statsText" style="width: ${pokemonData.stats[0].base_stat * 2}px;">${pokemonData.stats[0].base_stat}</div>
                </div>
                Attack : 
                <div class="statsDiv">
                    <div class="statsText" style="width: ${pokemonData.stats[1].base_stat * 2}px;">${pokemonData.stats[1].base_stat}</div>
                </div>
                Defense : 
                <div class="statsDiv">
                    <div class="statsText" style="width: ${pokemonData.stats[2].base_stat * 2}px;">${pokemonData.stats[2].base_stat}</div>
                </div>
                Special Attack : 
                <div class="statsDiv">
                    <div class="statsText" style="width: ${pokemonData.stats[3].base_stat * 2}px;">${pokemonData.stats[3].base_stat}</div>
                </div>
                Special Defense : 
                <div class="statsDiv">
                    <div class="statsText" style="width: ${pokemonData.stats[4].base_stat * 2}px;">${pokemonData.stats[4].base_stat}</div>
                </div>
                Speed :
                <div class="statsDiv">
                    <div class="statsText" style="width: ${pokemonData.stats[5].base_stat * 2}px;">${pokemonData.stats[5].base_stat}</div>
                </div>
            </div>`;
}

function renderPokemonEvolutin(imgPictureArray) {
    return `<div class="imgPictureArrayDiv">
                <img src="${imgPictureArray[0]}" class="evolutionPokemon"></img>
                <img id="evolution1" src="${imgPictureArray[1]}" class="evolutionPokemon"></img>
                <img id="evolution2" src="${imgPictureArray[2]}" class="evolutionPokemon"></img>
            </div>`;
}