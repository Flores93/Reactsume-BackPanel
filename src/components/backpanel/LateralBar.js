import React from "react";
import { useDispatch } from "react-redux";

import { logOutAction } from "../../actions/authActions";

const LateralBar = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    dispatch(logOutAction());
  };

  return (
    <aside className="lateralBar">
      <h3>Reactsume</h3>
      <span className="itsAPointer" onClick={handleLogout}>
        Logout
      </span>
    </aside>
  );
};

export default LateralBar;
