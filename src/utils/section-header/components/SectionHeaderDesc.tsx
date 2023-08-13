import SubTitle from "../../subtitle/SubTitle";

type Props = {
  descText: string;
  textColor: string;
  style: {};
  cName?: string;
};

const SectionHeaderDesc = (props: Props) => {


  const subtitleStyle = {
    fontFamily: "Nunito",
    fontWeight: 400,
    fontSize: "18px",
    lineHeight: "140%",
  };


  return (
<div
className="header-desc"
>

<SubTitle

animatable={true}
textColor={"#BABAC8"}
text={props.descText}



  style={{ ...subtitleStyle, textAlign: "flex-start" }}
  cName="my-2"
  children=""
/>
</div>
  );
};

export default SectionHeaderDesc;
