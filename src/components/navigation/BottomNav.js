import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import TableRowsIcon from '@mui/icons-material/TableRows';
import WindowIcon from '@mui/icons-material/Window';
import CasinoIcon from '@mui/icons-material/Casino';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import BungalowOutlinedIcon from '@mui/icons-material/BungalowOutlined';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Paper from '@mui/material/Paper';

export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{
        position: 'fixed', bottom: 0, left: 0, right: 0
      }}
      elevation={3}
    >
      <BottomNavigation
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{ backgroundColor: '#2E3142' }}
      >
        <BottomNavigationAction label="Home" icon={<BungalowOutlinedIcon color="white" />} />
        <BottomNavigationAction label="Groups" icon={<Diversity3Icon color="white" />} />
        {/* <BottomNavigationAction label="Games" icon={<CasinoIcon color="secondary" />} /> */}
        <BottomNavigationAction label="Selector" icon={<SearchIcon color="white" />} />
        <BottomNavigationAction label="Profile" icon={<AccountCircleIcon color="white" />} />
      </BottomNavigation>
    </Paper>
  );
}