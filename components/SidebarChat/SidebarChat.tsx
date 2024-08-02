import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const DrawerContent = (
    <Box sx={{ width: 500, padding: 2 }} role="presentation" onClick={toggleDrawer(false)}>
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
    <div>
      <Button onClick={toggleDrawer(true)}>Open drawer</Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerContent}
      </Drawer>
    </div>
  );
}
