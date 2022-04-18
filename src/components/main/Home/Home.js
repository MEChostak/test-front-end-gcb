import React from "react";
import {
  HomeWrapper,
  Illustration,
  IllustrationMobile,
} from "../../../styles/styles";

const Home = () => {
  return (
    <HomeWrapper>
      <div className='input-wrapper'>
        <div className='logo'>
          <a href='#t'>Healthy Food</a>
        </div>
        <h1>Ready for Trying a new recipe?</h1>
        <div>
          <input
            style={{
              fontSize: 16,
              fontFamily: "Mulish",
              fontWeight: "normal",
              color: "gray",
              paddingRight: 10,
            }}
            className='fild'
            type='text'
            placeholder='Search healthy recipes'></input>
          <input style={{
              fontSize: 16,
              fontFamily: "Mulish",
              fontWeight: "normal",
            }} className='button-submit' type='submit' value=' '></input>
        </div>
      </div>
      <Illustration />
      <IllustrationMobile />
    </HomeWrapper>
  );
};

export default Home;
