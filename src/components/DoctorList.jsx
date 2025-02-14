import React, { useEffect, useState } from 'react';
import { Typography, Paper, List, ListItem, ListItemText, Grid } from '@mui/material';
import { fetchDoctorList } from '../mockApi';

function DoctorList({ clientId }) {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchDoctorList(clientId)
      .then((data) => {
        setDoctors(data.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [clientId]);

  if (loading) return <Typography>Loading doctor list...</Typography>;
  if (error) return <Typography color="error">{error}</Typography>;

  // Custom layout based on clientId
  const renderDoctorList = () => {
    if (clientId === 1) {
      // Layout for Hospital 1
      return (
        <List>
          {doctors.map((doctor, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={doctor.name}
                secondary={`Fees: ${doctor.fees} | Timing: ${doctor.timing} | Days: ${doctor.days} | Contact: ${doctor.contact}`}
              />
            </ListItem>
          ))}
        </List>
      );
    } else if (clientId === 2) {
      // Layout for Hospital 2
      return (
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
      );
    }
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
      <Typography variant="h5" gutterBottom>
        Doctors
      </Typography>
      {renderDoctorList()}
    </Paper>
  );
}

export default DoctorList;