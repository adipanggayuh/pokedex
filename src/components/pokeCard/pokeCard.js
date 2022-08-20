import React, { useEffect, useState } from 'react';
import { Grid, Card, CardContent, Typography, Toolbar, Chip
} from '@mui/material';
import whiteBg from "../../media/normalbg.png";
import { capitalizeFirstChar, getBgImage, getImage, extractValue } from '../../helper/helper';
import defaultImg from '../../media/default.svg';
import LeftTypography from '../typography/LeftTypography';
import PokeTabs from '../pokeDetail/pokeTabs';
import { MOVE } from '../../constant/constant';
import styles from './styles';
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
            setMoves(extractValue(pokemon.moves, MOVE));
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
                        <Typography component="div" sx={styles.flexGrow} align='center'>
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
                                {pokeInfo.name && <Chip label={capitalizeFirstChar(pokeInfo.name)} sx={styles.font20} />}
                            </LeftTypography>
                        </Toolbar>
                        <PokeTabs pokeInfo={pokeInfo} moves={moves} />
                    </CardContent>
                </Card>
            </Grid>
    )
}

export default PokemonDetail;