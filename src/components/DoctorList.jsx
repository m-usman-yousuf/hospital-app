import React from 'react';
import { Typography, Paper, Grid } from '@mui/material';

function DoctorList({ doctors }) {
  if (!doctors || doctors.length === 0) {
    return <Typography>No doctors available.</Typography>;
  }

  return (
    <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
      <Typography variant="h5" gutterBottom>
        Our Doctors
      </Typography>
      <Grid container spacing={2}>
        {doctors.map((doctor, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Paper elevation={3} sx={{ padding: 2 }}>
              <Typography variant="h6">{doctor.name}</Typography>
              <Typography>Fees: {doctor.fees}</Typography>
              <Typography>Timing: {doctor.timing}</Typography>
              <Typography>Days: {doctor.days}</Typography>
              <Typography>Contact: {doctor.contact}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Paper>
  );
}

export default DoctorList;