import React, { useState } from 'react';
import {
    Grid, Box,
    Tabs,
    Tab, Chip
} from '@mui/material';
import TabPanel from './tabPanel';
import { extractValue } from '../../helper/helper';
import {TYPE, ABILITY} from '../../constant/constant';
import styles from './styles';

const allProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const PokeTabs = ({ pokeInfo, moves }) => {
    // ======== variable and state =======
    const [tabVal, setTabVal] = useState(0);

    const handleChange = (event, newValue) => {
        setTabVal(newValue);
    };

    const chipGenerator = (data) => {
        return data.length > 0 && data.map(item => {
            return <Chip key={item} label={item} />
        });
    }

    return (

        <Box sx={styles.maxWidth}>
            <Box sx={styles.tabbar}>
                <Tabs value={tabVal} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="About" {...allProps(0)} />
                    <Tab label="Moves" {...allProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={tabVal} index={0}>
                <Grid container sx={styles.leftAlign}>
                    <Grid item xs={3}>
                        Types
                    </Grid>
                    <Grid item xs={9}>
                        : {extractValue(pokeInfo.types, TYPE).join(", ")}
                    </Grid>
                    <Grid item xs={3}>
                        Height
                    </Grid>
                    <Grid item xs={9}>
                        : {pokeInfo.height}
                    </Grid>
                    <Grid item xs={3}>
                        Wight
                    </Grid>
                    <Grid item xs={9}>
                        : {pokeInfo.weight}
                    </Grid>
                    <Grid item xs={3}>
                        Abilities
                    </Grid>
                    <Grid item xs={9}>
                        : {extractValue(pokeInfo.abilities, ABILITY).join(", ")}
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={tabVal} index={1}>
                {chipGenerator(moves)}
            </TabPanel>
        </Box>
    )
}

export default PokeTabs;