import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import "./CheckSector.css";

const CheckSector = ({ label, value, handleAddSectors }) => {
  return (
    <FormControlLabel
      value={value}
      control={<Checkbox color="primary" />}
      label={label}
      labelPlacement="end"
    />
  );
};

export default CheckSector;
