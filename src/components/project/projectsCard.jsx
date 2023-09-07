import React from "react";
import { Col } from "react-bootstrap";
import projectStyle from "./project.module.css";

function ProjectsCard({ title, description, img, link }) {
    return (
        <>
            <Col sm={6} md={4}>
                <div className={projectStyle.projectImageBox}>
                    <img src={img} alt="project" />
                    <div className={projectStyle.text}>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <a href={link} target="_blank"><button type="button" class="btn btn-sm btn-secondary">View</button></a>
                    </div>
                </div>
            </Col>
        </>
    );
}

export default ProjectsCard;
