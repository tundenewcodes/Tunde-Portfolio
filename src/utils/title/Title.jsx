import styled from "styled-components";
import "./Title.css";



const TitleComponent = styled.h1`

`;


function Title({
  textColor,
  text,
  style,
  cName,
  children,
  animatable,
  click,
}) {

  return (
    <TitleComponent
      data-aos={animatable ? `fade-up` : ``}
      data-aos-once="true"
      className={`title ${cName}`}
      style={{
        color: textColor,
        cursor: click ? "pointer" : "default",
        ...style
      }}
      onClick={click}
    >
      {children ? children : null}
      {text ? text : null}
    </TitleComponent>
  );
}

export default Title;