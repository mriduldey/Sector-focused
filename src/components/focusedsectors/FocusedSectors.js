import React from "react";
import CheckSector from "../checksector/CheckSector";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

import "./FocusedSectors.css";

const FocusedSectors = ({ focusName, sectors, handleAddSectors }) => {
  const renderSectors = () => {
    return sectors.map(sector => (
      <Grid item xs={12} sm={6} key={sector}>
        <CheckSector value={sector} />
      </Grid>
    ));
  };

  return (
    <FormControl component="fieldset" className="focused-sectors">
      <FormLabel>{focusName}</FormLabel>
      <FormGroup aria-label="position" row>
        <Grid container spacing={1}>
          {renderSectors()}
          {
            // create empty space when numbers of sectors are even to align buttons right
            sectors.length % 2 === 0 && <Grid item xs={12} sm={6}></Grid>
          }
          <Grid item xs={12} sm={6}>
            <Button
              variant="outlined"
              color="primary"
              startIcon={<AddIcon />}
              onClick={e => handleAddSectors(e, focusName)}
            >
              Add sectors
            </Button>
          </Grid>
        </Grid>
      </FormGroup>
    </FormControl>
  );
};

CheckSector.propTypes = {
  focusName: PropTypes.string,
  sectors: PropTypes.array,
  handleAddSectors: PropTypes.func,
};

export default FocusedSectors;
