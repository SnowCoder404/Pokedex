function init() {
    document.getElementById("pokemonSearch").value = "";
    loadPokemonData(20, 1);
    loadedPokemonInt = 20;
}
/**
 * 
 * This is a function for the load pokemon data from the API.
 *  
 * @param {number} quantity - This is the number of pokemon that are loaded.
 * @param {number} state - This is a status state in a number.
 * 
 */
async function loadPokemonData(quantity, state) {
    waitAnimationShow(true);
    document.getElementById("mainDiv").innerHTML = "";
    for (let index = 1; index < quantity + 1; index++) {
        await writePokemonData(index, state);    
    }
    setTimeout(() => waitAnimationShow(false), 1200);
}
/**
 * 
 * This is a function to show a wait animation.
 *  
 * @param {boolean} stateOfWaitAnimation - If the wait animation to see or not to see.
 * 
 */
function waitAnimationShow(stateOfWaitAnimation) {
    if (stateOfWaitAnimation) {
        document.getElementById("waitAnimation").classList.remove("d_none");
    } else {
        document.getElementById("waitAnimation").classList.add("d_none");
    }
}
/**
 * 
 * This is a function for the load of more pokemon data from the API.
 *  
 */
async function loadMorePokemon() {
    document.getElementById("mainDiv").innerHTML = "";
    loadedPokemonInt = loadedPokemonInt + 20;
    allPokemonNames = [];
    await loadPokemonData(loadedPokemonInt, 1);
}
/**
 * 
 * This is a function for the load pokemon data from the API.
 *  
 * @param {number} int - This is the index of for loop.
 * @param {number} state - This is a status state in a number.
 * 
 * 
 */
async function writePokemonData(int, state) {
    let responseData = await loadPokemonDataFromApi(BASE_URL + int.toString());
    let typesOfPokemon = searchTypesOfPokemon(responseData);
    if (isNumberLowerAsInt(!state, 1)) {
        allPokemonNames.push(responseData.name);
    }
    document.getElementById("mainDiv").innerHTML += renderPokemon(responseData, typesOfPokemon, int);
    
}
/**
 * 
 * This is a function for search the types from all pokemon.
 *  
 * @param {object} responseData - This is the fetch data from API.
 *
 */
function searchTypesOfPokemon(responseData) {
    let typesOfPokemon = [];
    for (let index = 0; index < responseData.types.length; index++) {
        let typeOfPokemon = responseData.types[index];
        typesOfPokemon.push(typeOfPokemon.type.name);
    }
    return typesOfPokemon;
}
/**
 * 
 * This is a function to fetch the data from API.
 *  
 * @param {string} url - This is the url where we the data fetch.
 * 
 */
async function loadPokemonDataFromApi(url) {
    let response = await fetch(url);
    let responseData = await response.json();
    return responseData;
}
/**
 * 
 * This is a function for the show the pokemon in a big picture.
 *  
 * @param {number} int - This is the index of for loop.
 * 
 */
async function showBigPicture(int) {
    toogleBigPicture();
    let responseData = await loadPokemonDataFromApi(BASE_URL + int.toString());
    let typesOfPokemon = searchTypesOfPokemon(responseData);
    document.getElementById("bigPicture").innerHTML = renderBigPicturePokemon(int, responseData, typesOfPokemon);
}
/**
 * 
 * This is a function for the show pokemon stats of the big picture.
 *  
 * @param {number} int - This is the index of for loop.
 * 
 */
async function showPokemonStats(int) {
    let responseData = await loadPokemonDataFromApi(BASE_URL + int.toString());
    document.getElementById("bigPictureDiv").classList.add("h-94");
    document.getElementById("pokemonStats").innerHTML = renderPokemonWithStats(int, responseData);
}
/**
 * 
 * This is a function for the show pokemon data.
 *  
 * @param {number} int - This is the index of for loop.
 * 
 */
async function showPokemonData(int) {
    if (isNumberLowerAsInt(int, 1)) {
        int = loadedPokemonInt;
    } else if (isNumberBiggerAsLoadedPokemon(int)) {
        int = 1;
    }
    let responseData = await loadPokemonDataFromApi(BASE_URL + int.toString());
    let typesOfPokemon = searchTypesOfPokemon(responseData);
    document.getElementById("bigPicture").innerHTML = renderBigPicturePokemon(int, responseData, typesOfPokemon);
}
/**
 * 
 * This is a function for the filtering pokemon with the first three leter.
 * 
 *  
 */
async function searchAndFilterPokemon() {
    let filterWord = document.getElementById("pokemonSearch").value;
    if (filterWord.length < 3) {
        notFoundFilter("remove");
        document.getElementById("footer").classList.remove("filterFooter");
        await loadPokemonData(loadedPokemonInt, 0);
    } else {
        document.getElementById("mainDiv").innerHTML = "";
        showFilterArray();
    }
}
/**
 * 
 * This is a function for the show data of the filter array.
 *  
 */
async function showFilterArray() {
    let filterArray = await filterThePokemon(document.getElementById("pokemonSearch").value);    
    if (isNumberLowerAsInt(filterArray.length, 1)) {
        notFoundFilter("add");
        document.getElementById("footer").classList.add("filterFooter");
    } else if (isNumberLowerAsInt(filterArray.length, 10)) {
        notFoundFilter("remove");
        document.getElementById("footer").classList.add("filterFooter");
        addContentInFilterArray(filterArray);
    } else {
        notFoundFilter("remove");
        document.getElementById("footer").classList.add("filterFooter");
    }
}
/**
 * 
 * This is a function for add the content in filter array.
 *  
 */
async function addContentInFilterArray(filterArray) {
    document.getElementById("mainDiv").innerHTML = "";
    for (let index = 0; index < filterArray.length; index++) {
        let responseData = await loadPokemonDataFromApi(BASE_URL + filterArray[index]);
        let typesOfPokemon = searchTypesOfPokemon(responseData);
        document.getElementById("mainDiv").innerHTML += renderPokemon(responseData, typesOfPokemon, responseData.id);   
    }
}
/**
 * 
 * This is a function that is used if no pokemon with the first three letters are found
 *  
 * @param {string} action - This is a variable for the differentiate if add or remove.
 * 
 */
function notFoundFilter(action) {
    if (action == "add") {
        document.getElementById("pokemonContent").classList.add("notFoundFilter");
    } else if (action == "remove") {
        document.getElementById("pokemonContent").classList.remove("notFoundFilter");
    }
}

function isNumberLowerAsInt(number, int) {
    return number < int;
}

function isNumberBiggerAsLoadedPokemon(number) {
    return number > loadedPokemonInt;
}

async function filterThePokemon(filterWord) {
    return allPokemonNames.filter(name => name.includes(filterWord));
}

function bigLetter(str) {
    return str[0].toUpperCase() + str.substr(1);
}

function isNotUndefined(element) {
    return element != undefined;
}

function toogleBigPicture() {
    document.getElementById("bigPictureDiv").classList.toggle("d_none");
    document.getElementById("bigPictureDiv").classList.toggle("center");
}

function removeBigPicture() {
    document.getElementById("bigPictureDiv").classList.add("d_none");
    document.getElementById("bigPictureDiv").classList.remove("center");
}

async function searchEvoChain(int) {
    let responseData = await loadPokemonDataFromApi(SPECIES_URL + int.toString());
    let responseDataEvo = await loadPokemonDataFromApi(responseData.evolution_chain.url);
    evolutionArray = [];
    imgPictureArray = [];
    evolutionArray.push(responseDataEvo.chain.species.name);
    await tryCatchPushEvo(responseDataEvo);
    await tryCatchPushLastEvo(responseDataEvo);
    await pushToImgPictureArray();
    hideLastEvolution(fail);
}

async function tryCatchPushEvo(responseDataEvo) {
    try {
        if (isNotUndefined(responseDataEvo.chain.evolves_to[0].species.name)) {
            evolutionArray.push(responseDataEvo.chain.evolves_to[0].species.name);
        }        
    } catch (error) {
        fail = 1;
    }
}

async function tryCatchPushLastEvo(responseDataEvo) {
    try {
        if (isNotUndefined(responseDataEvo.chain.evolves_to[0].evolves_to[0].species.name)) {
            evolutionArray.push(responseDataEvo.chain.evolves_to[0].evolves_to[0].species.name);
        }        
    } catch (error) {
        fail = 2;
    }
}

function hideLastEvolution(fail) {
    if (fail == 1) {
        document.getElementById("evolution1").classList.add("d_none");
    } else if (fail == 2) {
        document.getElementById("evolution2").classList.add("d_none");
    }
}

async function pushToImgPictureArray() {
    for (let index = 0; index < evolutionArray.length; index++) {
        let responsePictureData = await loadPokemonDataFromApi(BASE_URL + evolutionArray[index]);
        imgPictureArray.push(responsePictureData.sprites.other.dream_world.front_default);
    }
    document.getElementById("imgDiv").innerHTML = renderPokemonEvolutin(imgPictureArray);           
}