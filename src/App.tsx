import React from 'react';
import './App.css';
import { ProjectSection } from './ProjectSection';
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
function App() {
  return (
    <div className="app">
      <h1>
        Lucas Driscoll's Portfolio
      </h1>
      <h2>
        A collection of my past projects
      </h2>
      <Container>
        <Row className="pb-3">
          <Col>
            <ProjectSection name="test" description='test description' projects=
            {
                [
                  {
                    name: "test",
                    description: "test description",
                    url: "https://github.com/Lukerd-29-00/Portfolio",
                    demo_url: "https://lukerd-29-00.github.io/Checkers/",
                    logo: "favicon.ico"
                  },
                  {
                    name: "test2",
                    description: "test description",
                    url: "https://github.com/Lukerd-29-00/Portfolio",
                    demo_url: "https://lukerd-29-00.github.io/Checkers/",
                    logo: "favicon.ico"
                  },
                  {
                    name: "test3",
                    description: "test description",
                    url: "https://github.com/Lukerd-29-00/Portfolio",
                    demo_url: "https://lukerd-29-00.github.io/Checkers/",
                    logo: "favicon.ico"
                  }

                ]
              }
            />
          </Col>
        </Row>
        <Row className="pb-3">
          <Col>
            <ProjectSection name="test2" description='test description' projects=
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
          </Col>
        </Row>
        
        
      </Container>
    </div>
  );
}

export default App;
