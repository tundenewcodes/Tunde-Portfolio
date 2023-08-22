import React from "react";
import P from "../../utils/p/P";
import ButtonComponent from "../../utils/button/ButtonComponent";
import IconDiv from "./Icons";
import { ButtonType } from "../../types/types";
import Title from "../../utils/title/Title";
import { Colors } from "../../utils/colors/colors";
import { MdOutlineDownload } from "react-icons/md";

const Left = () => {
  const { successColor, whiteColor } = Colors();
  return (
    <div
      style={{
        padding: "0.8rem",
      }}
    >
      <div>
        <Title
          textColor={whiteColor}
          text={"Hello, I Am "}
          animatable={true}
          style={{}}
        />
        <Title
          textColor={successColor}
          text={"Tunde Fadipe "}
          animatable={true}
          style={{}}
        />
        <Title
          textColor={whiteColor}
          text={"Software Developer "}
          animatable={true}
          style={{}}
        />
        <Title
          textColor={successColor}
          text={"Technical Writer "}
          animatable={true}
          style={{}}
        />

        <P
          textColor={whiteColor}
          text={
            "I am a software developer whose passion for technology knows no bound. Being a self-taught software developer, I am armed with a deep-rooted love for coding and an innovative mind  constantly pushing the boundaries of what's possible in the digital realm."
          }
          animatable={true}
          style={{
            textAlign: "justify", maxWidth:"90%"
          }}
        />
      </div>

      <a
          href="https://www.dropbox.com/scl/fi/ryj2waxh2nnurg5m3t7ah/TUNDE_dev-CV.pdf?rlkey=8rls6856v56g2qo8vzhy56e0b&dl=0"
          hrefLang="en-us"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <ButtonComponent
            text={"Download Resume"}
            style={{
              fontSize: "12px",
              fontWeight:400
            }}
            click={() => console.log("Download")}
            isLoading={false}
            animatable={true}
            hasLine={true}
            buttonType={ButtonType.TERTIARY}
            cName=""
            Icon={<MdOutlineDownload style={{width:"20px", height:"20px", color:"white"}}  />}
          />
        </a>
      <IconDiv showFollow={true} />
    </div>
  );
};

export default Left;
