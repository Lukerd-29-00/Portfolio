import Card from "react-bootstrap/Card"
import Image from "react-bootstrap/Image"
import "./ProjectCard.css"
import { ProjectSection } from "./ProjectSection"
export interface ProjectCardProps{
    name: string,
    description: string
    url: string,
    logo?: string,
    demo_url?: string
}

export function ProjectCard(props: ProjectCardProps): JSX.Element{
    return <Card>
        <Card.Title>
            {props.name}
        </Card.Title>
        <Card.Body id={props.demo_url !== undefined ? "link" : undefined}onClick = {props.demo_url !== undefined ? () => { window.open(props.demo_url)} : undefined}>
            {props.logo !== undefined ? <Image src={props.logo}/> : props.demo_url !== undefined ? <iframe  src={props.url} onClick={() => {window.open(props.demo_url)}}/> : <Image src="https://avatars.githubusercontent.com/u/53152087?v=4"/>}
        </Card.Body>
        <Card.Footer>
            {props.description}
            <br/>
            <a href={props.url}>Source code</a>
        </Card.Footer>
    </Card>
}