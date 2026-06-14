import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RefreshIcon from '@mui/icons-material/Refresh';

interface Props {
  message?: string;
  onRetry?: () => void;
}

const ErrorState: React.FC<Props> = ({ message, onRetry }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 8,
        px: 4,
        gap: 2,
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          borderRadius: '50%',
          bgcolor: 'error.light',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 1,
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 40, color: 'error.main' }} />
      </Box>
      <Typography variant="h6" color="error.main" fontWeight={600} textAlign="center">
        אירעה שגיאה בטעינת הנתונים
      </Typography>
      {message && (
        <Typography
          variant="body2"
          color="text.secondary"
          textAlign="center"
          maxWidth={360}
          sx={{
            bgcolor: 'error.light',
            border: '1px solid',
            borderColor: 'error.main',
            borderRadius: 2,
            px: 2,
            py: 1,
            opacity: 0.9,
          }}
        >
          {message}
        </Typography>
      )}
      {onRetry && (
        <Button
          variant="outlined"
          color="error"
          startIcon={<RefreshIcon />}
          onClick={onRetry}
          sx={{ mt: 1 }}
        >
          נסה שוב
        </Button>
      )}
    </Box>
  );
};

export default ErrorState;
