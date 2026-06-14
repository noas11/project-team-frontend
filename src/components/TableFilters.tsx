import React from 'react';
import {
  Box,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputAdornment,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export const ROLE_OPTIONS = [
  'כל התפקידים',
  'מנהל תכנון',
  'מפקח',
  'עו"ד בעלים',
  'עו"ד יזם',
  'עו"ד משפטי',
  'שמאי בעלים',
  'שמאי יזם',
  'אדריכל',
  'יועץ ביטוח',
  'יועץ מס',
  'מחתים',
  'מנהל פרויקטים',
];

interface Props {
  nameSearch: string;
  onNameSearch: (v: string) => void;
  roleFilter: string;
  onRoleFilter: (v: string) => void;
}

const TableFilters: React.FC<Props> = ({
  nameSearch,
  onNameSearch,
  roleFilter,
  onRoleFilter,
}) => {
  return (
<Box
  sx={{
    display: 'flex',
    gap: 2,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'flex-end',
    direction: 'rtl',
  }}
>
<TextField
  inputProps={{
    style: {
      textAlign: 'right',
    },
  }}
        placeholder="חפש עובד"
        size="small"
        value={nameSearch}
        onChange={(e) => onNameSearch(e.target.value)}
        sx={{ minWidth: 220 }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={{ fontSize: 18, color: 'text.secondary' }} />
            </InputAdornment>
          ),
        }}
      />

      <FormControl sx={{ minWidth: 220 }}>
<Select
  value={roleFilter}
  displayEmpty
  onChange={(e) => onRoleFilter(e.target.value)}
  size="small"
  sx={{
    backgroundColor: '#fff',

    '& .MuiSelect-select': {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
  }}
>
  {ROLE_OPTIONS.map((role) => (
    <MenuItem key={role} value={role}>
      {role}
    </MenuItem>
  ))}
</Select>
      </FormControl>
    </Box>
  );
};

export default TableFilters;