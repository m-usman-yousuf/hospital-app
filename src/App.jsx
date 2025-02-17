import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import HospitalDetails from './components/HospitalDetails';
import DoctorList from './components/DoctorList';

function App() {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/${clientId}?code=${import.meta.env.VITE_API_KEY}`;

  const [hospitalData, setHospitalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then((data) => {
        setHospitalData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [clientId]);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <HospitalDetails hospital={hospitalData} />
      <DoctorList doctors={hospitalData?.data} />
    </Container>
  );
}

export default App;
