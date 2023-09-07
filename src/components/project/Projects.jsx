import { useTranslation } from "react-i18next";
import { Col, Container, Row, Tab } from "react-bootstrap";
// Project Image
import rickAndMorty from "./../../assets/image/rym.jpeg";
import pokemon from "./../../assets/image/pokeapi.jpg";
import bitcoin from "./../../assets/image/bitcoin.png";
import ProjectsCard from "./ProjectsCard";
import projectStyle from "./project.module.css";


export default function Projects() {
    const { t, i18n } = useTranslation("portfolio");

    const projects = [
        {
            title: "CryptoTable",
            description: "web where you can see price about crypto coins",
            img: bitcoin,
            link: "https://cute-daifuku-0bc243.netlify.app/"
        },
        {
            title: "Rick And Morty",
            description: "This an app web with information about characters from the serie rick and morty",
            img: rickAndMorty,
            link: "https://fluffy-rickandmorty-0980c7.netlify.app/"
        },
        {
            title: "PokeApi",
            description: t("translations.pokeApi"),
            img: pokemon,
            link: "https://inquisitive-queijadas-fd80a3.netlify.app/"
        }
    ];

    // Return JSX
    return (
        <div className={projectStyle.containerProject}>
            <section className={projectStyle.projects} id="portfolio">
                <Container>
                    <Row>
                        <Col>
                            <h1>{t("translations.title")}</h1>
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

