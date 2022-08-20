import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import RightTypography from '../typography/RightTypography';
import { FormLabel } from '@mui/material';

const Filter =({types, selectedType, setType})=> {

  const handleChange = (event) => {
    setType(event.target.value);
  };

  const renderMenuItem = () => {
    return types.length>0 && types.map((item, i)=>{
            return <MenuItem key={item.name + i} value={item.name}>{item.name}</MenuItem>
        })    
  }

  return (
    <RightTypography>
      <FormControl sx={{ m: 1, minWidth: 120, marginTop:'35px', marginLeft:'20px' }} >
        <FormLabel>Filtered By</FormLabel>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120, marginTop:'30px', marginLeft:'20px' }} size="small">
        <InputLabel id="demo-select-small">Type</InputLabel>
        <Select
          labelId="demo-select-small"
          id="demo-select-small"
          value={selectedType}
          label="Type"
          onChange={handleChange}
        >
          <MenuItem value="None">
            <em>None</em>
          </MenuItem>
          {renderMenuItem()}
        </Select>
      </FormControl>
    </RightTypography>
  );
}

export default Filter;
