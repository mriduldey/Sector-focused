import React from "react";
import Grid from "@material-ui/core/Grid";

import "./SectorFocusWrapper.css";

const SectorFocusWrapper = ({ FocusedWrapperName, children }) => {
  return (
    <Grid container spacing={1} className="sector-focus-wrapper">
      <Grid item xs={12}>
        <h1>{FocusedWrapperName}</h1>
      </Grid>
      {children}
    </Grid>
  );
};

export default SectorFocusWrapper;
