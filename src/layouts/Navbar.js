import React from "react";
import { Icon, Menu, Dropdown } from "semantic-ui-react";
import AvatarLayout from "../components/AvatarLayout";


export default function Navbar() {
  return (
    <Menu inverted secondary color="violet">
      <Menu.Item>
        <Icon name="users" size="big" />
      </Menu.Item>
      <Menu.Item name="HRMS" />
      <Menu.Item name="Employer List" />
    
      <Menu.Menu position="right">
          <Menu.Item>
              <AvatarLayout/>
          </Menu.Item>
      
      </Menu.Menu>
     
 

    </Menu>
  );
}
