import { Container, Row } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import Title from "../../utils/title/Title";
import P from "../../utils/p/P";
import LiveProject from "./components/LiveProject";
import { liveProject } from "./components/projects";
import { Colors } from "../../utils/colors/colors";
const Projects = () => {
  const { successColor, whiteColor } = Colors();
  const projectCat = [
    "All Projects",
    "Front-End Projects",
    "Full-Stack Projects",
    "React-Native Projects",
  ];
  return (
    
    <>
      <section className="" id="projects"  style={{
        marginTop:"100px"
      }} >
        <Container className="projects my-5 ">
          <Row className=" w-100   " style={{
        marginTop:"100px"
      }}>
            <div>
              <div className="d-flex flex-column justify-content-center align-items-center">
                <Title
                  textColor={successColor}
                  text={"My Projects"}
                  animatable={true}
                  style={{}}
                />
                <div>
                  <Title
                    textColor={whiteColor}
                    text={"Live Projects"}
                    animatable={true}
                    style={{ textAlign: "center" }}
                  />
                  <div
                    className="d-flex justify-content-center align-items-center  "
                    style={{
                      flexWrap: "wrap",
                    }}
                  >
                    {liveProject.map((project) => (
                      <LiveProject
                        key={project.id}
                        projectName={project.name}
                        technologies={project.technologies}
                        link={project.liveUrl}
                        description={project.description}
                        imgSrc={project.imgSrc}
                      />
                    ))}
                  </div>
                </div>

              
              </div>
              <div
                  className="border border-danger "
                  style={{
                    display: "flex",
                    flexDirection: "column",
              
                  }}
                >
                   <Title
                    textColor={"white"}
                    text={"Other Projects"}
                    animatable={true}
                    style={{ textAlign: "center" }}
                  />
                  <div style={{
                    display: "flex", gap:"20px", textAlign:"center", justifyContent: "center", alignContent: "center"
                  }} >
                  {projectCat.map((project) => (
                    <P
                      key={project}
                      textColor={"white"}
                      text={project}
                      animatable={true}
                      style={{
                        cursor:"pointer"
                      }}
                    />
                  ))}
                  </div>
               
                  
                </div>
              <ProjectCard />
            </div>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Projects;
