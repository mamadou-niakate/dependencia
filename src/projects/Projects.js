import { Box } from '@mui/material';
import axios from 'axios';
import React, { useCallback, useEffect } from 'react'
import { useAppState } from '../AppWrapper/AppWrapper';
import SearchAppBar from '../SearchBar';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const { state:{ projects }, dispatch } = useAppState();
    const getRepositories = useCallback(async () => {
        const repositories = await axios.get('https://api.github.com/users/mamadou-niakate/repos');
        dispatch({ type: 'SET_PROJECTS', payload: repositories.data });
    },[dispatch])
    useEffect(() => {
        // getRepositories()
    }, [getRepositories]); 

    return (
        <>
            <SearchAppBar />
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexWrap:'wrap'}}>
                {projects?.map(project => <ProjectCard key={project.id} project={project} />)}
            </Box>
        </>
    )
}

export default Projects