import React from "react";

import Logo from "../assets/avatar.json";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <img src={Logo} alt="" />
          </a>
          <button className="btn btn-sm">Stark Industries Pvt</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
