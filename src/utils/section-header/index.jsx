import { Container, Col, Row } from "react-bootstrap";
import SectionHeaderTitle from "./components/SectionHeaderTitle";
import SectionHeaderDesc from "./components/SectionHeaderDesc";
import useMediaQuery from "../../hooks/useMediaQuery";
import "./SectionHeader.css";




const SectionHeader = (props) => {
  const isNonMobile = useMediaQuery("(min-width:900px)");
  const titleStyle = {
    fontWeight: 800,
    lineHeight: "100%",
    letterSpacing: "-0.02em",
    maxWidth: `${isNonMobile ? "429px" : ""}`,
  };

  const subtitleStyle = {
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "140%",
  };

  return (

    <>
      <Container>
        <Row className="mb-5">
          <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 5 }}>
            <SectionHeaderTitle
              data-aos-once="true"
              data-aos="fade-up"
              titleText={props.titleText}
              textColor="#BABAC8"
              style={{ ...subtitleStyle, textAlign: "flex-start" }}
              cName="my-2"
            />
          </Col>

          <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 7 }}>
            <SectionHeaderDesc
              data-aos-once="true"
              data-aos="fade-up"
              descText={props.descText}
              textColor="#EB8145"
              style={{ ...titleStyle }}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SectionHeader;
