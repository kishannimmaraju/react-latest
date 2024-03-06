import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Log In");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li
            onClick={() => {
              loginBtn === "Log In"
                ? setLoginBtn("Log Out")
                : setLoginBtn("Log In");
            }}
          >
            {loginBtn}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
