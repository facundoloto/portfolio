import React from "react";
import Card from 'react-bootstrap/Card';
import resumeStyle from "./resume.module.css";

function ProjectsCard({ title, place, date, resume }) {
    return (
        <>
            <Card className={resumeStyle.cardResume}>
                <Card.Header>{title}</Card.Header>
                <Card.Body>
                    <Card.Title>{place}</Card.Title>
                    <Card.Text>{date}</Card.Text>
                    <Card.Text>{resume}</Card.Text>
                </Card.Body>
            </Card>
            <br />
        </>
    );
}

export default ProjectsCard;
