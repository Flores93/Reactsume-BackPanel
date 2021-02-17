import React from "react";
import PropTypes from "prop-types";

import HDivider from "./HDivider";

const ComponentMappingWrapper = ({ children, exists }) => {
  return (
    <>
      {exists.length > 0 && (
        <div className="container">
          <HDivider mt="15px" mb="15px" />
          <div className="reactBg p-3 row">{children}</div>
        </div>
      )}
    </>
  );
};

ComponentMappingWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  exists: PropTypes.array.isRequired,
};

export default ComponentMappingWrapper;
