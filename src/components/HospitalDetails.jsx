import React, { useEffect, useState } from 'react';
import { Typography, Paper, Avatar } from '@mui/material';
import { fetchHospitalDetails } from '../mockApi';

function HospitalDetails({ clientId }) {
  const [hospital, setHospital] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHospitalDetails(clientId)
      .then((data) => {
        setHospital(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [clientId]);

  if (loading) return <Typography>Loading hospital details...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        backgroundColor: hospital.bgColor,
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <Avatar src={hospital.iconUrl} alt={hospital.name} sx={{ width: 80, height: 80, margin: 'auto' }} />
      <Typography variant="h4" gutterBottom>
        {hospital.name}
      </Typography>
      <Typography variant="subtitle1">{hospital.subtitle}</Typography>
    </Paper>
  );
}

export default HospitalDetails;