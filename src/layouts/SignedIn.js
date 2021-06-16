import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, Image, Menu } from "semantic-ui-react";
import nationalpark from "../images/nationalpark.jpg"


export default function SignedIn(props) {
  return (
    <div>
      <Menu.Item>
          {/* <Image avatar spaced="right" src={nationalpark}/> */}
        <Dropdown pointing="top left" text="Emrah">
          <Dropdown.Menu>
            <Dropdown.Item text="Cart Summary" icon="cart" />
            <Dropdown.Item text="Settings" icon="settings" />
            <Dropdown.Item onClick={props.SignOut}  text="Logout" icon="sign-out" />
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
}
