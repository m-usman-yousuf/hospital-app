import React from 'react';
import { Typography, Paper, Avatar } from '@mui/material';

function HospitalDetails({ hospital }) {
  if (!hospital) return <Typography>Loading hospital details...</Typography>;

  return (
    <Paper
      elevation={3}
      sx={{
        padding: 3,
        backgroundColor: hospital.bgColor || '#1976d2',
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
