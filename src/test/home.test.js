import axios from "axios";
import {GET_POKEMON_LIST_URL, GET_POKEMON_TYPES_URL} from '../constant/apiUrl';


describe('#fetchData()', () => {
    it('should load pokemon data', async () => {
      const data = await axios.get(GET_POKEMON_LIST_URL);
      expect(data).toBeDefined();
      expect(data.data.results.length).toEqual(20);
    })
})

describe('#fetchDetails()', () => {
    it('should load pokemon details', async () => {
      const data = await axios.get(GET_POKEMON_LIST_URL + '/1');
      expect(data).toBeDefined();
      expect(data.data.name).toEqual('bulbasaur');
      expect(data.data.abilities[0].ability.name).toEqual('overgrow');
    })
})

describe('#fetchTypes()', () => {
    it('should load pokemon types', async () => {
      const data = await axios.get(GET_POKEMON_TYPES_URL);
      expect(data).toBeDefined();
      expect(data.data.results.length).toEqual(20);
      expect(data.data.results[0].name).toEqual('normal');
    })
})