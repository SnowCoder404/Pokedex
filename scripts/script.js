BASE_URL = "https://pokeapi.co/api/v2/pokemon/";
EVOLUTION_URL = "https://pokeapi.co/api/v2/evolution-chain/";
let evolutionArray = [];
let imgPictureArray = [];
let allPokemonNames = [];

function init() {
    loadPokemonData(20);
}

function loadPokemonData(quantity) {
    for (let index = 1; index < quantity + 1; index++) {
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
    allPokemonNames.push(responseData.name);
    document.getElementById("mainDiv").innerHTML += renderPokemon(responseData, typesOfPokemon, int);
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

async function showPokemonStats(int) {
    let response = await fetch(BASE_URL + int.toString());
    let responseData = await response.json();
    document.getElementById("pokemonStats").innerHTML = renderPokemonWithStats(int, responseData);
}

async function showPokemonData(int) {
    let response = await fetch(BASE_URL + int.toString());
    let responseData = await response.json();
    document.getElementById("bigPicture").innerHTML = renderBigPicturePokemon(int, responseData);
}

async function searchEvoChain(int) {
    let response = await fetch(EVOLUTION_URL + shareByThreeAndRoundUp(int));
    let responseData = await response.json(); 
    pushEvolutionChainArray(responseData);
    for (let index = 0; index < evolutionArray.length; index++) {
        let response = await fetch(BASE_URL + evolutionArray[index]);
        let responseData = await response.json(); 
        imgPictureArray.push(responseData.sprites.other.dream_world.front_default);           
    }
    document.getElementById("imgDiv").innerHTML = renderPokemonEvolutin(imgPictureArray);
}


function shareByThreeAndRoundUp(int) {
    return Math.ceil(int / 3).toString();
}

function pushEvolutionChainArray(responseData) {
    evolutionArray = [];
    evolutionArray.push(responseData.chain.species.name);
    evolutionArray.push(responseData.chain.evolves_to[0].species.name);
    evolutionArray.push(responseData.chain.evolves_to[0].evolves_to[0].species.name);
}

function filterThePokemon(filterWord) {
    return allPokemonNames.filter(name => name.includes(filterWord));
}

function searchAndFilterPokemon() {
    let filterWord = document.getElementById("pokemonSearch").value;
    if (filterWord.length > 2) {
        console.log(filterThePokemon(document.getElementById("pokemonSearch").value));
    }
}

function toogleBigPicture() {
    document.getElementById("bigPictureDiv").classList.toggle("d_none");
    document.getElementById("bigPictureDiv").classList.toggle("center");
}

function bigLetter(str) {
    return str[0].toUpperCase() + str.substr(1);
}