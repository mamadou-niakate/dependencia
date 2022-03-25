import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Paper, TextField } from '@mui/material';
import { useAppState } from './AppWrapper/AppWrapper';
import AddRepositoryModal from './projects/FormModal.js/AddProject';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const selections = [
  'Import from your device', 
  'Import from GitHub', 
  'Import from GitLab'
];

export default function SearchAppBar() {
  const { state:{ modal }, dispatch } = useAppState();

  const handleChange = (event) => {
    if(event.target.value) {
      dispatch({ type: 'SET_OPEN_MODAL', payload: { openModal: true, importType: event.target.value }});
    }
  };

  return (
    <Box sx={{ display:'flex',justifyContent:'space-between', mt:1 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <TextField
            id="standard-select-currency-native"
            select
            label="Import"
            onChange={handleChange}
            SelectProps={{
              native: true,
            }}
            variant="standard"
          >
            <option value={undefined}> {undefined}</option>
            {selections.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </TextField>
         {modal.openModal && (
           <AddRepositoryModal />
         )}
    </Box>
  );
}