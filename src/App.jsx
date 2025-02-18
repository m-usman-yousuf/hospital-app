import React, { useState, useEffect } from 'react';
import { Container, Typography } from '@mui/material';
import HospitalDetails from './components/HospitalDetails';
import DoctorList from './components/DoctorList';
import PatientForm from './components/PatientForm';

function App() {
  const clientId = import.meta.env.VITE_CLIENT_ID;
  const apiKey = import.meta.env.VITE_API_KEY;
  const hospitalDetailsUrl = `${import.meta.env.VITE_API_BASE_URL}/HospitalDetails/${clientId}?code=${apiKey}`;
  const formConfigUrl = `${import.meta.env.VITE_API_BASE_URL}/getformconfig/${clientId}?code=${apiKey}`;

  const [hospitalData, setHospitalData] = useState(null);
  const [formConfig, setFormConfig] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(hospitalDetailsUrl)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch hospital details');
        return response.json();
      })
      .then((data) => {
        setHospitalData(data);
        return fetch(formConfigUrl);
      })
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch form configuration');
        return response.json();
      })
      .then((data) => {
        setFormConfig(data);
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
      <HospitalDetails hospital={hospitalData?.hospital} />
      <DoctorList doctors={hospitalData?.doctors} />
      <PatientForm config={formConfig} />
    </Container>
  );
}

export default App;