import React from 'react';
import { Typography } from '@mui/material';
import styles from './styles';
const LeftTypography = (props) => {
    return (
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={styles.leftTypography}
        >
            {props.children}
        </Typography>
    )
}
export default LeftTypography;