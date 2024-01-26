import React, {useEffect, useState} from 'react';
import './App.css';
import { ProjectSection, ProjectSectionProps } from './ProjectSection';
import { ProjectCardProps } from './ProjectCard';
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Spinner from "react-bootstrap/Spinner"
import Joi from "joi"
const schema = Joi.array<ProjectSectionProps[]>().items(Joi.object<ProjectSectionProps>({
  name: Joi.string().required(),
  description: Joi.string().required(),
  projects: Joi.array<ProjectCardProps[]>().items(Joi.object<ProjectCardProps>({
    name: Joi.string().required(),
    description: Joi.string().required(),
    url: Joi.string().required(),
    logo: Joi.string(),
    demo_url: Joi.string()
  }))
}))

function App() {

  const [projects, setProjects] = useState<null|ProjectSectionProps[]>(null)

  useEffect(() => {
    let setState = true
    fetch("/projects.json").then(r => {
      r.json().then((js: unknown) => {
        if(setState){
          const project = schema.validate(js)
          if(project.error){
            alert(project.error)
          }else{
            setProjects(project.value)
          }
        }
      })
    })
    return () => {
      setState = false
    }
  },[])

  return (
    <div className="app">
      <h1>
        Lucas Driscoll's Portfolio
      </h1>
      <h2>
        A collection of my past projects
      </h2>
      {
        projects === null ? 
        <Spinner animation="border"/>
        :
        <Container>
          {projects.map((project) => {
            return <Row className = "pb-3" key={project.name}>
              <Col>
                <ProjectSection {...project}/>
              </Col>
            </Row>
          })}
      </Container>
      }
    </div>
  );
}

export default App;
