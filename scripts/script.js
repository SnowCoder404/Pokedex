BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

function init() {
    for (let index = 1; index < 152; index++) {
        loadData(index);    
    }
}

async function loadData(int) {
    let response = await fetch(BASE_URL + int.toString());
    let responseData = await response.json();
    writePokemonData(responseData, int);
}

function writePokemonData(responseData, int) {
    let typesOfPokemon = searchTypesOfPokemon(responseData);
    let bgColor = getColor(typesOfPokemon[0]);
    document.getElementById("mainDiv").innerHTML += renderPokemon(responseData, typesOfPokemon, bgColor, int);
}

function searchTypesOfPokemon(responseData) {
    let typesOfPokemon = [];
    for (let index = 0; index < responseData.types.length; index++) {
        let typeOfPokemon = responseData.types[index];
        typesOfPokemon.push(typeOfPokemon.type.name);
    }
    return typesOfPokemon;
}

async function showBigPicture(int) {
    toogleBigPicture();
    let response = await fetch(BASE_URL + int.toString());
    let responseData = await response.json();
    document.getElementById("bigPicture").innerHTML = renderBigPicturePokemon(int, responseData);
}

function toogleBigPicture() {
    document.getElementById("bigPictureDiv").classList.toggle("d_none");
    document.getElementById("bigPictureDiv").classList.toggle("center");
}