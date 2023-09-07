import { Col, Container, Row, Tab } from "react-bootstrap";

// Project Image
import img1 from "./../../assets/image/bitcoin.png";
import ProjectsCard from "./ProjectsCard";
import projectStyle from "./project.module.css";


export default function Projects() {
    const projects = [
        {
            title: "Portfolio",
            description: "This is my portfolio website",
            img: img1,
        },
        {
            title: "Portfolio",
            description: "This is my portfolio website",
            img: img1,
        },
        {
            title: "Portfolio",
            description: "This is my portfolio website",
            img: img1,
        },
        {
            title: "Portfolio",
            description: "This is my portfolio website",
            img: img1,
        },
        {
            title: "Portfolio",
            description: "This is my portfolio website",
            img: img1,
        },
        {
            title: "Portfolio",
            description: "This is my portfolio website",
            img: img1,
        },
    ];

    // Return JSX
    return (
        <div className={projectStyle.containerProject}>
            <section className={projectStyle.projects} id="portfolio">
                <Container>
                    <Row>
                        <Col>
                            <h2>Projects</h2>
                            <Row>
                                {projects.map((project, index) => {
                                    return <ProjectsCard key={index} {...project} />;
                                })}
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
}

