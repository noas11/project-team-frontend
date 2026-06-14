import React, { useMemo, useState } from 'react';
import { Box } from '@mui/material';
import {
  DataGrid,
  GridColDef,
  GridSortModel,
} from '@mui/x-data-grid';
import PhoneIcon from '@mui/icons-material/Phone';
import { ProjectTeamMember } from '../types';
import TableFilters from './TableFilters';
import EmptyState from './EmptyState';
import SkeletonLoader from './SkeletonLoader';

interface Props {
  rows: ProjectTeamMember[];
  loading: boolean;
}

const columns: GridColDef[] = [
  {
    field: 'mobile',
    headerName: 'טלפון',
    headerAlign: 'right',
    align: 'right',
    flex: 0.9,
    minWidth: 140,
    renderCell: (params) => {
      const phone = params.value as string;
      const isEmpty = !phone;

      return (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
width: '100%',
textAlign: 'right',
            gap: 0.75,
            height: '100%',
            color: isEmpty ? 'text.disabled' : 'primary.main',
            fontStyle: isEmpty ? 'italic' : 'normal',
          }}
        >
          {!isEmpty && <PhoneIcon sx={{ fontSize: 14 }} />}
          {isEmpty ? 'לא קיים' : phone}
        </Box>
      );
    },
  },
  {
    field: 'roleDescription',
    headerName: 'תפקיד',
    headerAlign: 'right',
    align: 'right',
    flex: 1.2,
    minWidth: 160,
    renderCell: (params) => (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
width: '100%',
textAlign: 'right',
          alignItems: 'center',
          height: '100%',
          color: 'text.secondary',
        }}
      >
        {params.value as string}
      </Box>
    ),
  },
  {
    field: 'name',
    headerName: 'שם',
    headerAlign: 'right',
    align: 'right',
    flex: 1.4,
    minWidth: 180,
    renderCell: (params) => (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
width: '100%',
textAlign: 'right',
          alignItems: 'center',
          height: '100%',
          fontWeight: 600,
          color: 'text.primary',
        }}
      >
        {params.value as string}
      </Box>
    ),
  },
];

const ProjectTeamTable: React.FC<Props> = ({ rows, loading }) => {
  const [nameSearch, setNameSearch] = useState('');
  const [roleFilter, setRoleFilter] = useState('כל התפקידים');
  const [sortModel, setSortModel] = useState<GridSortModel>([]);

  const filtered = useMemo(() => {
    return rows.filter((r) => {
      const matchesName = r.name
        .toLowerCase()
        .includes(nameSearch.toLowerCase());

      const matchesRole =
        roleFilter === 'כל התפקידים' ||
        r.roleDescription === roleFilter;

      return matchesName && matchesRole;
    });
  }, [rows, nameSearch, roleFilter]);

  if (loading) return <SkeletonLoader />;

  return (
    <Box>
      {rows.length > 0 && (
        <Box
          sx={{
            mt: 2,
            mb: 2.5,
            px: 2,
          }}
        >
          <TableFilters
            nameSearch={nameSearch}
            onNameSearch={setNameSearch}
            roleFilter={roleFilter}
            onRoleFilter={setRoleFilter}
          />
        </Box>
      )}

      {rows.length === 0 ? (
        <EmptyState filtered={false} />
      ) : filtered.length === 0 ? (
        <EmptyState filtered={true} />
      ) : (
        <Box
          sx={{
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 2px 8px rgba(29,45,62,0.06)',
          }}
        >
<DataGrid
  rows={filtered}
  columns={columns}
  hideFooter
  sortModel={sortModel}
  onSortModelChange={setSortModel}
  disableRowSelectionOnClick
  autoHeight
  sx={{
    border: 'none',
    fontFamily:
      '"Noto Sans Hebrew", "Segoe UI", Arial, sans-serif',
    direction: 'rtl',

    '& .MuiDataGrid-main': {
      direction: 'rtl',
    },

    '& .MuiDataGrid-columnHeaders': {
      bgcolor: '#f0f4f8',
      borderBottom: '2px solid',
      borderColor: 'primary.light',
      direction: 'rtl',
    },

    '& .MuiDataGrid-columnHeaderTitleContainer': {
      justifyContent: 'flex-start',
    },

    '& .MuiDataGrid-columnHeaderTitle': {
      fontWeight: 700,
      fontSize: '0.875rem',
      color: '#1d2d3e',
    },

    '& .MuiDataGrid-columnHeader': {
      '&:focus, &:focus-within': {
        outline: 'none',
      },
    },

    '& .MuiDataGrid-row': {
      direction: 'rtl',
      cursor: 'default',
      '&:hover': {
        bgcolor: 'primary.light',
      },
      '&:nth-of-type(even)': {
        bgcolor: '#fafbfd',
        '&:hover': {
          bgcolor: 'primary.light',
        },
      },
    },

    '& .MuiDataGrid-cell': {
      borderColor: 'divider',
      fontSize: '0.9rem',
      textAlign: 'right',
      '&:focus, &:focus-within': {
        outline: 'none',
      },
    },

    '& .MuiDataGrid-sortIcon': {
      color: 'primary.main',
    },
  }}
/>
        </Box>
      )}
    </Box>
  );
};

export default ProjectTeamTable;