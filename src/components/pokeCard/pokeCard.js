import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Toolbar, Chip
} from '@mui/material';
import whiteBg from "../../media/normalbg.png";
import { capitalizeFirstChar, getBgImage, getImage, extractValue } from '../../helper/helper';
import defaultImg from '../../media/default.svg';
import LeftTypography from '../typography/LeftTypography';
import PokeTabs from '../pokeDetail/pokeTabs';

const PokemonDetail = (props) => {
    // ======== variable and state =======
    const {pokemon} = props;

    const [pokeInfo, setPokeInfo] = useState({});
    const [bgImage, setBgImage] = useState(whiteBg);
    const [pokeImage, setPokeImage] = useState(defaultImg);
    const [moves, setMoves] = useState([]);

    // ========= function =======
    const getData = () => {
            setPokeInfo(pokemon);
            setBgImage(getBgImage(pokemon));
            setPokeImage(getImage(pokemon));
            setMoves(getMoves(pokemon));
    }

    const getMoves = (poke) => {
        return poke.moves ? extractValue(poke.moves, 'move') : [];
    }

    // ========= lifecycle ======
    useEffect(() => {
        getData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
            <Grid item xs={12} md={4}>
                <Card
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        marginBottom: 20
                    }}
                >
                    <CardContent>
                        <Typography component="div" sx={{ flexGrow: 1, }} align='center'>
                            <img src={pokeImage} alt="" height={150} />
                        </Typography>
                    </CardContent>
                    <CardContent
                        sx={{
                            backgroundImage: `url(${whiteBg})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: 'cover',
                            borderTopLeftRadius: 10,
                            borderTopRightRadius: 10
                        }}
                    >
                        <Toolbar disableGutters>
                            <LeftTypography>
                                {pokeInfo.name && <Chip label={capitalizeFirstChar(pokeInfo.name)} sx={{ fontSize: 20 }} />}
                            </LeftTypography>
                        </Toolbar>
                        <PokeTabs pokeInfo={pokeInfo} moves={moves} />
                    </CardContent>
                </Card>
            </Grid>
    )
}

export default PokemonDetail;