

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { skillsData } from "./skillsData";
import "./Skills.css";
import Title from "../../utils/title/Title";
import P from "../../utils/p/P";
import { Colors } from "../../utils/colors/colors";
const Skills = () => {
  const { successColor, whiteColor } = Colors();


  const responsive = {
    0: {
      items: 1,
    },
    380: {
      items: 1,
    },
    512: {
      items: 2,
    },
    665: {
      items: 3,
    },
    767: {
      items: 3,
    },
    870: {
      items: 4,
    },
    1024: {
      items: 6,
    },
    1265: {
      items: 6,
    },
  };

  const items = skillsData.map((skill) => {
    return (
      <div className="mylang" key={skill.id}>
        <div className="skill-div">
          <div className="img-div">
            <img
              src={skill.icon}
              alt=""
              style={{ height: "50px", width: "50px" }}
            />
          </div>
          <h3>{skill.name}</h3>
          <P
            textColor={skill.level === "Expert" ? "green" : "white"}
            text={skill.level}
            animatable={true}
            style={{
              padding: "10px",
              borderRadius: "20px",
              background: "rgb(23, 32, 61)",
              
            }}
          />
        </div>
      </div>
    );
  });
  return (
    <>
      <section id="progress" className="progress">
        <div className="progress-container">
          <div className="d-flex flex-column justify-content-center align-items-center py-5 ">
            <Title
              textColor={successColor}
              text={"My Current Tech Stack"}
              animatable={true}
              style={{}}
            />
            <Title
              textColor={whiteColor}
              text={"My Tech Stacks"}
              animatable={true}
              style={{}}
            />
          </div>
          <div className="">
            <div className="">
              <AliceCarousel
                infinite
                autoPlay
                disableButtonsControls
                disableDotsControls
                mouseTracking
                autoPlayInterval={1000}
                items={items}
                responsive={responsive}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
