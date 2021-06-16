import React, { useState } from "react";


import { Icon, Menu } from "semantic-ui-react";
import AvatarLayout from "../components/AvatarLayout";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";

export default function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  
  function handleSignOut() {
    setIsAuthenticated(false)
    
  }

  function handleSignIn() {
    setIsAuthenticated(true)
  }

  return (
    <Menu inverted secondary color="violet">
      <Menu.Item>
        <Icon name="users" size="big" />
      </Menu.Item>
      <Menu.Item name="HRMS" />
      {/* <Menu.Item name="Employer List" /> */}

      <Menu.Menu position="right">
        <Menu.Item>
        {isAuthenticated? <SignedIn SignOut={handleSignOut} bisey={1}/>:
        <SignedOut SignIn={handleSignIn}/>}
        </Menu.Item>
        
      </Menu.Menu>
    </Menu>
  );
}
