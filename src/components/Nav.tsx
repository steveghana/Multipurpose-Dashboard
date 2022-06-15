import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import avatar from "../data/avatar.jpg";
import { useStateContext } from "../context/context";

interface navProps {
  icon: JSX.Element;
  title: string;
  toggleSidebar?: () => void;
}

const NavButton: React.FC<navProps> = ({ icon, title, toggleSidebar }) => {
  return (
    <button
      type="button"
      onClick={toggleSidebar}
      style={{ color: "#03C9D7", fontSize: "1.5rem", border: "none" }}
    >
      {icon}
    </button>
  );
};

const Nav = () => {
  const { toggleSidebar } = useStateContext();
  return (
    <div className="nav">
      <ul className="nav_list">
        <NavButton
          toggleSidebar={toggleSidebar}
          icon={<AiOutlineMenu />}
          title="Search"
        />
        <li className="nav_list_item">
          <NavButton icon={<AiOutlineSearch />} title="Search" />
        </li>
        <li className="nav_list_item">
          <NavButton icon={<FiShoppingCart />} title="Search" />
        </li>
        <li className="nav_list_item">
          <NavButton icon={<BsChatLeft />} title="Search" />
        </li>
        <li className="nav_list_item">
          <NavButton icon={<RiNotification3Line />} title="Search" />
        </li>
        <div
          className="user_avatar"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <img
            style={{ width: "50px", borderRadius: "50%" }}
            src={avatar}
            alt=""
          />
          <div className="user_name">
            <span>HI ,</span>Michael
          </div>
          <MdKeyboardArrowDown />
        </div>
      </ul>
    </div>
  );
};

export default Nav;
