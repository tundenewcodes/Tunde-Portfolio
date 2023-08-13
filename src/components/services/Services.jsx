import { Container, Row } from "react-bootstrap";

import "./Services.css";
import { services } from "./service";

import ServiceCard from "./ServiceCard";
import Title from "../../utils/title/Title";
import { Colors } from "../../utils/colors/colors";


const Services = () => {
  const { successColor, whiteColor } = Colors();
  return (
    <section className="services" id="services">
      <Container>
     
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Title
              textColor={successColor}
              text={"SERVICES"}
              animatable={true}
              style={{}}
            />
            <Title
              textColor={whiteColor}
              text={"Services i can render"}
              animatable={true}
              style={{}}
            />
          </div>

        <Row>
          <div
           className="serviceCardWrapper"
          >
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                iconImg={service.iconImg}
                serviceName={service.serviceName}
                cardBgImg={service.cardBgImg}
                briefing={service.briefing}
              />
            ))}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
