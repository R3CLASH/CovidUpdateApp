import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div className="px-5 py-10">
      <h2 className="text-left text-4xl font-semibold text-gray-700 lg:text-center">
        Hello There!
      </h2>
      <h3 className="text-left text-2xl pt-3  text-gray-700 lg:text-center">
        It's your responsibility to Stay Updated!
      </h3>
      <div className="flex justify-center pb-2 pt-10">
        <div className="flex justify-center w-auto px-2 py-2 bg-gray-200 gap-2 rounded-xl">
          <NavLink to="/">
            <button className="bg-white w-40 px-5 py-2 rounded-xl text-center font-medium text-lg">
              Global
            </button>
          </NavLink>
          <NavLink to="/local">
            <button className="bg-white w-40 px-5 py-2 rounded-xl text-center font-medium text-lg">
              Local
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Header;
