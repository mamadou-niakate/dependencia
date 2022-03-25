import { 
    ADD_PROJECT, 
    SET_PROJECTS,
    SET_OPEN_MODAL, 
    SET_USER_VERSIONING_PLATFORM_USERNAME,
    SET_LOADED_PROJECTS,
    SET_SELECTED_PROJECTS
} from './actionTypes';

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_PROJECT:
            const { projects } = state;
            const newProjects = [...projects, action.payload];
            return {
                ...state,
                projects: newProjects
            };
        case SET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            };
        case SET_USER_VERSIONING_PLATFORM_USERNAME:
            return {
                ...state,
                userVersioningPlatformUsername: action.payload
            };
        case SET_OPEN_MODAL:
            return {
                ...state,
                modal: {...state.modal, ...action.payload}
            };
        case SET_LOADED_PROJECTS:
            return {
                ...state,
                loadedProjects: action.payload
            };
        case SET_SELECTED_PROJECTS:
            return {
                ...state,
                selectedProjects: action.payload
            };

        default:
            return state;
    }
}