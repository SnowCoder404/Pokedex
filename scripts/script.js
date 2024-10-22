BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

function init() {
    for (let index = 1; index < 10; index++) {
        loadData(index);    
    }
}

async function loadData(int) {
    let response = await fetch(BASE_URL + int.toString());
    let responseData = await response.json();
    writePokemonData(responseData);
}

function writePokemonData(responseData) {
    let typesOfPokemon = searchTypesOfPokemon(responseData);
    let bgColor = getColor(typesOfPokemon[0]);
    document.getElementById("mainDiv").innerHTML += renderPokemon(responseData, typesOfPokemon, bgColor);
}

function searchTypesOfPokemon(responseData) {
    let typesOfPokemon = [];
    for (let index = 0; index < responseData.types.length; index++) {
        let typeOfPokemon = responseData.types[index];
        typesOfPokemon.push(typeOfPokemon.type.name);
    }
    return typesOfPokemon;
}

function getColor(type) {
    switch(type) {
        case "grass":
            return "#12541E";
        case "fire":
            return "darkred";
        case "water":
            return "darkblue";        
    }
}