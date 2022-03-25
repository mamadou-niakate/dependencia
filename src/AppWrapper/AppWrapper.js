import React, { createContext, useContext, useReducer } from 'react'; 
import { reducer } from './stateManager/reducer';

const AppContext = createContext();

const initialState = {
    projects: [],
    loadedProjects: [],
    versioningPlatformUserName: '',
    modal: {
       openModal: false, 
       importChoice: '',
    }
    
}

const ContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer,initialState);
    return (
        <AppContext.Provider value={{state, dispatch}}>
            { children }
        </AppContext.Provider>
    );
}

const useAppState = () => {
    const { state, dispatch } = useContext(AppContext) || {};
    return { state, dispatch };
}

export { ContextProvider, useAppState };

