import React from 'react';
import { Box, Skeleton } from '@mui/material';

const SkeletonLoader: React.FC = () => {
  return (
    <Box sx={{ width: '100%' }}>
      {/* Table header skeleton */}
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          p: 2,
          borderBottom: '2px solid',
          borderColor: 'divider',
          bgcolor: 'grey.50',
        }}
      >
        {[35, 30, 20].map((w, i) => (
          <Skeleton key={i} variant="text" width={`${w}%`} height={24} />
        ))}
      </Box>

      {/* Row skeletons */}
      {Array.from({ length: 7 }).map((_, rowIdx) => (
        <Box
          key={rowIdx}
          sx={{
            display: 'flex',
            gap: 2,
            p: 2,
            borderBottom: '1px solid',
            borderColor: 'divider',
            bgcolor: rowIdx % 2 === 0 ? '#fff' : 'grey.50',
            animation: 'pulse 1.5s ease-in-out infinite',
          }}
        >
          <Skeleton variant="text" width="35%" height={20} animation="wave" />
          <Skeleton variant="text" width="30%" height={20} animation="wave" />
          <Skeleton variant="text" width="20%" height={20} animation="wave" />
        </Box>
      ))}
    </Box>
  );
};

export default SkeletonLoader;
