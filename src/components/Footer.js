/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import {
  Facebook,
  Instagram,
  WhatsApp,
  Phone,
  Email,
} from "@material-ui/icons";
import { grey } from "@material-ui/core/colors";
import logo2 from "../img/fonect3.svg";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer1">
          <div className="footer__img">
            <img src={logo2} alt="logo" className="img-fluid" />
          </div>
          <div className="footer__net">
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.instagram.com/timelab_ec/"
            >
              <Instagram style={{ color: grey[50], fontSize: 23 }} />
            </a>
            <a rel="noopener noreferrer" target="_blank" href="#">
              <Facebook style={{ color: grey[50], fontSize: 23 }} />
            </a>
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://wa.me/593963395950?text=Hola%21+me+gustaría+más+información+de+sus+servicios"
            >
              <WhatsApp style={{ color: grey[50], fontSize: 23 }} />
            </a>
          </div>
          <div className="footer__cont">
            <Email style={{ color: grey[50], fontSize: 20 }} />
            <span>fonect@gmail.com</span>
          </div>
          <div className="footer__cont">
            <Phone style={{ color: grey[50], fontSize: 20 }} />
            <span>0987635011 / 0983060321</span>
          </div>
          <span className="footer__copy">
            {" "}
            &#169; fonect - 2022 | Some Rights Reserved.
          </span>
        </div>
        <div className="footer2">
          <div className="footer_contact2">
            <div className="footer__cont2">
              <Email style={{ color: grey[50], fontSize: 20 }} />
              <span>info@fonect.com</span>
            </div>
            <div className="footer__cont2">
              <Phone style={{ color: grey[50], fontSize: 20 }} />
              <span>0987635011 / 0983060321</span>
            </div>
          </div>
          <div className="footer__img2">
            <img src={logo2} alt="logo" className="img-fluid" />
            <span className="footer__copy">
              {" "}
              &#169; fonect - 2022 | Some Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
