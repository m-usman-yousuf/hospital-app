import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  Paper,
  TextField,
  Grid,
  MenuItem,
  Select,
  FormControl,
  InputLabel
} from '@mui/material';

function PatientForm({ config }) {
  const [activeStep, setActiveStep] = useState(0);
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const renderField = (field) => {
    switch (field.type) {
      case 'text':
        return (
          <TextField
            fullWidth
            label={field.label}
            value={formData[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
            required={field.required}
          />
        );
      case 'date':
        return (
          <TextField
            fullWidth
            type="date"
            label={field.label}
            value={formData[field.name] || ''}
            onChange={(e) => handleChange(field.name, e.target.value)}
            required={field.required}
            InputLabelProps={{ shrink: true }}
          />
        );
      case 'select':
        return (
          <FormControl fullWidth required={field.required}>
            <InputLabel>{field.label}</InputLabel>
            <Select
              value={formData[field.name] || ''}
              onChange={(e) => handleChange(field.name, e.target.value)}
              label={field.label}
            >
              {field.options.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        );
      default:
        return null;
    }
  };

  const renderStepContent = (step) => {
    const stepConfig = config.steps[step];
    if (!stepConfig) return null;

    return (
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        {stepConfig.fields.map((field) => (
          <Grid item xs={12} key={field.name}>
            {renderField(field)}
          </Grid>
        ))}
      </Grid>
    );
  };

  return (
    <Paper elevation={3} sx={{ padding: 3, marginTop: 3 }}>
      <Typography variant="h5" gutterBottom>
        Patient Appointment Form
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {config.steps.map((step, index) => (
          <Step key={index}>
            <StepLabel>{step.title}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {renderStepContent(activeStep)}
        <div style={{ marginTop: 2 }}>
          <Button disabled={activeStep === 0} onClick={handleBack}>
            Back
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            disabled={activeStep === config.steps.length - 1}
            sx={{ mt: 1 }}
          >
            {activeStep === config.steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      </div>
    </Paper>
  );
}

export default PatientForm;