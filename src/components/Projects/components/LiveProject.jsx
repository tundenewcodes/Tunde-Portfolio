import { BsCameraVideo } from "react-icons/bs";
import P from "../../../utils/p/P";



const LiveProject = ({
  projectName,
  technologies,
  link,
  description,
  imgSrc,
}) => {
  return (
    <div
      className="d-flex gap-5  p-3 "
      style={{
        width: "350px",
        boxShadow: "0px 3px 5px rgb(16 70 197 / 20%)",
       
        justifyContent: "start",
        alignItems: "center",
        margin: "0.4rem",
        backgroundColor:"rgb(16 70 197 / 20%)",
        borderRadius:"20px"
      }}
    >
      <div
        style={{
          height: "100px",
          width: "100px",
          borderRadius: "50%",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
        }}
      >
        <img
          src={imgSrc}
          alt={projectName}
          style={{
            height: "70px",
            width: "70px",
            borderRadius: "50%",
          }}
        />
      </div>

      <div
        className="d-flex flex-column  justify-content-center align-items-start  m-0 p-0 "
        style={{
          padding: "8px",
          margin: 0,  width:"100%",
        }}
      >
        <div
          className="d-flex justify-content-between align-items-center w-100   "
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
           
            width: "100%",
          }}
        >
          <P
            textColor={"white"}
            text={projectName}
            animatable={true}
            style={{ padding: 0, margin: 0 }}
          />
          <a
            target="_blank"
            href={link}
            rel="noreferrer noopener"
            hrefLang="en-us" style={{
              decoration:"none"
            }}
          
          >
            
              <BsCameraVideo color="#e9e9ed" size="24" />
             
          </a>
        </div>

        <div
          className="d-flex  justify-content-between align-items-center "
         
        >
          <P
            textColor={"green"}
            text={technologies}
            animatable={true}
            style={{ padding: 0, margin: 0 }}
            cName="d-flex align-items-center justify-content-center"
          />
        </div>
        <P
          textColor={"white"}
          text={description}
          animatable={true}
          style={{}}
        />
      </div>
    </div>
  );
};

export default LiveProject;
