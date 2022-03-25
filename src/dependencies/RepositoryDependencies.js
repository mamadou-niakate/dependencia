import axios from 'axios';
import React, { useCallback, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DependencyCard } from './DependencyCard';

const RepositoryDependencies = () => {
  const { reponame } = useParams();
  const [dependencies, setDependencies] = React.useState([]);
  
  
  const getRepoDependencies = useCallback(async () => {
    try {
      const repoDependencies = await axios.get(`https://raw.githubusercontent.com/mamadou-niakate/${reponame}/main/package.json`);
      if(!!repoDependencies.data.dependencies) {
        // Get all dependencies of the repo
        const dependencies = Object.entries(repoDependencies.data.dependencies);

        // loop through dependencies
        dependencies.forEach(async (dependency) => {
          const [dependencyName, dependencyVersion] = dependency;

          // Get the dependency version from the npm registry
          // const dependencyNPMPackage = await axios.get(`https://registry.npmjs.org/${dependencyName}`, {
            const dependencyNPMPackage = await axios.get(`https://registry.npmjs.org/nodemon`, {
            headers: {
              'Accept': 'application/vnd.npm.install-v1+json; q=1.0, application/json; q=0.8, */*; q=0.1',
              'Access-Control-Allow-Origin': '*',
            }
          });

          // create a new object with repo dependency and npm registry dependency
          const bothDependencies = {
            repoDepencency: { dependencyName, dependencyVersion },
            npmPackage: dependencyNPMPackage.data,
          }

          // add the new object to the dependencies array
          setDependencies(prevDependencies => [...prevDependencies, bothDependencies]);
        })
      }
      setDependencies(Object.entries(repoDependencies.data.dependencies));
    } catch (error) {
      console.log(error);
    }
  },[reponame])

  useEffect(() => {
    getRepoDependencies();
  },[getRepoDependencies])

  return (
    <div>
      {dependencies?.map((dependency) => {
        return (
          <>
            <DependencyCard dependency={dependency.repoDepencency} />
            <DependencyCard dependency={dependency.npmPackage} />
          </>
        )
      })} 
    </div>
  )
}

export default RepositoryDependencies