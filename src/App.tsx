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

interface KeyedProjectSectionProps extends ProjectSectionProps{
  id: string

}

interface RawProjectCardProps{
  name: string,
  description: string
  url: string,
  logo?: string,
  demo_url?: string
  date: Date
}

const schema = Joi.array<ProjectSectionProps[]>().items(Joi.object<ProjectSectionProps>({
  name: Joi.string().required(),
  description: Joi.string().required(),
  projects: Joi.array<RawProjectCardProps[]>().items(Joi.object<RawProjectCardProps>({
    name: Joi.string().required(),
    description: Joi.string().required(),
    url: Joi.string().required(),
    date: Joi.string().isoDate().required(),
    logo: Joi.string(),
    demo_url: Joi.string()
  }))
}))

function App() {

  const [projects, setProjects] = useState<null|KeyedProjectSectionProps[]>(null)

  useEffect(() => {
    let setState = true
    fetch("/projects.json").then(r => {
      r.json().then((js: unknown) => {
        if(setState){
          const project = schema.validate(js)
          if(project.error){
            alert(project.error)
          }else{
            const projects_list = project.value.map(proj => {
              let output = {id: crypto.randomUUID(),...proj}
              output.projects = output.projects.map(pr => {
                let new_pr: any = {...pr}
                new_pr.date = new Date(pr.date)
                return new_pr
              })
              return output
            })
            setProjects(projects_list)
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
      <h1 className="header">
        Lucas Driscoll's Portfolio
      </h1>
      <h2 className="header">
        A collection of my past projects
      </h2>
      {
        projects === null ? 
        <Spinner animation="border"/>
        :
        <Container>
          {projects.map((project) => {
            return <Row className = "pb-3" key={project.id}>
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
