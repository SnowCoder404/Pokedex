function getColor(type) {
    switch(type) {
        case "grass":
            return "#12541E";
        case "fire":
            return "darkred";
        case "water":
            return "darkblue"; 
        case "bug":
            return "darkgreen";        
        case "normal":
            return "grey";
        case "ghost":
        case "poison":
            return "#800080"; 
        case "electric":
            return "orange";
        case "fighting":
        case "ground":
            return "brown";
        case "psychic":
        case "fairy":
            return "#FF007F";
    }
}