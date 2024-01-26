import React from 'react';
import './App.css';
import { ProjectSection } from './ProjectSection';
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <>
      <ProjectSection name="test" description='test description' projects=
      {
          [
            {
              name: "test",
              description: "test description",
              url: "https://github.com/Lukerd-29-00/Portfolio",
              demo_url: "https://lukerd-29-00.github.io/Checkers/",
              logo: "favicon.ico"
            }
          ]
        }
      />
    </>
  );
}

export default App;
