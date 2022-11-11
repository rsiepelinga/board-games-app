import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Slider from '@mui/material/Slider';
import { Typography } from '@mui/material';

const ownerOptions = [
  'Me',
  'Candorians',
  'Lofties'
];

const typeOptions = [
  'Cooperative',
  'Competitive'
];

const mechanicOptions = [
  'Deck Building',
  'Engine Building',
  'Tile Placement',
  'Income',
  'Hand Management',
  'Resource Management'
];

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
  const [mechanic, setMechanic] = React.useState([]);

  const handleOwnerChange = (event) => {
    setOwner(event.target.value);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
  };
  const handleMechanicChange = (event) => {
    const {
      target: { value },
    } = event;
    setMechanic(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <Container maxWidth="sm" sx={{padding: '10px'}}>
      <Box sx={{padding: '5px 0'}}>
        <Typography variant="label">
          Owned By
        </Typography>
        <Select
          fullWidth
          labelId="demo-simple-select-label"
          variant="outlined"
          id="demo-simple-select"
          value={owner}
          onChange={handleOwnerChange}
        >
          {ownerOptions.map((opt) => (
            <MenuItem
              key={opt}
              value={opt}
            >
              {opt}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box sx={{padding: '5px 0'}}>
        <Typography variant="label">
          Game Type
        </Typography>
        <Select
          fullWidth
          labelId="demo-simple-select-label"
          variant="outlined"
          id="demo-simple-select"
          value={type}
          onChange={handleTypeChange}
        >
          {typeOptions.map((opt) => (
            <MenuItem
              key={opt}
              value={opt}
            >
              {opt}
            </MenuItem>
          ))}
        </Select>
      </Box>
      <Box sx={{padding: '5px 0 10px'}}>
        <Typography variant="label">
          Mechanic
        </Typography>
        <Select
          fullWidth
          multiple
          labelId="demo-simple-select-label"
          variant="outlined"
          id="demo-simple-select"
          value={mechanic}
          onChange={handleMechanicChange}
          sx={{}}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        >
          {mechanicOptions.map((opt) => (
            <MenuItem
              key={opt}
              value={opt}
            >
              {opt}
            </MenuItem>
          ))}
        </Select>
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