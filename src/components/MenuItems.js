// @ts-nocheck
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ContactButton } from "./ContactButton/ContactButton";
import { useTranslation } from "react-i18next";

import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel }) => {
    const { t } = useTranslation();
    const [dropdown, setDropdown] = useState(false);
    const [clikkk, setClikkk] = useState(false);

    let ref = useRef();

    useEffect(() => {
        const handler = (event) => {
            if (dropdown && ref.current && !ref.current.contains(event.target)) {
                setDropdown(false);
            }

        };
        document.addEventListener("mousedown", handler);
        document.addEventListener("touchstart", handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", handler);
            document.removeEventListener("touchstart", handler);
        };
    }, [dropdown]);


    return (
        <li className="menu-items" ref={ref} >

            {items.submenu ? (
                <>
                    <button type="button" className={items.class} aria-haspopup="menu" aria-expanded={dropdown ? "true" : "false"} onClick={() => setDropdown((prev) => !prev)}>
                        {items.title} {" "}
                    </button>
                    <Dropdown depthLevel={depthLevel} submenus={items.submenu} dropdown={dropdown} />
                </>
            ) : (
                items.link ? (
                    <Link to={items.link} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className={`menuItem1 navItem ${items.class}`} >{items.title}</Link>
                ) : (items.component ?
                    (<div className={items.class}><ContactButton class textoBoton={t("fcontact")} /></div>) : (<a href={items.href} className={items.class} target="_blank" rel="noreferrer"> {items.title} </a>)
                )
            )
            }
        </li>
    );
};

export default MenuItems;