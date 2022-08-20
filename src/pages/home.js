import React, { useEffect, useState } from 'react';
import { Container, Divider, Grid, } from '@mui/material';
import axios from 'axios';
import { GET_POKEMON_LIST_URL, GET_POKEMON_TYPES_URL } from '../constant/apiUrl';
import PokemonList from '../components/pokemonList/pokemonList';
import InfiniteScroll from "react-infinite-scroll-component";


const Home = () => {
    // ---state---
    const [pokemonData, setPokemonData] = useState({
        count: "",
        next: "",
        previous: "",
        results: []
    });

    const [pokemonTypes, setPokemonTypes] = useState([]);

    // ---api---
    const fetchData = (url) => {
        axios.get(url).then(async (res) => {
            let _pokemonData = {...res.data};
            _pokemonData.results = await getDetails(_pokemonData.results);
            _pokemonData.results = [...pokemonData.results,..._pokemonData.results];
            console.log('ori1',_pokemonData.results);
            setPokemonData(_pokemonData);
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
                    dataLength={pokemonData.results.length}
                    next={fetchNext}
                    hasMore={true}
                    loader={<h4>Loading...</h4>}
                >
            <Grid container rowSpacing={2} columnSpacing={2}>
                <Divider sx={{ padding: 1, width: '100%' }} />
                <PokemonList data={pokemonData.results}/>
            </Grid>
            </InfiniteScroll>
        </Container>
    )
}

export default Home;