import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { ListItem, ListItemText } from "@material-ui/core";

const CustomListItem = ({
  children,
  onClick = null,
  activeClassName = null,
}) => {
  // @ts-ignore
  const { currentSection } = useSelector((state) => state.ui);

  const activeClass = () => {
    if (children === currentSection && !!activeClassName) {
      return activeClassName;
    }
  };

  return (
    <ListItem onClick={onClick} className={`${activeClass()}`} button>
      <ListItemText>{children}</ListItemText>
    </ListItem>
  );
};

CustomListItem.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  activeClassName: PropTypes.string,
};

export default CustomListItem;
