import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { deletingSocialNet } from "../../actions/aboutmeActions";

const IndividualSocial = ({ net, link, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deletingSocialNet(id));
  };

  return (
    <div className="col-2" key={id}>
      <a className="navLink" href={link} target="_blank" rel="noreferrer">
        <i className={`${net} fa-2x`} />
      </a>
      <i
        onClick={handleDelete}
        className="itsAPointer fas fa-trash-alt trashy"
      ></i>
    </div>
  );
};

IndividualSocial.propTypes = {
  net: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  id: PropTypes.any.isRequired,
};

export default IndividualSocial;
