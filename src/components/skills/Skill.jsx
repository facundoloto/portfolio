import { useTranslation } from "react-i18next";
import skillStyles from "./skils.module.css";
import skill from '../../Data/skill'; // Importa el archivo JSON
import Carousel from "react-multi-carousel";
import { Col, Container, Row } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

export default function Skill({ typeFade, duration }) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };
    const { t, i18n } = useTranslation("customNavbar");

    return (
        <>
            <div data-aos={typeFade} data-aos-duration={duration}>
                <div className={skillStyles.containSkill} >
                    <Container>
                        <h1 className="text-center" id="skill">{t("translations.skill")}</h1>
                        {/* Row */}
                        <Row>
                            {/* Col */}
                            <Col>
                                {/* Skills Carousel */}
                                <Carousel
                                    responsive={responsive}
                                    infinite={true}
                                    className={skillStyles.skillSlider}
                                >
                                    {
                                        skill.map((item, index) => (

                                            <div className={skillStyles.skillItem} key={index}>
                                                <img src={item.image} alt="" />
                                                <h5>{item.title}</h5>
                                            </div>
                                        ))
                                    }
                                </Carousel>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </>
    )
};