import React from 'react';
import { StepIconProps } from '@mui/material/StepIcon';
import { Check } from '@mui/icons-material';
import { styled } from '@mui/material/styles';

const CustomStepIconRoot = styled('div')(({ theme, ownerState }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: ownerState.active ? theme.palette.primary.main : theme.palette.grey[500],
  '& .CustomStepIcon-completedIcon': {
    color: theme.palette.primary.main,
    zIndex: 1,
    fontSize: 18,
  },
  '& .CustomStepIcon-circle': {
    width: 24,
    height: 24,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
}));

function CustomStepIcon(props: StepIconProps) {
  const { active, completed, className } = props;

  return (
    <CustomStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="CustomStepIcon-completedIcon" />
      ) : (
        <div className="CustomStepIcon-circle" />
      )}
    </CustomStepIconRoot>
  );
}

export default CustomStepIcon;


import React from 'react';
import { Stepper, Step, StepLabel, Box, Typography } from '@mui/material';
import CustomStepIcon from './CustomStepIcon'; // Import the custom step icon component

const steps = ['Order Placed', 'Order Confirmed', 'Order Dispatched', 'Order Delivered'];

const OrderStatus = ({ activeStep }) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h6" gutterBottom>
        Order Status
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};



import React, { useState } from 'react';
import OrderStatus from './OrderStatus';

const App = () => {
  const [activeStep, setActiveStep] = useState(1); // change this value to reflect the current order status

  return (
    <div>
      <OrderStatus activeStep={activeStep} />
    </div>
  );
};

