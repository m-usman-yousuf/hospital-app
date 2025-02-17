import React, { useEffect, useState } from 'react';
import { Typography, Paper, Avatar } from '@mui/material';

function HospitalDetails({ clientId }) {
  const [hospital, setHospital] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://fa-quizapp-cc-usman.azurewebsites.net/api/HospitalDetails/${clientId}?code=htDe_mgDNmPtJKgnfq-a8HR9yGav7Z914gx58wVWhO9AAzFupYL-pw==`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch hospital details');
        }
        return response.json();
      })
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