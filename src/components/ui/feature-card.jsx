
import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

export const FeatureCard = ({ title, description, icon }) => {
  return (
    <Card 
      sx={{ 
        height: '100%',
        transition: 'all 0.2s',
        '&:hover': {
          boxShadow: 6
        }
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box 
          sx={{ 
            mb: 2,
            display: 'inline-flex',
            p: 1,
            borderRadius: 1,
            bgcolor: '#F1F0FB'
          }}
        >
          {React.cloneElement(icon, { sx: { fontSize: 40, color: '#9b87f5' } })}
        </Box>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};
