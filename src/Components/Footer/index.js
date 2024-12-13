import "./index.css";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookSquare } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { IoLogoSlack } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="footer-bg-container">
      <h1 className="follow-us-heading ">Follow Us</h1>
      <div className="follow-tag-line">
        <IoLogoSlack className="logo" size={20} />
        <p className="tag-line">Shop Smart, Shop Ease</p>
      </div>
      <div>
        <AiFillInstagram className="follow-us-icon " />
        <FaFacebookSquare className="follow-us-icon " />
        <IoLogoLinkedin className="follow-us-icon " />
        <FaTwitter className="follow-us-icon " />
      </div>
    </div>
  );
};

export default Footer;
