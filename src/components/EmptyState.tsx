import React from 'react';
import { Box, Typography } from '@mui/material';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import SearchOffIcon from '@mui/icons-material/SearchOff';

interface Props {
  filtered?: boolean;
}

const EmptyState: React.FC<Props> = ({ filtered = false }) => {
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
          bgcolor: filtered ? 'warning.light' : 'primary.light',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 1,
        }}
      >
        {filtered ? (
          <SearchOffIcon sx={{ fontSize: 40, color: 'warning.main' }} />
        ) : (
          <PeopleOutlineIcon sx={{ fontSize: 40, color: 'primary.main' }} />
        )}
      </Box>
      <Typography variant="h6" color="text.secondary" fontWeight={600} textAlign="center">
        {filtered ? 'לא נמצאו עובדים התואמים את החיפוש' : 'אין נתונים להצגה'}
      </Typography>
      <Typography variant="body2" color="text.disabled" textAlign="center" maxWidth={320}>
        {filtered
          ? 'נסה לשנות את פרמטרי החיפוש או הסנן'
          : 'הכנס מספר הזדמנות כדי לטעון את צוות הפרויקט'}
      </Typography>
    </Box>
  );
};

export default EmptyState;
