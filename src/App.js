import React, { useState } from "react";
import SectorFocusWrapper from "./components/HOC/sectorfocuswrapper/SectorFocusWrapper";
import FocusedSectors from "./components/focusedsectors/FocusedSectors";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import defaultState from "./tools/defaultState";

import "./App.css";

function App() {

  //state stores focused category as key and sectors under it as value
  const [state, setState] = useState(defaultState);

  //render the focused categories
  const renderFocusedSectors = () => {
    const focusedSectors = [];
    Object.entries(state).forEach(([focusName, sectors]) => {
      focusedSectors.push(
        <Grid item xs={12} key={focusName}>
          <FocusedSectors
            focusName={focusName}
            sectors={sectors}
            handleAddSectors={handleAddSectors}
          />
        </Grid>
      );
    });
    return focusedSectors;
  };

  // add new focused category section
  const handleAddFocus = e => {
    e.preventDefault();
    const newFocused = prompt("Please enter nw focused category name");

    // add a new section focused-category as a key and empty sector list as value
    setState({...state, [newFocused]: []})
  };

  // add new sector
  const handleAddSectors = (e, focusName) => {
    e.preventDefault();
    const newSector = prompt("Please enter sector name");
    const currentSectors = state[focusName];
    setState({ ...state, [focusName]: [...currentSectors, newSector] });
  };

  return (
    <Box width="50%" mx="auto" className="app">
      <SectorFocusWrapper FocusedWrapperName="Sector">
        {renderFocusedSectors()}
        <Grid item xs={12} sm={8}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<AddIcon />}
            onClick={handleAddFocus}
          >
            Add Another Focus
          </Button>
        </Grid>
      </SectorFocusWrapper>
    </Box>
  );
}

export default App;
