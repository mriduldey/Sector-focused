import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

import "./SectorFocusWrapper.css";

const SectorFocusWrapper = ({ focusedWrapperName, children }) => {
  return (
    <Grid container spacing={1} className="sector-focus-wrapper">
      <Grid item xs={12}>
        <h1>{focusedWrapperName}</h1>
      </Grid>
      {children}
    </Grid>
  );
};

SectorFocusWrapper.propTypes = {
  focusedWrapperName: PropTypes.string,
  children: PropTypes.node,
};

export default SectorFocusWrapper;
