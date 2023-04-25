// @ts-nocheck

import { menuItems } from "./navUtils";
import "./Navbarrr.css"

import  MenuItems  from "./menuItems";


const Navbarrr = () => {
    return ( 
    <nav >
        <ul className = "menus" > {
            menuItems.map((menu, index) => {
                const depthLevel = 0;
                return ( <MenuItems items = { menu } key = { index} depthLevel = { depthLevel} />)               
            })
        } 
        </ul> 
    </nav>
    );
};

export default Navbarrr;