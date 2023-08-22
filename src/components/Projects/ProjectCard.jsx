
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";


import styled from "styled-components";
import P from "../../utils/p/P";
import { Colors } from "../../utils/colors/colors";
import Title from "../../utils/title/Title";
import { AiFillGithub, AiOutlineVideoCamera } from "react-icons/ai";


const ProjectCard = ({projects,}) => {
  const { successColor, whiteColor } = Colors();
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {projects.map((item, index) => (
        <CardWrapper>
          <div
            style={{
             
              borderRadius: "50px",
              marginBottom: "50px ",
            }}
          >
            <Carousel
              showArrows={true}
              showIndicators={false}
              infiniteLoop={true}
              autoPlay={true}
              dynamicHeight={false}
              stopOnHover={true}
              emulateTouch={true}
              showStatus={false}
              useKeyboardArrows={true}
              showThumbs={false}
            >
              {item.projectImages.map((img, index) => (
                <img
                  src={img}
                  alt={img}
                  style={{
                    backgroundSize: "contain",
                    height: "200px",
                    minHeight: "200px",
                    maxHeight: "200px",
                  }}
                />
              ))}
            </Carousel>
          </div>

          <Title
           textColor={whiteColor}
           text={item.projectName}
           animatable={true}
           style={{fontSize:"26px"}}
           cName="p-0 m-0"
          />
          
          <P
           textColor={successColor}
           text={item.technologies}
           animatable={true}
           style={{}}
           cName="p-0 m-0"
          
          />
          
          <P
           textColor={whiteColor}
           text={item.description}
           animatable={true}
           style={{}}
           
          
          />

       

          <div className="d-flex justify-content-between align-items-center">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/era-tek/"
              rel="noreferrer noopener"
              hrefLang="en-us"
            >
              <div
                className="d-flex gap-3 align-items-center justify-content-center "
                style={{
                  gap: "15px"
                }}
              >
               <AiFillGithub   style={{
            background: "transparent",
            height: "20px",
            width: "20px",
            color: "white",
            cursor: "pointer",
          }} />
                <P textColor={whiteColor}
           text={"Source Code"}
           cName="p-0 m-0"
           animatable={true}
           style={{}} />
              </div>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/company/era-tek/"
              rel="noreferrer noopener"
              hrefLang="en-us"
              style={{color:"white"}}
            >
              <div
                className="d-flex gap-5 align-items-center"
                style={{
                  gap: "15px",
                }}
              >
          <AiOutlineVideoCamera  style={{
            background: "transparent",
            height: "20px",
            width: "20px",
            color: "white",
            cursor: "pointer",
          }} />
               <P 
               textColor={whiteColor}
           text={"Live Demo"}
           cName="p-0 m-0"
           animatable={true}
           style={{}} />
              </div>
            </a>
          </div>
        </CardWrapper>
      ))}
    </div>
  );
};

export default ProjectCard;

const CardWrapper = styled.div`
  height: auto;
  width: 350px;
  background-color: #14143a;
  border-radius: 20px;
  padding: 10px;
  margin: 10px;
  box-shadow: 2px 2px 2px 4px #0d012c;
  display: flex;
  flex-direction: column;
  justify-content: between;
`;
