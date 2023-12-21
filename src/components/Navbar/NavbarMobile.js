// @ts-nocheck
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import { ContactButton } from '../ContactButton/ContactButton';
import { useTranslation } from 'react-i18next';
import LanguageSelectorMobile from '../../translation/LenguageSelectorMobile';

export default function CollapseNavbar({ closeMenu }) {
    const { t } = useTranslation();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleLinkClick = (path) => {
        closeMenu();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div>
            <Accordion expanded={expanded === `panel1`} onChange={handleChange(`panel1`)} className="collapseItem1">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel1-bh-content`}
                    id={`panel1-bh-header`}
                >
                    <p className="titleAccordionCollapse">{t('services')}</p>
                </AccordionSummary>
                <AccordionDetails>
                    <Link to={'/servicios/IA'} onClick={() => handleLinkClick('/servicios/IA')}>
                        <span className="navbar-collapseButton">
                            <p>{t('Servicios de IA')}</p>
                        </span>
                    </Link>
                    <Link to={'/servicios/IOT'} onClick={() => handleLinkClick('/servicios/IOT')}>
                        <span className="navbar-collapseButton">
                            <p>{t('Servicios de IoT')}</p>
                        </span>
                    </Link>
                    <Link to={'/servicios/3D'} onClick={() => handleLinkClick('/servicios/3D')}>
                        <span className="navbar-collapseButton">
                            <p>{t('Servicios de 3D')}</p>
                        </span>
                    </Link>
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={expanded === `panel2`} onChange={handleChange(`panel2`)} className="collapseItem1">
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel2-bh-content`}
                    id={`panel2-bh-header`}
                >
                    <p className="titleAccordionCollapse">{t('products')}</p>
                </AccordionSummary>
                <AccordionDetails>
                    <a href="https://www.noisen.com.ar/" target="_blank" rel="noreferrer" id="noisen">
                        <span className="navItemCollapse">
                            <p>{t('Noisen')}</p>
                        </span>
                    </a>
                    <Link to={'/productos/Kubox'} id="kubox" onClick={() => handleLinkClick('/productos/Kubox')}>
                        <span className="navbar-collapseButton">
                            <p>{t('Kubox')}</p>
                        </span>
                    </Link>
                    <Link to={'/productos/Koron'} id="koron" onClick={() => handleLinkClick('/productos/Koron')}>
                        <span className="navbar-collapseButton">
                            <p>{t('Koron')}</p>
                        </span>
                    </Link>
                </AccordionDetails>
            </Accordion>

            <div className="collapseItem1">
                <Link to="/sobreNosotros" onClick={() => { closeMenu(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                    {t('aboutUs')}
                </Link>
            </div>
            <div className="collapseItem1" id="btnNavCollapse">
                <ContactButton textoBoton={t('fcontact')} />
            </div>
            <div>
                <LanguageSelectorMobile />
            </div>
        </div>
    );
}
