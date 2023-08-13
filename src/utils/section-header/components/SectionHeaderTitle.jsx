import useMediaQuery from "../../../hooks/useMediaQuery";
import Title from "../../title/Title";


const SectionHeaderTitle = (props) => {
  const isNonMobile = useMediaQuery("(min-width:900px)");

  const titleStyle = {
    maxWidth: `${isNonMobile ? "429px" : ""}`,
  };

  return (
    <>
      <Title
        text={props.titleText}
        textColor="#EB8145"
        style={{ ...titleStyle }}
        animatable={true}
        cName=""
        children=""
      />
    </>
  );
};

export default SectionHeaderTitle;
