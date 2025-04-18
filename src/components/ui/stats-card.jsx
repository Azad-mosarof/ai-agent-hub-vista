
import React from 'react';
import { Box, Typography, Card, CardContent } from '@mui/material';

export const StatsCard = ({ title, value, icon }) => {
  return (
    <Card 
      sx={{ 
        height: '100%',
        transition: 'transform 0.2s',
        '&:hover': {
          transform: 'scale(1.05)'
        }
      }}
    >
      <CardContent sx={{ textAlign: 'center', p: 3 }}>
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
        <Typography variant="h4" component="div" gutterBottom>
          {value}
        </Typography>
        <Typography color="text.secondary">
          {title}
        </Typography>
      </CardContent>
    </Card>
  );
};
