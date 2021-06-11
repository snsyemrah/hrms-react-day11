import React from "react";
import { Icon, Menu, Sidebar } from 'semantic-ui-react';

export default function SideBar() {
    return ( 
          
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
      style={{top:50, width:250}}
      color= "violet"
    >
         <Menu.Item as='a'>
        <Icon name='home' />
        Home
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='user circle' />
        Profile
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='handshake outline' />
        Company
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='search' />
        Job Advertisement
      </Menu.Item>
    </Sidebar>

    );
}