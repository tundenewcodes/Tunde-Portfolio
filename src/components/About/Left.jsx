import { ButtonType } from "../../types/types";
import ButtonComponent from "../../utils/button/ButtonComponent";
import { Colors } from "../../utils/colors/colors";
import P from "../../utils/p/P";
import Title from "../../utils/title/Title";

const Left = () => {
  const { successColor, whiteColor } = Colors();
  return (
    <div
    
    >
      <Title
        textColor={whiteColor}
        text={"About Me"}
        animatable={true}
        style={{}}
      />
      <Title
        textColor={successColor}
        text={"Why you should have me in your team"}
        animatable={true}
        style={{}}
      />

      <P
        textColor={whiteColor}
        text={
          "I am a skilled and versatile software developer with expertise in ReactJS, Node.js, and React Native. I am Passionate about creating seamless user experiences, writing clean code, and staying updated with the latest technologies. I am a proactive problem solver, adaptable learner, and team player with a drive to make a positive impact through innovative technology solutions. "
        }
        animatable={true}
        style={{ textAlign: "justify", maxWidth:"90%" }}
      />

      <a
        href="https://www.dropbox.com/scl/fi/uo3bg3yue6246jte708uc/TUNDE-CV.pdf?rlkey=z2m7hplyqybd6ni5tbpv13gyn&dl=0"
        hrefLang="en-us"
        target="_blank"
        rel="noopener noreferrer"
        download
      >
        <ButtonComponent
          text={"View CV"}
          style={{
            fontSize: "12px",
          }}
          click={() => console.log("Download")}
          isLoading={false}
          animatable={true}
          hasLine={false}
          buttonType={ButtonType.TERTIARY}
          cName=""
        />
      </a>
    </div>
  );
};

export default Left;
