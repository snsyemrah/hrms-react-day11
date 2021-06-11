import React from "react";
import SideBar from "./SideBar";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import { Grid, Column } from 'semantic-ui-react'

export default function MainLayouts() {
  return (
    <div>
      <Navbar />

      <Grid>
        <Grid.Column width={2}>
          <SideBar />
        </Grid.Column>

        <Grid.Column width={14}>
          <Dashboard />
        </Grid.Column>
      </Grid>
    </div>
  );
}
