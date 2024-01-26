import { ProjectCard, ProjectCardProps } from "./ProjectCard"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Collapse from "react-bootstrap/Collapse"
import Button from "react-bootstrap/Button"
import { useState } from "react"
import "./ProjectSection.css"
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
            <Col id="last">
                <button className="dropdown-toggle btn btn-light" onClick={() => {setOpen(!open)}}></button>

            </Col>
        </Row>
        <Row>
            <Col>
                <Collapse in={open}>
                    <div>{props.description}</div>
                </Collapse>
            </Col>
        </Row>

        <Collapse in={open}>
            <Container>
                {props.projects.map(p => {
                    return <Row className="pb-2 pt-2" key={p.name}>
                        <Col>
                            <ProjectCard {...p}/>
                        </Col>
                    </Row>
                })}
            </Container>
        </Collapse>
    </Container>
    
}