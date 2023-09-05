import { lazy } from "react";
import { useTranslation } from "react-i18next";
import headerStyle from "./header.module.css";

const NavBar = lazy(() => import("../navbar/NavBar"));

export default function Header() {
  const { t, i18n } = useTranslation("header");
  return (
    <>
      <div className={headerStyle.bg}>
        <NavBar />
        <div className={headerStyle.mainContain}>
          <div className={headerStyle.mainAbout}>
            <h1>{t("translations.title")}</h1>
            <h3>{t("translations.titleTwo")}</h3>
            <h3>{t("translations.titleThree")}</h3>
          </div>
        </div>
      </div>
    </>
  );
}
