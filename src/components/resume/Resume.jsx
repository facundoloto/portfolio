import { useTranslation } from "react-i18next";
import resumeStyles from "./resume.module.css";
import Card from 'react-bootstrap/Card';

export default function Resume() {
    const { t, i18n } = useTranslation("resume");

    return (
        <>
            <div className={resumeStyles.containerResume}>
                <div className={resumeStyles.mainResume}>
                    <h1 className="text-center" id="resume">{t("translations.title")}</h1>

                    <Card border="info" className={resumeStyles.cardResume}>
                        <Card.Header>{t("translations.titleTwo")}</Card.Header>
                        <Card.Body>
                            <Card.Title>{t("translations.placeTwo")}</Card.Title>
                            <Card.Text>{t("translations.dateTwo")}</Card.Text>
                            <Card.Text>{t("translations.resumeTwo")}</Card.Text>
                        </Card.Body>
                    </Card>
                    <br />
                    <Card border="info" className={resumeStyles.cardResume}>
                        <Card.Header>{t("translations.titleOne")}</Card.Header>
                        <Card.Body>
                            <Card.Title>{t("translations.placeOne")}</Card.Title>
                            <Card.Text>{t("translations.dateOne")}</Card.Text>
                            <Card.Text>{t("translations.resumeOne")}</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </>
    )
};