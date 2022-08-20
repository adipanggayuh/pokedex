import React from 'react';
import { Typography } from '@mui/material';
import styles from './styles';
const RightTypography = (props) => {
    return (
        <Typography component={'div'} sx={styles.flexGrow} align='right'>
            {props.children}
        </Typography>
    )

}
export default RightTypography;