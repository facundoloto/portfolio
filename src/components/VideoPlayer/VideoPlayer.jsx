import ReactPlayer from 'react-player';
import { useTranslation } from "react-i18next";

const VideoPlayer = () => {
    const videoUrl = './src/assets/video/me_';
    const { t, i18n } = useTranslation("about");

    return (
        <div>
            <ReactPlayer
                url={videoUrl + t("translations.video") + ".mp4"}
                width="100%"
                height="100%"
                controls
            />
        </div>
    );
}

export default VideoPlayer;
