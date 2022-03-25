import React, { useEffect, useState } from 'react'
import { Checkbox, FormControlLabel, List, ListItem, ListItemText } from '@mui/material'
import { useAppState } from '../AppWrapper/AppWrapper';

const RepositoriesList = () => {
    const { state:{ loadedProjects }, dispatch } = useAppState();
    const [selectedRepos, setSelectedRepos] = useState(loadedProjects)
    const handleChange = (event) => {
        // update local state by checking clicked repos checkboxes
        setSelectedRepos((state) => {
            const newState = state.map((repo) => {
                if (repo.name === event.target.name) {
                    repo.isSelected = event.target.checked
                }
                return repo
            })
            return [...newState]
        });

        // set selected repos in app state
        const onlySelectedRepos = selectedRepos.filter((repo) => repo.isSelected)
        dispatch({ type: 'SET_SELECTED_PROJECTS', payload: onlySelectedRepos })
    };

    useEffect(() => {
        setSelectedRepos(loadedProjects)
    }, [loadedProjects]);

    return (
        <List>
            {selectedRepos?.map(({id, name, isSelected}) => (
                <ListItem key={id} divider>
                    <FormControlLabel
                        control={
                            <Checkbox checked={isSelected} onChange={handleChange} name={name} />
                        }
                        label={<ListItemText primary={name} />}
                    />
                </ListItem>
            ))}
        </List>
    )
}

export default RepositoriesList