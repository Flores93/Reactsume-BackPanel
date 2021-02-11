import React from "react";
import { useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { List } from "@material-ui/core";

import CustomListItem from "../ui/CustomListItem";
import HDivider from "../ui/HDivider";

import { logOutAction } from "../../actions/authActions";

import { navSections } from "../../constants/lateralOptions";

const LateralBar = () => {
  const dispatch = useDispatch();
  const { url } = useRouteMatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logOutAction());
  };

  return (
    <aside className="lateralBar">
      <h3>Reactsume</h3>
      <HDivider />
      <List component="nav" aria-label="main">
        {navSections.map(({ name, path, icon }) => (
          <CustomListItem key={path} to={`${url}/${path}`}>
            {name} {icon}
          </CustomListItem>
        ))}
      </List>
      <HDivider />
      <List component="nav" aria-label="secondary">
        <CustomListItem onClick={handleLogout}>
          Logout <i className="fas fa-sign-out-alt"></i>
        </CustomListItem>
      </List>
    </aside>
  );
};

export default LateralBar;
