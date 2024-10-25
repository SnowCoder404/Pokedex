function init() {
    loadPokemonData(20, 1);
    loadedPokemonInt = 20;
}

function loadPokemonData(quantity, state) {
    // document.getElementById("waitAnimation").classList.remove("d_none");
    document.getElementById("mainDiv").innerHTML = "";
    for (let index = 1; index < quantity + 1; index++) {
        loadData(index, state);    
    }
}

function loadMorePokemon() {
    document.getElementById("mainDiv").innerHTML = "";
    loadedPokemonInt = loadedPokemonInt + 20;
    loadPokemonData(loadedPokemonInt, 1);
}

async function loadData(int, state) {
    let response = await fetch(BASE_URL + int.toString());
    let responseData = await response.json();
    writePokemonData(responseData, int, state);
}

function writePokemonData(responseData, int, state) {
    let typesOfPokemon = searchTypesOfPokemon(responseData);
    if (state > 0) {
        allPokemonNames.push(responseData.name);
    }
    document.getElementById("mainDiv").innerHTML += renderPokemon(responseData, typesOfPokemon, int);
    // document.getElementById("waitAnimation").classList.add("d_none");
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
    let typesOfPokemon = searchTypesOfPokemon(responseData);
    document.getElementById("bigPicture").innerHTML = renderBigPicturePokemon(int, responseData, typesOfPokemon);
}

async function showPokemonStats(int) {
    let response = await fetch(BASE_URL + int.toString());
    let responseData = await response.json();
    document.getElementById("bigPictureDiv").classList.add("h-94");
    document.getElementById("pokemonStats").innerHTML = renderPokemonWithStats(int, responseData);
}

async function showPokemonData(int) {
    let response = await fetch(BASE_URL + int.toString());
    let responseData = await response.json();
    let typesOfPokemon = searchTypesOfPokemon(responseData);
    document.getElementById("bigPicture").innerHTML = renderBigPicturePokemon(int, responseData, typesOfPokemon);
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

function toogleBigPicture() {
    document.getElementById("bigPictureDiv").classList.toggle("d_none");
    document.getElementById("bigPictureDiv").classList.toggle("center");
}

function bigLetter(str) {
    return str[0].toUpperCase() + str.substr(1);
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


function searchAndFilterPokemon() {
    let filterWord = document.getElementById("pokemonSearch").value;
    if (filterWord.length < 3) {
        loadPokemonData(loadedPokemonInt, 0);
    } else {
        document.getElementById("mainDiv").innerHTML = "";
        showFilterArray();
    }
}

async function showFilterArray() {
    let filterArray = filterThePokemon(document.getElementById("pokemonSearch").value);
    for (let index = 0; index < filterArray.length; index++) {
        let response = await fetch(BASE_URL + filterArray[index]);
        let responseData = await response.json();
        let typesOfPokemon = searchTypesOfPokemon(responseData);
        document.getElementById("mainDiv").innerHTML += renderPokemon(responseData, typesOfPokemon, responseData.id);
    }
}