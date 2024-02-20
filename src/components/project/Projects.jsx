import { useTranslation } from "react-i18next";
import gorillaz from "./../../assets/image/gorillaz.jpg";
import instagram from "./../../assets/image/Instagram.jpg";
import rym from "./../../assets/image/rym.jpeg";
import pokemon from "./../../assets/image/pokeapi.jpg";
import node from './../../assets/image/node.png';
import java from "./../../assets/image/java.png"
import ProjectsCard from "./projectsCard";
import './project.css';

export default function Projects({ typeFade, duration }) {

    const { t, i18n } = useTranslation("portfolio");
    const projectsFront = [
        {
            title: "Contacts Challenge React-Java",
            description: t("translations.contactFront"),
            img: java,
            link: "https://enchanting-froyo-dab782.netlify.app/auth/login",
            repo: "https://github.com/facundoloto/front-contact-challenge"
        },
        {
            title: "Instagram Demo",
            description: t("translations.instagram"),
            img: instagram,
            link: "https://instagrampyfi.netlify.app/",
            repo: "https://github.com/facundoloto/react-pyfi"
        },
        {
            title: "Gorillaz-wiki",
            description: t("translations.gorillazWiki"),
            img: gorillaz,
            link: "https://coruscating-figolla-08b424.netlify.app/",
            repo: "https://cute-daifuku-0bc243.netlify.app/"
        },
        {
            title: "Rick And Morty",
            description: t("translations.rym"),
            img: rym,
            link: "https://fluffy-rickandmorty-0980c7.netlify.app/",
            repo: "https://github.com/facundoloto/rick-and-morty-react",
        },
        {
            title: "PokeApi",
            description: t("translations.pokeApi"),
            img: pokemon,
            link: "https://inquisitive-queijadas-fd80a3.netlify.app/",
            repo: "https://github.com/facundoloto/poke-api-react"
        }
    ];

    const projectsBack = [
        {
            title: "Instagram-Demo",
            description: t("translations.instagramBack"),
            img: instagram,
            link: "",
            repo: "https://github.com/facundoloto/pyfi.git"
        },
        {
            title: "Contact",
            description: t("translations.contact"),
            img: java,
            link: "",
            repo: "https://github.com/facundoloto/contacts.git"
        },
        {
            title: "Gorillaz-wiki",
            description: t("translations.gorillazWikiBack"),
            img: gorillaz,
            link: "",
            repo: "https://github.com/facundoloto/api-gorillaz"
        },
        {
            title: "Alkemy-reto-back",
            description: t("translations.alkemyBack"),
            img: node,
            link: "",
            repo: "https://github.com/facundoloto/Alkemy-Back-end.git"
        },
    ];

    // Return JSX
    return (
        <>
            <div data-aos={typeFade} data-aos-duration={duration}>
                <h1 className="text-center" id="portfolio">{t("translations.title")}</h1>

                <div className="container d-flex justify-content-center align-items-center h-100">
                    <div className="row">
                        <h4 className="text-center">Fron-End</h4>

                        {projectsFront.map(({ title, description, img, link, repo }, index) => (
                            <div className="col-md-4" key={index}>
                                <ProjectsCard img={img} title={title} repo={repo} link={link} description={description} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="container d-flex justify-content-center align-items-center h-100">
                    <div className="row">
                        <h4 className="text-center">Back-End</h4>

                        {projectsBack.map(({ title, description, img, repo, link }, index) => (
                            <div className="col-md-4" key={index}>
                                <ProjectsCard img={img} title={title} repo={repo} link={link} description={description} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </>

    );
}

