import { lazy } from "react";
import { useTranslation } from "react-i18next";
import headerStyle from "./header.module.css";

const NavBar = lazy(() => import("../navbar/NavBar"));

function header() {
  const { t, i18n } = useTranslation("about");
  return (
    <>
      <div className={headerStyle.bg}>
        <NavBar />
        <div className={headerStyle.mainContain}>
          <div className={headerStyle.mainAbout}>
            <h1>I'm facundo</h1>
            <p>{t("translations.aboutMe")}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default header;
