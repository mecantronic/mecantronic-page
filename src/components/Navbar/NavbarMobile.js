// @ts-nocheck
// @ts-nocheckimport * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";
import { ContactButton } from '../ContactButton/ContactButton';
import React from 'react';
import { useTranslation } from "react-i18next";

export default function CollapseNavbar() {
    const { t } = useTranslation();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };


    return (
        <div>
            <Accordion expanded={expanded === `panel1`} onChange={handleChange(`panel1`)} className='collapseItem1'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel1-bh-content`}
                    id={`panel1-bh-header`}>
                    <p className='titleAccordionCollapse'>{t("services")}</p>
                </AccordionSummary>
                <AccordionDetails>
                    <Link to={"/servicios/IA"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} ><span className='navbar-collapseButton '><p>Servicios de IA</p></span></Link>
                    <Link to={"/servicios/IOT"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} ><span className='navbar-collapseButton'><p>Servicios de IoT</p></span></Link>
                    <Link to={"/servicios/3D"} onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} ><span className='navbar-collapseButton'><p>Servicios de 3D</p></span></Link>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === `panel2`} onChange={handleChange(`panel2`)} className='collapseItem1'>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel2-bh-content`}
                    id={`panel2-bh-header`}>
                    <p className='titleAccordionCollapse'>{t("products")}</p>
                </AccordionSummary>
                <AccordionDetails>
                    <a href="https://www.noisen.com.ar/" target="_blank" rel="noreferrer" id='noisen'>
                        <span className='navItemCollapse'><p>Noisen</p></span>
                    </a>
                    <Link to={"/products/Kubox"} id='kubox'><span className='navbar-collapseButton' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} ><p>Kubox</p></span></Link>
                    <Link to={"/products/Koron"} id='koron'><span className='navbar-collapseButton' onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} ><p>Koron</p></span></Link>
                </AccordionDetails>
            </Accordion>

            <div className='collapseItem1'>
                <Link to="/aboutUs" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>{t("aboutUs")}</Link>
            </div>
            <div className='collapseItem1' id='btnNavCollapse'>
                <ContactButton textoBoton={t("fcontact")} />
            </div>
        </div>
    )
}



