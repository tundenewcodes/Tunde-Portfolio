import ActionButton from "../../constants/ActionButton";
import { SelectedLink } from "../../types/appTypes";
import { ButtonType } from "../../types/types";
import ButtonComponent from "../../utils/button/ButtonComponent";
import { MdOutlineDownload } from "react-icons/md";
import Navlinks from "./Navlinks";
import useMediaQuery from "../../hooks/useMediaQuery";


const Links = ({ selectedPage, setSelectedPage, closeModal }) => {
  const flexBetween = "d-flex justify-content-between align-items-center  ";
  const largeScreen = useMediaQuery("(min-width:768px)");
  return (
    <div className="links">
      <Navlinks
        styles={{}}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        closeModal={closeModal}
        cName="nav-links"
      />

      <div
        className={`${flexBetween}  gap-3 `}
        style={{
          marginLeft: "30px",
        }}
      >
        <a
          href="https://www.dropbox.com/scl/fi/ryj2waxh2nnurg5m3t7ah/TUNDE_dev-CV.pdf?rlkey=8rls6856v56g2qo8vzhy56e0b&dl=0"
          hrefLang="en-us"
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <ButtonComponent
            text={"Resume"}
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
      </div>
    </div>
  );
};

export default Links;
