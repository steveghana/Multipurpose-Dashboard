import React from "react";
import { Typography } from "@material-ui/core";
interface headerText {
  bigtext: string;
  smallText: string;
}
const Header: React.FC<headerText> = ({ bigtext, smallText }) => {
  return (
    <div style={{ width: "100%", paddingLeft: "3rem" }} className="header">
      <Typography variant="body2">{smallText}</Typography>
      <Typography>{bigtext}</Typography>
    </div>
  );
};
export default Header;
