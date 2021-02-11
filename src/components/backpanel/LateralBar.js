import React from "react";
import { useDispatch } from "react-redux";
import { List } from "@material-ui/core";

import CustomListItem from "../ui/CustomListItem";
import HDivider from "../ui/HDivider";

import { newSection } from "../../actions/uiActions";
import { logOutAction } from "../../actions/authActions";

import { navSections } from "../../constants/lateralOptions";

const LateralBar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logOutAction());
  };

  const handleSection = ({ target }) => {
    dispatch(newSection(target.innerText));
  };

  return (
    <aside className="lateralBar">
      <h3>Reactsume</h3>
      <HDivider />
      <List component="nav" aria-label="main mailbox folders">
        {navSections.map((section) => (
          <CustomListItem
            key={section}
            onClick={handleSection}
            activeClassName="activeLaterlaBar"
          >
            {section}
          </CustomListItem>
        ))}
      </List>
      <HDivider />
      <List component="nav" aria-label="secondary mailbox folders">
        <CustomListItem onClick={handleLogout}>
          Logout <i className="fas fa-sign-out-alt"></i>
        </CustomListItem>
      </List>
    </aside>
  );
};

export default LateralBar;
