import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { ListItem, ListItemText } from "@material-ui/core";

const CustomListItem = ({ children, onClick = null, to = "/" }) => {
  return (
    <>
      {to !== "/" ? (
        <ListItem
          onClick={onClick}
          button
          to={to}
          activeClassName="activeLaterlaBar"
          component={NavLink}
        >
          <ListItemText>{children}</ListItemText>
        </ListItem>
      ) : (
        <ListItem onClick={onClick} button>
          <ListItemText>{children}</ListItemText>
        </ListItem>
      )}
    </>
  );
};

CustomListItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  to: PropTypes.string,
};

export default CustomListItem;
