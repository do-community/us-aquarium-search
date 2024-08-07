import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Divider } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import AquariumCard from '../AquariumCard/AquariumCard';

export default function PersistentDrawer() {
  const [open, setOpen] = React.useState(true); // Persistent drawer should be open initially
  const [inputValue, setInputValue] = React.useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const drawerWidth = 500;

  const DrawerContent = (
    <Box
      sx={{ width: drawerWidth, padding: 2 }}
      role="presentation"
    >
      <TextField
        fullWidth
        label="Type your question here"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        sx={{ mb: 2 }}
      />
      <Button variant="contained" fullWidth onClick={() => alert('Button clicked!')}>
        Ask Away!
      </Button>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            United States Aquariums
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton onClick={toggleDrawer}>
            <MenuIcon />
          </IconButton>
        </Box>
        <Divider />
        {DrawerContent}
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, ml: `${drawerWidth}px` }}
      >
        <Toolbar />
        <AquariumCard aquariums={[]} />
        <Typography paragraph>
          DATA GOES HERE
        </Typography>
      </Box>
    </Box>
  );
}
