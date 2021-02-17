import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

import { Chip } from "@material-ui/core";
import { deletingHobbie } from "../../actions/aboutmeActions";

const ShowChip = ({ icon, label, bgColor, id, isSkill = false }) => {
  const dispatch = useDispatch();

  const deleteHobbie = () => {
    dispatch(deletingHobbie(id));
  };

  return (
    <div className="col-2">
      <Chip
        key={id}
        className="bold"
        icon={<i className={`${icon}`} />}
        label={label}
        color={bgColor}
        size="small"
        onDelete={deleteHobbie}
      />
    </div>
  );
};

ShowChip.propTypes = {
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  bgColor: PropTypes.string.isRequired,
  id: PropTypes.any.isRequired,
  isSkill: PropTypes.bool,
};

export default ShowChip;
