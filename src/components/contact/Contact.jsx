import { Col, Container, Row } from "react-bootstrap";

import FormComponent from "./Form";
import Title from "../../utils/title/Title";
import { Colors } from "../../utils/colors/colors";
import P from "../../utils/p/P";
import IconDiv from "../Home/Icons";
const Contact = () => {
  const { successColor, whiteColor } = Colors();
  return (
    <>
      <section className="" id="contact">
        <Container className="contact">
          <div className="d-flex flex-column justify-content-center align-items-center py-5 ">
            <Title
              textColor={successColor}
              text={"Contact Me "}
              animatable={true}
              style={{}}
            />
            <P
              textColor={whiteColor}
              text={"You can react out to me via any of these media "}
              animatable={true}
              style={{}}
            />
            <IconDiv showFollow={false} />
          </div>

          <Row
            className=" w-100 d-flex align-items-center justify-content-center "
            style={{
              height: "100%",
            }}
          >
            <Col
              xs={{ span: 12, order: 1 }}
              md={{ span: 6, order: 1 }}
              lg={{ span: 6, order: 1 }}
            >
              <div
                style={{
                  height: "500px",
                  width: "100%",
                  backgroundImage: `url(https://i.ibb.co/F3hq3xd/contact.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundColor: "",
                }}
              ></div>
            </Col>

            <Col
              xs={{ span: 12, order: 2 }}
              md={{ span: 6, order: 2 }}
              lg={{ span: 6, order: 2 }}
              className="border border-danger" 
            >
              <div style={{
                width:"90%"
              }}>
<FormComponent />
              </div>
              
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Contact;
