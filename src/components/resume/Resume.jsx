import { useTranslation } from "react-i18next";
import resumeStyles from "./resume.module.css";
import ResumeCard from "./resumeCard";

export default function Resume({ typeFade, duration }) {
    const { t, i18n } = useTranslation("resume");
    const resume = [
        {
            title: t("translations.titleTwo"),
            place: t("translations.placeTwo"),
            date: t("translations.dateTwo"),
            resume: t("translations.resumeTwo")
        },
        {
            title: t("translations.titleOne"),
            place: t("translations.placeOne"),
            date: t("translations.dateOne"),
            resume: t("translations.resumeOne")
        },
    ];

    return (
        <>
            <div data-aos={typeFade} data-aos-duration={duration}>
                <div className={resumeStyles.containerResume}>
                    <div className={resumeStyles.mainResume}>
                        <h1 className="text-center" id="resume">{t("translations.title")}</h1>
                        {
                            resume.map((resume, index) => {
                                return <ResumeCard key={index} {...resume} />;
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    )
};