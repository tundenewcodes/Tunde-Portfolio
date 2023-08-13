import Button from "react-bootstrap/Button";
import { Colors } from "../colors/colors";

import "./ButtonComponent.css";


const ButtonComponent = ({
  text,
  hasLine,
  style,
  click,
  isLoading,
  buttonType,
  cName,
  animatable,
  Icon,
}) => {
  const { primaryColor, whiteColor, blackColor, successColor } = Colors();

  return (
    <>
      <Button
        data-aos={animatable ? `fade-up` : ``}
        data-aos-once="true"
        className={`button ${
          buttonType === "PRIMARY"
            ? "btn-primary primary-button"
            : buttonType === "SECONDARY"
            ? "btn-secondary secondary-button"
            : buttonType === "TERTIARY"
            ? "btn-tertiary tertiary-button"
            : ""
        } ${cName && cName}`}
        bsPrefix="btn"
        onClick={click}
        style={{
          ...style,
          backgroundColor:
            buttonType === "PRIMARY"
              ? primaryColor
              : buttonType === "SECONDARY"
              ? whiteColor
              : buttonType === "TERTIARY"
              ? successColor
              : primaryColor,
          color:
            buttonType === "PRIMARY"
              ? whiteColor
              : buttonType === "SECONDARY"
              ? primaryColor
              : buttonType === "TERTIARY"
              ? blackColor
              : whiteColor,
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          padding: "12px 24px",
          gap: "10px",
          height: "44px",
          borderRadius: "20px",
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor:
            buttonType === "PRIMARY"
              ? primaryColor
              : buttonType === "SECONDARY"
              ? primaryColor
              : buttonType === "TERTIARY"
              ? blackColor
              : whiteColor,
          flex: "none",
          order: 2,
          flexGrow: 0,
          cursor: "pointer",
          fontSize: "1.2rem",
          fontFamily: "Poppins",
          fontWeight: "500",
          outline: "none",
        }}
        disabled={isLoading}
      >
        {hasLine && Icon}

        {text}
      </Button>
    </>
  );
};

export default ButtonComponent;
