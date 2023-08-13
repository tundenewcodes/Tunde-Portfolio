import styled from "styled-components";
import "./P.css";


const PComponent = styled.p`

`;

function P({
  textColor,
  text,
  style,
  cName,
  children,
  animatable,
  click,
}) {


  return (
    <PComponent
      data-aos={animatable ? `fade-up` : ``}
      data-aos-once="true"
      className={`p ${cName}`}
      style={{
        color: textColor,
        cursor: click ? "pointer" : "default",
        ...style
      }}
      onClick={click}
    >
      {children ? children : null}
      {text ? text : null}
    </PComponent>
  );
}

export default P;