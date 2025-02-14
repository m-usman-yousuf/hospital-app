import React from 'react';
import { Container } from '@mui/material';
import HospitalDetails from './components/HospitalDetails';
import DoctorList from './components/DoctorList';



function App() {
  const clientId = Number(import.meta.env.VITE_CLIENT_ID);

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <HospitalDetails clientId={clientId} />
      <DoctorList clientId={clientId} />
    </Container>
  );
}

export default App;