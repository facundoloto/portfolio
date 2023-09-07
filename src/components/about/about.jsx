import { useTranslation } from "react-i18next";
import data from './../../Data/personaInformation.json'; // Importa el archivo JSON
import profile from "../../assets/image/profile1.jpg"
import aboutStyle from './about.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
export default function About() {
    const { t, i18n } = useTranslation("about");

    return (
        <div className={aboutStyle.containerAbout + " text-light"} data-aos="fade-right" data-aos-duration="1500">
            <h1 className="text-center" id="about">{t("translations.title")}</h1>

            <div className={aboutStyle.about} data-aos="fade-right" data-aos-duration="1500" >

                <div className={aboutStyle.profileAbout}>
                    <div className={aboutStyle.profileContent}>

                        <div className={aboutStyle.profilePicture}>
                            <img src={profile} />
                        </div>
                        <p className="text-center">
                            {t("translations.aboutMe")}
                        </p>
                        <div className={aboutStyle.profileInformation}>
                            <div className={aboutStyle.listOne}>
                                <ul>
                                    <li>{t("translations.location")}:{" " + data.information.location}</li>
                                    <li>{t("translations.age")}:{" " + data.information.age}</li>
                                    <li>{t("translations.interest")}:{" " + data.information.interest}</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    )
}