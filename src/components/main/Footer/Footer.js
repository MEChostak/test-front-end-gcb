import React from "react";
import { FooterWrapper } from "../../../styles/styles";


const Footer = () => {
    return(
        <FooterWrapper>
            <div className="copyright">
                <p>© Copyrights 2019 Stack. All Rights Reserved.</p>
            </div>
            <div className="links">
                <a href="https://www.magsonchostak.com/">Privacy Policy</a>
                <a href="https://www.magsonchostak.com/">Terms and Conditions</a>
            </div>
        </FooterWrapper>
    )
}

export default Footer;