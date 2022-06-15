import React from "react";
import { links } from "../data/dummy";
import { useStateContext } from "../context/context";
const Sidebar = () => {
  const { activeSidebar } = useStateContext();
  return (
    <div
      className="sidebar"
      style={{
        marginLeft: activeSidebar ? "-25vw" : "0%",
      }}
    >
      <div className="logo">Logo</div>
      {links.map((item) => (
        <div className="sidebar_link_container">
          <div className="sidebar_title">{item.title}</div>
          <div className="sidebar_items">
            {item.links.map(({ name, icon }) => (
              <div className="sidebar_items_list">
                <div className="sidebar_items_list_icon">{icon}</div>
                <div className="sidebar_items_list_name">{name}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
