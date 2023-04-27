import React from "react";
import { dataMenuItems } from "./dataMenuItems";

import MenuItems from "./MenuItems";

const NavbarDesktop = () => {
    return ( 
        <nav className="nav-collapse">
            <ul className="menus"> {
                dataMenuItems.map((menu, index) => {
                    const depthLevel = 0;
                    return <MenuItems items = {menu}key = {index} depthLevel={depthLevel}/>;
                })
            } 
            </ul> 
        </nav>
    );
};

export default NavbarDesktop;