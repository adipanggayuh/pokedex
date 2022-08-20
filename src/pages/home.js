import React, { useEffect, useState } from 'react';
import { Container, Divider, Grid, } from '@mui/material';
import axios from 'axios';
import { GET_POKEMON_LIST_URL, GET_POKEMON_TYPES_URL } from '../constant/apiUrl';
import PokemonList from '../components/pokemonList/pokemonList';
import InfiniteScroll from "react-infinite-scroll-component";
import Filter from '../components/filter/filter';
import { filterPokemonsByType } from '../helper/helper';


const Home = () => {
    // ---state---
    const [pokemonData, setPokemonData] = useState({
        count: "",
        next: "",
        previous: "",
        results: []
    });

    const [pokemonList, setPokemonList] = useState([])
    const [pokemonTypes, setPokemonTypes] = useState([]);
    const [selectedType, setSelectedType] = useState("None");

    // ---api---
    const fetchData = (url) => {
        axios.get(url).then(async (res) => {
            let _pokemonData = {...res.data};
            _pokemonData.results = await getDetails(_pokemonData.results);
            _pokemonData.results = [...pokemonData.results,..._pokemonData.results];
            setPokemonData(_pokemonData);
            setPokemonList(filterPokemonsByType(_pokemonData.results, selectedType));
        })
    };

    const fetchDetails = async (url) => {
        let response = await axios.get(url)
        return response.data;
    }

    const fetchTypes = (url) => {
        axios.get(url).then((res) => {
            setPokemonTypes(res.data.results);
        })
    }

    const fetchNext = () => {
        pokemonData.next && fetchData(pokemonData.next);
    }

    // ---life cycle---
    useEffect(() => {
        fetchData(GET_POKEMON_LIST_URL);
        fetchTypes(GET_POKEMON_TYPES_URL);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(()=>{
        let _pokemonList = filterPokemonsByType(pokemonData.results, selectedType);
        setPokemonList(_pokemonList)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[selectedType])

    useEffect(()=>{
        if(pokemonList.length<20){
            fetchNext();
        }
         // eslint-disable-next-line react-hooks/exhaustive-deps
    },[pokemonList])
    // ---functions---
    // get pokemon details
    const getDetails = async (data) => {
        let _data = [...data];
        for (let i = 0; i<_data.length;i++){
            _data[i]["details"] = await fetchDetails(_data[i].url);
        }
        return _data;
    }

    return (
        <Container>
             <InfiniteScroll
                    dataLength={pokemonList.length}
                    next={fetchNext}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Filter types={pokemonTypes} selectedType={selectedType} setType={setSelectedType}/>
                <Divider sx={{ padding: 1, width: '100%' }} />
                <PokemonList data={pokemonList}/>
            </Grid>
            </InfiniteScroll>
        </Container>
    )
}

export default Home;