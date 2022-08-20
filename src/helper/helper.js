import bg from '../constant/bgImages';
import defaultImage from '../media/default.svg';
const getBgImage = (poke) => {
    let type = getFirstType(poke);
    return type ? bg[type] : bg.normal;
}
const getFirstType = (poke) => {
    if (poke.types && poke.types.length) {
        return poke.types[0].type.name;
    } else {
        return null;
    }
}

const getImage = (poke) => {
    return poke?.sprites?.other?.dream_world?.front_default || defaultImage;
}
const extractValue = (array, paramName) => {
    return array && array.length > 0 ? array.reduce((acc, cur) => {
        acc.push(cur[paramName].name);
        return acc;
    }, []) : [];
}

const capitalizeFirstChar = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

const filterPokemonsByType = (data, type) => {
    if(type !== "None") {
        data = data.filter(item=> item.details.types.find(rec=>rec.type.name === type));
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