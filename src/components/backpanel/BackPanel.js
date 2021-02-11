import React from "react";
import { Grid } from "@material-ui/core";

import SelectedWrapper from "./SelectedWrapper";
import LateralBar from "./LateralBar";
import PanelFrame from "./PanelFrame";

import PanelRoutes from "../../routes/PanelRoutes";

const BackPanel = () => {
  return (
    <PanelFrame>
      <Grid container>
        <Grid item xs={2}>
          <LateralBar />
        </Grid>
        <Grid item xs={10}>
          <SelectedWrapper>
            <PanelRoutes />
          </SelectedWrapper>
        </Grid>
      </Grid>
    </PanelFrame>
  );
};

export default BackPanel;
