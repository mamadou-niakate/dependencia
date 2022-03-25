import './App.css';
import { ContextProvider } from './AppWrapper/AppWrapper';
import Projects from './projects/Projects';
import { Routes, Route } from 'react-router-dom'
import RepositoryDependencies from './dependencies/RepositoryDependencies';
import { Container, Typography } from '@mui/material';
function App() {
  return (
    <ContextProvider>
      <Container>
        <Routes>
          <Route path="repos" element={<Projects />} />
          <Route path="repos/:reponame" element={<RepositoryDependencies />} />
          <Route path="*" element={<Typography>404</Typography>} />
        </Routes>
      </Container>
    </ContextProvider>
  );
}

export default App;
