import React from "react";
import { Link } from "react-router-dom";
import { RegisterHeaderWrapper, Illustration, IllustrationMobile } from "../../../styles/styles";

const HeaderRegister = () => {
  return (
    <RegisterHeaderWrapper>
      <nav className='nav-desk'>
        <div id='register_logo'>
          <Link to='/'>Healthy Food</Link>
        </div>
        <div className='nav'>
          <ul>
            <a href='#t' className='register-button'>
              <li>LOGIN</li>
            </a>
          </ul>
        </div>
      </nav>
      <Illustration />
      <IllustrationMobile />
    </RegisterHeaderWrapper>
  );
};

export default HeaderRegister;
