import bg from '../constant/bgImages';
import defaultImage from '../media/default.svg';
const getBgImage = (poke) => {
    let type = getFirstType(poke);
    return type ? bg[type] : bg.normal;
}
const getFirstType = (poke) => {
    if (poke && poke.types && poke.types.length) {
        return poke.types[0].type.name;
    } else {
        return null;
    }
}

const getImage = (poke) => {
    return poke?.sprites?.other?.dream_world?.front_default || defaultImage;
}
const extractValue = (array, paramName) => {
    if(array && array.length > 0 && Array.isArray(array) && paramName) {
        return array.reduce((acc, cur) => {
            if(cur[paramName]){
                acc.push(cur[paramName].name);
            }
            return acc;
        }, []);
    }else{
        return [];
    }
}

const capitalizeFirstChar = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const filterPokemonsByType = (data, type) => {
    if(type && type !== "None" && data && Array.isArray(data)) {
        data = data.filter(item=> item.details.types.find(rec=>rec.type.name === type));
    }else if(!Array.isArray(data)){
        data = [];
    }
    return data;
}

export {
    getBgImage,
    getFirstType,
    getImage,
    extractValue,
    capitalizeFirstChar,
    filterPokemonsByType,
}