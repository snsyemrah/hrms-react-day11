import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Icon, Menu, Sidebar } from "semantic-ui-react";

export default function SideBar() {
  return (
    <Sidebar
      as={Menu}
      animation="overlay"
      icon="labeled"
      inverted
      vertical
      visible
      width="thin"
      style={{ top: 50, width: 250 }}
      color="violet"
    >
      <Link to={"/home"}>
        <Menu.Item as="a">
          <Icon name="home" />
          Home
        </Menu.Item>
      </Link>
      <Menu.Item as="a">
        <Icon name="user circle" />
        Profile
      </Menu.Item>
      <Link to={"/employers"}>
        <Menu.Item as="a">
          <Icon name="handshake outline" />
          Employer
        </Menu.Item>
      </Link>
      <Link to={"/advertisements"}>
        <Menu.Item as="a">
          <Icon name="search" />
          Job Advertisement
        </Menu.Item>
      </Link>
      <Link to={"/create-cv"}>
        <Menu.Item as="a">
          <Icon name="id card" />
          Create CV
        </Menu.Item>
      </Link>
      <Link to={"/advertisement-add"}>
        <Menu.Item as="a">
          <Icon name="bullhorn" />
          Add Advertisement
        </Menu.Item>
      </Link>
    </Sidebar>
  );
}
