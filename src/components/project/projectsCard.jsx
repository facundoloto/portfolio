import { MDBIcon } from 'mdb-react-ui-kit';
import "./project.css";

function ProjectsCard({ title, description, img, link, repoFront, repoBack }) {
    return (
        <>
            <div className="card text-center bg-dark">
                <div className="overflow">
                    <img src={img} alt="a wallpaper" className="card-img-top" />
                </div>
                <div className="card-body text-light">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text text-warning">
                        {description}
                    </p>
                    <a
                        href={link ? link : "#!"}
                        target="_blank"
                        className="btn btn-outline-info border-0"
                        rel="noreferrer"
                    >
                        Go to {title}
                    </a>
                    {
                    repoFront &&

                    <a
                        href={repoFront}
                        target="_blank"
                        className="btn btn-secondary border-0"
                        rel="noreferrer"
                    >
                        Front-End <MDBIcon fab icon="github" />
                    </a>
                    }

                    {repoBack &&
                        <a
                            href={repoBack ? repoBack : "#!"}
                            target="_blank"
                            className="btn btn-primary border-0"
                            rel="noreferrer"
                        >
                            Back-End <MDBIcon fab icon="github" />
                        </a>
                    }
                </div>
            </div>
        </>
    );
}

export default ProjectsCard;
