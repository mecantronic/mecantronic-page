import React from "react";
import { useTranslation } from "react-i18next";
import MenuItems from "./MenuItems";
import LanguageSelector from "../translation/LenguageSelector";

const NavbarDesktop = () => {
    const { t } = useTranslation();

    const dataMenuItems = [
        {
            title: t("services"), class: "nivel1", submenu: [
                { title: t("fservicioia"), class: "nivel2", link: "/servicios/2" },
                { title: t("fservicioiot"), class: "nivel2", link: "/servicios/1" },
                { title: t("fservicio3d"), class: "nivel2", link: "/servicios/3" },
            ]
        },
        {
            title: t("products"), class: "nivel1", submenu: [
                {
                    title: t("nproducts_iot"), class: "nivel2", submenu: [
                        { title: t("Noisen"), class: "nivel3", href: "https://www.noisen.com.ar/" }
                    ]
                },
                {
                    title: t("nproducts_3D"), class: "nivel2", submenu: [
                        { title: t("Kubox"), class: "nivel3", link: "/products/Kubox" },
                        { title: t("Koron"), class: "nivel3", link: "/products/Koron" },
                    ]
                },
            ],
        },
        { title: t("aboutUs"), class: "nivel1", link: "/aboutUs" },
        { title: t("Contacto"), component: "Contacto", class: "nivel1" },
    ];

    return (
        <nav className="nav-collapse">
            <ul className="menus"> {
                dataMenuItems.map((menu, index) => {
                    const depthLevel = 0;
                    return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
                })
            }
                <LanguageSelector />
            </ul>
        </nav>
    );
};

export default NavbarDesktop;
