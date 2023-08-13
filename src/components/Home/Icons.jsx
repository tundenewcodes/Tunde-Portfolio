import { AiOutlineMail, AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import Icons from "../footer/components/Icons";



const IconDiv = ({showFollow}) => {
  return (
    <div
      className="py-3"
      data-aos="fade-up"
      data-aos-once="true"
    >
     {showFollow &&  <div className="py-3" style={{color:"white"}}>Follow Me:</div>}
      <div
        className="d-flex gap-5"
      >
        <Icons
          Icon={AiOutlineMail}
          link="mailto:fadipe11@gmail.com"
        />
        <Icons
          Icon={FaLinkedinIn}
          link="https://linkedin.com/in/tunde-fadipe-149490150"
        />
        <Icons
          Icon={BsTwitter}
          link="https://twitter.com/compleat_dev?t=fgwTRCqXTpzv1iHOiAZR-Q&s=09"
        />
        <Icons
          Icon={AiOutlineGithub}
          link="https://github.com/tundenewcodes"
        />
      </div>
    </div>
  );
};

export default IconDiv;
