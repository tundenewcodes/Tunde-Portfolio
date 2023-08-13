import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Icons from "./Icons";



const Col3 = () => {
  return (
    <div
      className="footer-link footer-col   align-self-end"
      data-aos="fade-up"
      data-aos-once="true"
    >
      <div className="col-3-details">Follow us on social</div>
      <div
        className="icons"
      >
        <Icons
          Icon={AiOutlineInstagram}
          link="https://www.instagram.com/eratek.io/"
        />
        <Icons
          Icon={FaLinkedinIn}
          link="https://www.linkedin.com/company/era-tek/"
        />
        <Icons
          Icon={BsTwitter}
          link="#"
        />
        <Icons
          Icon={FaFacebookF}
          link="https://www.facebook.com/profile.php?id=100091502844748&mibextid=ZbWKwL"
        />
      </div>
    </div>
  );
};

export default Col3;
