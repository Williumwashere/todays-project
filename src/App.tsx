import { Box } from '@mui/material';
import React from 'react';
import AddForm from './atoms/AddForm';
import ContactList from './atoms/ContactList';


function App() {
  return (
    <Box>
      <AddForm />
      <ContactList />
    </Box>
  );
}

export default App;
