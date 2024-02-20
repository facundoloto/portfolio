import "./project.css";

function ProjectsCard({ title, description, img, repo, link }) {
    return (
        <>
            <div className="card text-center bg-dark">
                <div className="overflow">
                    <img src={img} alt="a wallpaper" className="card-img-top" />
                </div>
                <div className="card-body text-light">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text text-secondary">
                        {description}
                    </p>
                    <a
                        href={link ? link : "#!"}
                        target="_blank"
                        className="btn btn-outline-secondary border-0"
                        rel="noreferrer"
                    >
                        Go to {title}
                    </a>
                    <a
                        href={repo}
                        target="_blank"
                        className="btn btn-outline-secondary border-0"
                        rel="noreferrer"
                    >
                        Go to github {title}
                    </a>
                </div>
            </div>
        </>
    );
}

export default ProjectsCard;
