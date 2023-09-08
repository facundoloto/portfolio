import { lazy } from "react";
import { useTranslation } from "react-i18next";
import headerImg from "./../../assets/header-img.svg";
import headerStyle from "./header.module.css";
const NavBar = lazy(() => import("../navbar/NavBar"));

export default function Header() {
  const { t, i18n } = useTranslation("header");
  return (
    <>
      <div className={headerStyle.bg} >
        <NavBar />
        <div className={headerStyle.mainContain + " " + "animate__fadeIn"} data-aos="fade-down" data-aos-duration="1500">
          <div className={headerStyle.heroImg} >
            <img src={headerImg} alt="herosection" />
          </div>
          <div className={headerStyle.mainAbout}>
            <div className={headerStyle.title}>
              <h1>{t("translations.title")}</h1>
              <h4>{t("translations.titleTwo")}</h4>
              <h4>{t("translations.titleThree")}</h4>
              <div>
                <a href="https://github.com/facundoloto" target="blank" className="text-dark" ><img src="src/assets/image/icons8-github-2-50.png" /></a>
                <a href="mailto:lotofacundo6@gmail.com" target="blank" className="text-dark"><img src="src/assets/image/icons8-google-plus-50.png" /></a>
                <a href='www.linkedin.com/in/facundo-loto-496384177' target="blank" className="text-dark"><img src="src/assets/image/icons8-linkedin-rodeado-de-círculo-50.png" /></a>
              </div>
            </div>



          </div>
        </div>
        <div className={headerStyle.scrollBtn}>
          <button><a href="#about" ><img src="src/assets/image/button-scroll.png" id="scroll" /></a></button>
        </div>
      </div>

    </>
  );
}
