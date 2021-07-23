import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import PropTypes from "prop-types";

import "./CheckSector.css";

const CheckSector = ({ value }) => {
  return (
    <FormControlLabel
      value={value}
      control={<Checkbox color="primary" />}
      label={value}
      labelPlacement="end"
    />
  );
};

CheckSector.propTypes = {
  value: PropTypes.string,
};

export default CheckSector;
