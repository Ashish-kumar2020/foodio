import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between h-[80px] items-center shadow-md">
      <div className="pl-[16px]">
        <h3 className="cursor-pointer text-[16px]">Foodio</h3>
      </div>
      <div>
        <ul className="flex w-[400px] justify-around items-center">
          <li className="cursor-pointer text-[16px]">Search</li>
          <li className="cursor-pointer text-[16px]">Offer</li>
          <li className="cursor-pointer text-[16px]">Help</li>
          <li className="cursor-pointer text-[16px]">SignIn</li>
          <li className="cursor-pointer text-[16px]">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
