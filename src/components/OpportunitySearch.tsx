import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

interface Props {
  onSearch: (id: string) => void;
  loading: boolean;
}

const OpportunitySearch: React.FC<Props> = ({ onSearch, loading }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (value.trim()) onSearch(value.trim());
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        flexWrap: 'wrap',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'primary.main' }}>
        <BusinessCenterIcon sx={{ fontSize: 20 }} />
        <Typography variant="body2" fontWeight={600} color="text.secondary">
          מספר הזדמנות:
        </Typography>
      </Box>
      <TextField
        size="small"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="הזן מספר הזדמנות..."
        sx={{ minWidth: 220 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
            </InputAdornment>
          ),
        }}
      />
      <Button
        type="submit"
        variant="contained"
        disabled={!value.trim() || loading}
        sx={{ minWidth: 120 }}
      >
        {loading ? 'טוען...' : 'טען צוות'}
      </Button>
    </Box>
  );
};

export default OpportunitySearch;
