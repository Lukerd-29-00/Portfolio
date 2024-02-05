import { ProjectCard, ProjectCardProps } from "./ProjectCard"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Collapse from "react-bootstrap/Collapse"
import Image from "react-bootstrap/Image"
import { useState} from "react"
import "./ProjectSection.css"

interface KeyedProjectCardProps extends ProjectCardProps{
    id: string
}

export interface ProjectSectionProps{
    name: string,
    description: string,
    projects: ProjectCardProps[]
}



export function ProjectSection(props: ProjectSectionProps): JSX.Element{
    const projects = useState<KeyedProjectCardProps[]>(() => {
        return props.projects.map(proj => {
            return {
                id: crypto.randomUUID(),
                ...proj
            }
        })
    })[0]
    const [open, setOpen] = useState<boolean>(false)

    return <Container className="border">
        <Row className="clickable" onClick={() => {setOpen(!open)}}>
            <Col>
                {props.name}
            </Col>
            <Col id="last">
                <Image style={{"maxHeight": "15px", "maxWidth": "15px"}} src="/arrow.png" className={open ? "horizontal rotating" : "horizontal"}/>
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
                {projects.map(p => {
                    return <Row className="pb-2 pt-2" key={p.id}>
                        <Col>
                            <ProjectCard {...p}/>
                        </Col>
                    </Row>
                })}
            </Container>
        </Collapse>
    </Container>
    
}