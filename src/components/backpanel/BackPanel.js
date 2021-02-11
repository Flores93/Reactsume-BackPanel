import React from "react";
import { Grid } from "@material-ui/core";

import SelectedWrapper from "./SelectedWrapper";
import LateralBar from "./LateralBar";
import PanelFrame from "./PanelFrame";

const BackPanel = () => {
  return (
    <PanelFrame>
      <Grid container>
        <Grid item>
          <LateralBar />
        </Grid>
        <Grid item>
          <SelectedWrapper />
        </Grid>
      </Grid>
    </PanelFrame>
  );
};

export default BackPanel;
