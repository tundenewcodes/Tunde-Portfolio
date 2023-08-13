import "./Navbar.css";
import { FaBars } from "react-icons/fa";

import Log1 from "../../assets/logo/log1.jpeg";

import { useState } from "react";

import Links from "./Links";
import ModalNav from "./ModalNav";

import useMediaQuery from "../../hooks/useMediaQuery";
import { Container } from "react-bootstrap";
import P from "../../utils/p/P";
import { Colors } from "../../utils/colors/colors";
import { AiFillCloseCircle } from "react-icons/ai";

const Navbar = ({ selectedPage, setSelectedPage, isTopOfPage }) => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => {
    setShowModal(false);
  };
  const toggleMenuHandler = () => {
    setShowModal((showModal) => !showModal);
  };

  const flexBetween = "d-flex justify-content-between align-items-center";
  const largeScreen = useMediaQuery("(min-width:768px)");

  const { successColor } = Colors();
  return (
    <nav style={{ marginBottom: "20px" }}>
      <Container>
        <div className="d-flex flex-column">
          <div className="header-nav">
            <div className="header-img-div">
              <img alt="logo" src={Log1} />
              <P
                textColor={successColor}
                text={"Tunde.dev "}
                animatable={true}
                style={{}}
                cName="p-0 m-0"
              />
            </div>
            {largeScreen && (
              <div className={`${flexBetween}`} style={{}}>
                <Links
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                  closeModal={closeModal}
                />
              </div>
            )}
            {!largeScreen && !showModal && (
              <FaBars className="icon-nav" onClick={toggleMenuHandler} />
            )}
            {showModal && (
              <AiFillCloseCircle className="icon-nav" onClick={closeModal} />
            )}
          </div>
          {!largeScreen && showModal && (
            <ModalNav
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              closeModal={closeModal}
            />
          )}
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
