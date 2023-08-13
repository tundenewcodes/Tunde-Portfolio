
import P from "../../utils/p/P";

import styled from "styled-components";
import { Colors } from "../../utils/colors/colors";
import Title from "../../utils/title/Title";


const ServiceCard = ({ iconImg, serviceName, cardBgImg, briefing }) => {
  const { successColor, whiteColor } = Colors();
  return (
    <div
      className="my-services"
      style={{
        backgroundImage: cardBgImg,
        backgroundPosition: "bottom right",
      }}
    >
      <IconDiv>
        <img
          src={iconImg}
          alt={serviceName}
          style={{ height: "40px", width: "40px" }}
        />
      </IconDiv>
      <Title
        textColor={successColor}
        text={serviceName}
        animatable={true}
        style={{fontSize:"24px"}}
      />
      <P textColor={whiteColor} text={briefing} animatable={true} style={{}} />
    </div>
  );
};

export default ServiceCard;

const IconDiv = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(../../assets/images/slider.png);
  
`;
