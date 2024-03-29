import { lazy } from "react";
import { useTranslation } from "react-i18next";
import code from "./../../assets/image/codeWars.png";
import git from "./../../assets/image/icons8-github-2-50.png";
import google from "./../../assets/image/icons8-google-plus-50.png";
import linkedin from "./../../assets/image/icons8-linkedin-rodeado-de-círculo-50.png";
import headerImg from "./../../assets/header-img.svg";
import headerStyle from "./header.module.css";
const NavBar = lazy(() => import("../navbar/NavBar"));

export default function Header({ typeFade, duration }) {
  const { t, i18n } = useTranslation("header");
  return (
    <>
      <div className={headerStyle.bg} >
        <NavBar />

        <div data-aos={typeFade} data-aos-duration={duration}>

          <div className={headerStyle.mainContain}>

            <div className={headerStyle.mainAbout}>
              <div className={headerStyle.title}>
                <h1>{t("translations.title")}</h1>
                <h4>{t("translations.titleTwo")}</h4>
                <h4>{t("translations.titleThree")}</h4>
                <div className={headerStyle.icons}>
                  <a href='https://www.codewars.com/users/facundoloto' target="blank" className="text-dark"><img src={code} /></a>
                  <a href="https://github.com/facundoloto" target="blank" className="text-dark" ><img src={git} /></a>
                  <a href="mailto:lotofacundo6@gmail.com" target="blank" className="text-dark"><img src={google} /></a>
                  <a href='https://www.linkedin.com/in/facundo-loto-496384177' target="blank" className="text-dark"><img src={linkedin} /></a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}
