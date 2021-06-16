import React from "react";
import SideBar from "./SideBar";
import Dashboard from "./Dashboard";
import Navbar from "./Navbar";
import { Grid, Column } from 'semantic-ui-react'
import { Route } from "react-router";
import EmployerList from "../pages/EmployerList";
import EmployerDetail from "../pages/EmployerDetail";
import JobDetail from "../pages/JobDetail";
import AdvertisementList from "../pages/AdvertisementList";
import Home from "../pages/Home";
import CreateCv from "../pages/CreateCv";
import AdvertisementAdd from "../pages/AdvertisementAdd";

export default function MainLayouts() {
  return (
    <div>
      <Navbar />

      <Grid>
        <Grid.Column width={2}>
          <SideBar />
        </Grid.Column>

        <Grid.Column width={14}>
          {/* <Route exact path="/" component={EmployerList}/> */}
          <Route exact path="/employers" component={EmployerList}/>
          {/* <Route path="/employers/:id" component={EmployerDetail}/> */}
          <Route path="/employers/view" component={EmployerDetail}/>
          <Route exact path="/advertisements" component={AdvertisementList}/>
          <Route exact path="/advertisements/:id" component={AdvertisementList}/>
          <Route exact path="/advertisements-view" component={JobDetail}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/create-cv" component={CreateCv}/>
          <Route exact path="/advertisement-add" component={AdvertisementAdd}/>
        </Grid.Column>
      </Grid>
    </div>
  );
}
