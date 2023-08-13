import "./Home.css";
import bgImage from "../../assets/images/Programmer-pana.svg";
import { Col, Container, Row } from "react-bootstrap";

import Right from "./Right";

import Left from "./Left";

const Home = () => {
  return (
    <>
      <section className="" id="home" style={{}}>
        <Container
          className="intro-page my-5 py-5  border border-danger "
          style={{}}
        >
          <Row className="d-flex align-items-center justify-content-center w-100 ">
            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
              style={{ marginBottom: "50px", padding: "20px" }}
            >
              <Left />
            </Col>

            <Col
              xs={{ span: 12, order: 2 }}
              md={{ span: 6, order: 2 }}
              lg={{ span: 6, order: 2 }}
              className="d-flex align-items-center justify-content-center"
            >
              <Right bgImage={bgImage} />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
