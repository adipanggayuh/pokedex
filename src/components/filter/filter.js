import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

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
    <FormControl sx={{ m: 1, minWidth: 120, marginTop:'30px', marginLeft:'20px' }} size="small">
      <InputLabel id="demo-select-small">Type</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={selectedType}
        label="Type"
        onChange={handleChange}
      >
        <MenuItem value="All">
          <em>All</em>
        </MenuItem>
        {renderMenuItem()}
      </Select>
    </FormControl>
  );
}

export default Filter;
