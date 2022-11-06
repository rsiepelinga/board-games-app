import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import { Typography } from '@mui/material';

const players = [
  { value: 0, label: '1',},
  { value: 100, label: '8+',}
];

const rating = [
  { value: 0, label: '1',},
  { value: 100, label: '10',}
];

const playtime = [
  { value: 0, label: '≤15',},
  { value: 100, label: '240≤',}
];

function valuetext(value) {
  return `${value}°C`;
}


const GameSeelctor = (props) => {
  const [owner, setOwner] = React.useState('');
  const [type, setType] = React.useState('');
  const [mechanic, setMechanic] = React.useState('');

  const handleOwnerChange = (event) => {
    setOwner(event.target.value);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const handleMechanicChange = (event) => {
    setMechanic(event.target.value);
  };

  return (
    <Container maxWidth="sm" sx={{padding: '10px'}}>
      <Box sx={{padding: '10px 0'}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Owned By</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={owner}
            label="Owned By"
            onChange={handleOwnerChange}
          >
            <MenuItem value={"Me"}>Me</MenuItem>
            <MenuItem value={"My Group"}>My Group</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{padding: '10px 0'}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Game Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="Game Type"
            onChange={handleTypeChange}
          >
            <MenuItem value={"Cooperative"}>Cooperative</MenuItem>
            <MenuItem value={"Competitive"}>Competitive</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box sx={{padding: '10px 0'}}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Mechanic</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={mechanic}
            label="Mechanic"
            onChange={handleMechanicChange}
          >
            <MenuItem value={10}>Deck Building</MenuItem>
            <MenuItem value={20}>Engine Building</MenuItem>
            <MenuItem value={30}>Worker Placement</MenuItem>
            <MenuItem value={30}>Tile Placing</MenuItem>
            <MenuItem value={30}>Area Control</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <FormControl fullWidth>
        <Typography variant="label">
          Number of Players
        </Typography>
        <Slider
          aria-label="Always visible"
          defaultValue={50}
          getAriaValueText={valuetext}
          step={8}
          marks={players}
        />
      </FormControl>
      <FormControl fullWidth>
        <Typography variant="label">
          Average Rating
        </Typography>
        <Slider
          aria-label="Always visible"
          defaultValue={50}
          getAriaValueText={valuetext}
          step={10}
          marks={rating}
        />
      </FormControl>
      <FormControl fullWidth>
        <Typography variant="label">
          Average Playtime
        </Typography>
        <Slider
          aria-label="Always visible"
          defaultValue={50}
          getAriaValueText={valuetext}
          step={10}
          marks={playtime}
        />
      </FormControl>
      <Box sx={{ textAlign: "center"}}>
        <Typography variant="body2">
          Indecisive?
          <Button 
            size="small"
            variant="text" 
            color="secondary"
            href="/login">
              Choose one for me.
          </Button>
        </Typography>
        <Button 
          fullWidth
          size="large"
          variant="contained" 
          color="secondary"
          href="/">
            Show Me Options
        </Button>
      </Box>
    </Container>
  );
}

export default GameSeelctor;