import { Container } from '@mui/material';
import React from 'react';
import './App.css';
import { WindFarmCard } from './components';
import { useWindFarms } from './hooks/useWindFarms';

const App = () => {
  const { windFarms } = useWindFarms();

  return (
    <Container maxWidth="sm">
      <div className="App">
        {windFarms.map((windFarm) => (
          <WindFarmCard windFarm={windFarm} />
        ))}
      </div>
    </Container>
  );
};

export default App;
