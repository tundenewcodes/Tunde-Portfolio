import { AiFillCloseCircle } from "react-icons/ai";
import Navlinks from "./Navlinks";
import { SelectedLink } from "../../types/appTypes";
import ButtonComponent from "../../utils/button/ButtonComponent";
import { MdOutlineDownload } from "react-icons/md";
import { ButtonType } from "../../types/types";


const ModalNav = ({

  selectedPage,
  setSelectedPage,
  closeModal,
}) => {
  return (
    <div className="modal-nav  ">
      <Navlinks
        styles={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          fontSize: "1rem",
        }}
        cName=""
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        closeModal={closeModal}
      />

<div
     style={{margin:"16px 0"}}  
      >
        <a
          href="https://www.dropbox.com/scl/fi/ryj2waxh2nnurg5m3t7ah/TUNDE_dev-CV.pdf?rlkey=8rls6856v56g2qo8vzhy56e0b&dl=0"
          hrefLang="en-us"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <ButtonComponent
            text={"Download CV"}
            style={{
              fontSize: "12px",
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
      </div>



    </div>
  );
};

export default ModalNav;
