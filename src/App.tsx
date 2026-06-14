import React, { useEffect } from 'react';

import {
  Box,
  Typography,
  Divider,
  Paper,
} from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import ProjectTeamTable from './components/ProjectTeamTable';
import ErrorState from './components/ErrorState';
import { useProjectTeam } from './hooks/useProjectTeam';

const App: React.FC = () => {
  const { data, state, error, load, retry } = useProjectTeam();

  const isLoading = state === 'loading';
  const isError = state === 'error';
  const hasData = state === 'success';
  useEffect(() => {
  const opportunityId =
    new URLSearchParams(window.location.search).get('id');

  if (opportunityId) {
    load(opportunityId);
  }
}, [load]);

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        direction: 'rtl',
      }}
    >
   

      {/* Main Content */}
      <Box sx={{ maxWidth: 1200, mx: 'auto', px: { xs: 2, sm: 3 }, py: 4 }}>

        {/* Page Header */}
<Box sx={{ mb: 4 }}>
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
      
      gap: 2,
      mb: 0.5,
      flexDirection: 'row-reverse',
      justifyContent: 'flex-start',
    }}
  >
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: 2,
                bgcolor: 'primary.light',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <GroupsIcon sx={{ fontSize: 26, color: 'primary.main' }} />
            </Box>
            <Box>
              <Typography
                variant="h4"
                component="h1"
                sx={{
                        textAlign: 'right',
                  color: 'text.primary',
                  fontSize: { xs: '1.6rem', sm: '2rem' },
                  lineHeight: 1.2,
                }}
              >
                צוות הפרויקט
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Search Card */}


        {/* Results */}
        {(hasData || isLoading || isError) && (
          <>

            <Divider sx={{ mb: 2.5 }} />
          </>
        )}

        {isError ? (
          <Paper
            elevation={0}
            sx={{
              border: '1px solid',
              borderColor: 'error.main',
              borderRadius: 2,
              bgcolor: 'error.light',
              overflow: 'hidden',
            }}
          >
            <ErrorState message={error || undefined} onRetry={retry} />
          </Paper>
        ) : (
          <Paper
            elevation={0}
            sx={{
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              bgcolor: 'white',
              overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(29,45,62,0.06)',
              minHeight: isLoading || hasData ? 200 : 'auto',
            }}
          >
            <ProjectTeamTable rows={data} loading={isLoading} />
          </Paper>
        )}

        {/* Footer */}
       <Box
  sx={{
    mt: 4,
    textAlign: 'right',
    display: 'flex',
    justifyContent: 'flex-end',
  }}
>

        </Box>
      </Box>
    </Box>
  );
};

export default App;
