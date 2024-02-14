import React from "react";

import {StyledContact} from "../Styles/FooterStyles"
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
 
  return (
    <>
      <StyledContact>
        <div className="contact-content text-center">
          <div className="contact-social">
            <ul>
              <li>
                <a
                  className="hover-target"
                  href="https://linkedin.com/in/cristian-roberto-micale-9783b7193"
                  target="blank"
                >
                  <FaLinkedin className="icon" />
                </a>
              </li>
              <li>
                <a
                  className="hover-target"
                  href="https://www.facebook.com/Micalecris"
                  target="blank"
                >
                  <FaFacebookSquare className="icon" />
                </a>
              </li>
              <li>
                <a
                  className="hover-target"
                  href="https://instagram.com/tanito_rob?igshid=YmMyMTA2M2Y="
                  target="blank"
                >
                  <AiFillInstagram className="icon" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <footer>
          <p>
            <a href="https://github.com/MaiBP" src="githubMaiBP" target="blank">
              &copy;MaiBP-2023
            </a>
          </p>
        </footer>
      </StyledContact>
    </>
  );
};

export default Footer;


