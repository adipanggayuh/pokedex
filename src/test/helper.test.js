import {capitalizeFirstChar, getImage, getBgImage, getFirstType, extractValue, filterPokemonsByType} from '../helper/helper';
import defaultImage from '../media/default.svg';
import bg from '../constant/bgImages';
import { dummyDetail, dummypokemons } from './dummy';

test('Capitalize First char', () =>{
    expect(capitalizeFirstChar('pikachu')).toBe('Pikachu');
  })
  
test('Get Image', () =>{
    expect(getImage('pikachu')).toBe(defaultImage);
    expect(getImage()).toBe(defaultImage);
    expect(getImage({})).toBe(defaultImage);
    expect(getImage([])).toBe(defaultImage);
    expect(getImage(dummyDetail)).toBe("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/129.svg");
})

test('get pokemon first type', () =>{
    expect(getFirstType('pikachu')).toBe(null);
    expect(getFirstType()).toBe(null);
    expect(getFirstType({})).toBe(null);
    expect(getFirstType([])).toBe(null);
    expect(getFirstType(dummyDetail)).toBe('water');
})

test('get pokemon background', () =>{
    expect(getBgImage('pikachu')).toBe(bg.normal);
    expect(getBgImage()).toBe(bg.normal);
    expect(getBgImage({})).toBe(bg.normal);
    expect(getBgImage([])).toBe(bg.normal);
    expect(getBgImage(dummyDetail)).toBe(bg.water);
})

test('extract pokemon detail values to array', () =>{
    expect(extractValue('pikachu')).toStrictEqual([]);
    expect(extractValue()).toStrictEqual([]);
    expect(extractValue({})).toStrictEqual([]);
    expect(extractValue(null, 'ability')).toStrictEqual([]);
    expect(extractValue(dummyDetail.abilities, 'ability')).toStrictEqual(["swift-swim","rattled"]);
    expect(extractValue(dummyDetail.abilities, 'type')).toStrictEqual([]);
})

test('extract pokemon filter by type', () =>{
    expect(filterPokemonsByType('pikachu')).toStrictEqual([]);
    expect(filterPokemonsByType()).toStrictEqual([]);
    expect(filterPokemonsByType({})).toStrictEqual([]);
    expect(filterPokemonsByType(null, 'ability')).toStrictEqual([]);
    let filtered = filterPokemonsByType(dummypokemons, 'normal')
    expect(filtered.length).toBe(1);
    expect(filterPokemonsByType(dummypokemons, 'fire')).toStrictEqual([]);
})