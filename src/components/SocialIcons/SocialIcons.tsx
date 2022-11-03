import { BsTwitter } from "react-icons/bs";
import { AiFillFacebook, AiOutlineInstagram } from "react-icons/ai";

import "./SocialIcons.scss";

const SocialIcons = () => {
  const socialIcons = [BsTwitter, AiFillFacebook, AiOutlineInstagram];

  return (
    <ul className="SocialIcons-List">
      {socialIcons.map((SocialIcon, index) => {
        return (
          <a className="SocialIcons-Link" href="#">
            <li className="SocialIcons-Item" key={index}>
              <SocialIcon size={"1.2rem"} />
            </li>
          </a>
        );
      })}
    </ul>
  );
};

export default SocialIcons;
