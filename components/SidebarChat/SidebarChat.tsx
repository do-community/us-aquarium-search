import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Divider, Paper } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import axios from 'axios';

export default function PersistentDrawer() {
  const [open, setOpen] = React.useState(true);
  const [inputValue, setInputValue] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  const handleInputChange = (event: any) => {
    setInputValue(event.target.value);
  };

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleSendMessage = async () => {
    if (inputValue.trim() === '') return; // Prevent sending empty messages

    const userMessage = {
      sender: 'user',
      text: inputValue,
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');

    try {
      const response = await axios.post('/api/generateInfo', { marineInfo: userMessage.text });
      const botMessage = {
        sender: 'bot',
        text: response.data.data,
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  const handleKeyPress = (event: any) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const drawerWidth = 500;

  const DrawerContent = (
    <Box
      sx={{ width: drawerWidth, padding: 2, display: 'flex', flexDirection: 'column', height: '100%' }}
      role="presentation"
    >
      <Box sx={{ flexGrow: 1, overflowY: 'auto', mb: 2 }}>
        {messages.map((message, index) => (
          <Paper
            key={index}
            sx={{
              p: 2,
              mb: 1,
              backgroundColor: message.sender === 'user' ? 'lightgreen' : 'lightblue',
              display: 'flex',
              alignItems: 'center',
              borderRadius: '10px',
            }}
          >
            <Typography sx={{ mr: 1 }}>
              {message.sender === 'user' ? '👤' : '🦈'}
            </Typography>
            <Typography>{message.text}</Typography>
          </Paper>
        ))}
      </Box>
      <TextField
        fullWidth
        label="🦈 Type your question here"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress} // Listen for the Enter key press
        sx={{ mb: 2 }}
      />
      <Button variant="contained" fullWidth onClick={handleSendMessage}>
        Ask Away!
      </Button>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position="fixed" sx={{ width: '100%' }}>
        <Toolbar>
          {open && (
            <Typography variant="h6" component="div" sx={{ marginRight: 2 }}>
              Chat with Sammy!
            </Typography>
          )}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            edge="start"
            sx={{ mr: 2 }}
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
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, ml: `${open ? drawerWidth : 0}px` }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}
