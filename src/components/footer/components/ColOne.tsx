import { Link } from "react-router-dom";

export default function ColOne() {

  return (
    <div
      data-aos="fade-up"
      className="footer-col"
      data-aos-once="true"
    >
      <div className="colBold footer-link">
        <Link
          to="/home"
        >
          Home
        </Link>
      </div>

      <div className="colBold footer-link">
        <Link
          to="/about"
        >
          About
        </Link>
      </div>

      <div className="colBold footer-link">
        <Link
          to="/service"
        >
          Services
        </Link>
      </div>

      <div className="colBold footer-link">
        <Link
          to="/blog"
        >
          Blog
        </Link>
      </div>

      <div className="colBold footer-link">
        <Link
          to="/contact-us"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
