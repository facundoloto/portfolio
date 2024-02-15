import ReactPlayer from 'react-player';
import { useTranslation } from "react-i18next";
import es from './../../assets/video/me_es.mp4';
import eng from './../../assets/video/me_eng.mp4';

const VideoPlayer = () => {
    // const videoUrl = './src/assets/video/me_';
    const { t, i18n } = useTranslation("about");

    return (
        <div>
            <ReactPlayer
                url={t("translations.video") == "eng" ? eng : es}
                width="100%"
                height="100%"
                controls
            />
        </div>
    );
}

export default VideoPlayer;
