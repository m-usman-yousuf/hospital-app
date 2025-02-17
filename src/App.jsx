import React,{useState,useEffect} from 'react';
import { Container,Typography } from '@mui/material';
import HospitalDetails from './components/HospitalDetails';
import DoctorList from './components/DoctorList';



function App() {
  const clientId = Number(import.meta.env.VITE_CLIENT_ID);

  const [hospitalData, setHospitalData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the backend API
    fetch(`https://fa-quizapp-cc-usman.azurewebsites.net/api/HospitalDetails/${clientId}?code=htDe_mgDNmPtJKgnfq-a8HR9yGav7Z914gx58wVWhO9AAzFupYL-pw==`)
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
      <HospitalDetails clientId={clientId} />
      <DoctorList clientId={clientId} doctors={hospitalData.data}  />
    </Container>
  );
}

export default App;