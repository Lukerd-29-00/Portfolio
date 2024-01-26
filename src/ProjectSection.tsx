import { ProjectCard, ProjectCardProps } from "./ProjectCard"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Collapse from "react-bootstrap/Collapse"
import Button from "react-bootstrap/Button"
import { useState } from "react"

export interface ProjectSectionProps{
    name: string,
    description: string,
    projects: ProjectCardProps[]
}

export function ProjectSection(props: ProjectSectionProps): JSX.Element{
    const [open, setOpen] = useState<boolean>(false)

    return <Container className="border">
        <Row>
            <Col>
                {props.name}
            </Col>
            <Col>
                <Button onClick={() => {setOpen(!open)}}></Button>

            </Col>
        </Row>
        <Row>
          <Collapse in={open}>
            <div>{props.description}</div>
          </Collapse>
        </Row>
        <Row>
            <Collapse in={open}>
                <div>
                    {props.projects.map(p => {
                        return <ProjectCard key={p.name} name={p.name} description={p.name} url={p.url} demo_url={p.demo_url} logo={p.logo}/>
                    })}
                </div>
            </Collapse>
        </Row>
    </Container>

    
}