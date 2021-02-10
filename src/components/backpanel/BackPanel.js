import React from "react";
import { Grid } from "@material-ui/core";

import LateralBar from "./LateralBar";
import PanelFrame from "./PanelFrame";
import SelectedWrapper from "./SelectedWrapper";

const BackPanel = () => {
  return (
    <PanelFrame>
      <Grid container>
        <Grid item>
          <LateralBar />
        </Grid>
        <Grid item>
          <SelectedWrapper selected="data" />
        </Grid>
      </Grid>
    </PanelFrame>
  );
};

export default BackPanel;
