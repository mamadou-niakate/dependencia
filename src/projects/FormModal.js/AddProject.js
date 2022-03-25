import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useAppState } from '../../AppWrapper/AppWrapper';
import { Search } from '../../shared/SearchUserRepositories';
import RepositoriesList from '../RepositoriesList';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '50%',
  overflow: 'auto',
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 4,
  p: 4,
};

export default function AddRepositoryModal() {
  const { state:{ modal, selectedProjects, projects, loadedProjects }, dispatch } = useAppState();
  const handleClose = () => {
    dispatch({ type: 'SET_OPEN_MODAL', payload: { openModal: false } });
    dispatch({ type: 'SET_LOADED_PROJECTS', payload: []});
  };

  const handleSelectedReposValidation = () => {
    dispatch({ type: 'SET_PROJECTS', payload: [...projects, ...selectedProjects] });
  }

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={modal.openModal}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modal.openModal}>
          <Box sx={style}>
            {modal.importType.includes('device') || (
              <Search />
            )}
            <RepositoriesList />

            {/** Show Validate button only if there is data loaded from API */}
            {loadedProjects.length > 0 && (
              <Button 
                onClick={handleSelectedReposValidation}
                variant='outlined' 
                fullWidth
              >
                Validate
              </Button>
            )}
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
