import { useTranslation } from "react-i18next";
import gorillaz from "./../../assets/image/gorillaz.jpg";
import instagram from "./../../assets/image/Instagram.jpg";
import rym from "./../../assets/image/rym.jpeg";
import pokemon from "./../../assets/image/pokeapi.jpg";
import foxy from './../../assets/image/foxy.png';
import java from "./../../assets/image/java.png"
import ProjectsCard from "./projectsCard";
import './project.css';

export default function Projects({ typeFade, duration }) {

    const { t, i18n } = useTranslation("portfolio");
    const projectsData = [
        {
            title: "Foxy(Catch Apples)",
            description: t("translations.foxy"),
            img: foxy,
            link: "https://exquisite-dragon-86b3ca.netlify.app/",
            repoFront: "",
            repoBack: "https://github.com/facundoloto/CatchApple",
        },
        {
            title: "Contacts Challenge React-Java",
            description: t("translations.contactFront"),
            img: java,
            link: "https://enchanting-froyo-dab782.netlify.app/auth/login",
            repoFront: "https://github.com/facundoloto/front-contact-challenge",
            repoBack: "https://github.com/facundoloto/contacts.git",
        },
        {
            title: "Instagram Demo",
            description: t("translations.instagram"),
            img: instagram,
            link: "https://instagrampyfi.netlify.app/",
            repoFront: "https://github.com/facundoloto/react-pyfi",
            repoBack: "https://github.com/facundoloto/pyfi.git",
        },
        {
            title: "Gorillaz-wiki",
            description: t("translations.gorillazWiki"),
            img: gorillaz,
            link: "https://coruscating-figolla-08b424.netlify.app/",
            repoFront: "https://cute-daifuku-0bc243.netlify.app/",
            repoBack: "https://github.com/facundoloto/api-gorillaz",
        },
        {
            title: "Rick And Morty",
            description: t("translations.rym"),
            img: rym,
            link: "https://fluffy-rickandmorty-0980c7.netlify.app/",
            repoFront: "https://github.com/facundoloto/rick-and-morty-react",
            repoBack: ""
        },
        {
            title: "PokeApi",
            description: t("translations.pokeApi"),
            img: pokemon,
            link: "https://inquisitive-queijadas-fd80a3.netlify.app/",
            repoFront: "https://github.com/facundoloto/poke-api-react",
            repoBack: ""
        }
    ];

    // Return JSX
    return (
        <>
            <div data-aos={typeFade} data-aos-duration={duration}>
                <h1 className="text-center" id="portfolio">{t("translations.title")}</h1>

                <div className="container d-flex justify-content-center align-items-center h-100">
                    <div className="row">
                        {
                            projectsData.map(({ title, description, img, link, repoFront, repoBack }, index) => (
                                <div className="col-md-4" key={index}>
                                    <ProjectsCard img={img} title={title} repoFront={repoFront} repoBack={repoBack} link={link} description={description} />
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    );
}

