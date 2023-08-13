import { Col, Container, Row } from "react-bootstrap";
import P from "../../utils/p/P";
import Right from "../Home/Right";
import hire from "../../assets/images/decoration/hire.png";
import ButtonComponent from "../../utils/button/ButtonComponent";



import Left from "./Left";
const AboutMe = () => {
  return (
    <>
      <section  id="about"   >
        <Container >
          <Row
            className="d-flex align-items-center justify-content-center w-100 "
          
          >
            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
            >
              <Left />
            </Col>

            <Col
              xs={{ span: 12, order: 2 }}
              md={{ span: 6, order: 2 }}
              lg={{ span: 6, order: 2 }}
              className="d-none d-md-block "
              style={{
                
              }}
            >
              <Right bgImage={hire} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default AboutMe;
