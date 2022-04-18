import React from "react";
import {
  MembershipWrapper,
  MembershipBg,
  MembershipBgMobile,
} from "../../../styles/styles";

const Membership = () => {
  return (
    <MembershipWrapper>
      <div className='input-wrapper' id='join'>
        <h2>Join our membership to get special offer</h2>
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
            placeholder='Enter your email address'></input>
          <input
            style={{
              fontSize: 16,
              fontFamily: "Mulish",
              fontWeight: "normal",
              alignItems: 'center',
              textAlign: 'center'
            }}
            className='button-submit'
            type='submit'
            value='Join'></input>
        </div>
      </div>
      <MembershipBg />
      <MembershipBgMobile />
    </MembershipWrapper>
  );
};

export default Membership;
