// @ts-nocheck
// @ts-nocheckimport * as React from 'react';
//import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';


const Accordion = styled((props) => (
  <MuiAccordion elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `2px solid ${theme.palette.divider}`,
  '&:before': {
    display: 'none',
  },
}));

export default function CasosExitoAccordionItem({product}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    changeImage(panel,isExpanded)
  };
  function changeImage(panel,isExpanded){   
    hideAllImgAccordion()  
    if(isExpanded === false){
      hideAllImgAccordion();
      const sobreimg = document.getElementById("sobreimg")
      sobreimg?.classList.remove("sobreimgHidden")   
    }
    else {
      const imgToShow = document.getElementById(panel)
      imgToShow?.classList.remove("sobreimgHidden")   
    }
  }

  function hideAllImgAccordion(){
    const allAccordionImg = document.getElementsByClassName("sobreimgAccordion")
    for (let i = 0; i < allAccordionImg.length; i++) {
      allAccordionImg[i].classList.add("sobreimgHidden")   
    }
    
  }
  return (
    <div>
    {product.map((item,index)=>{        
      return(
          <Accordion expanded={expanded === `panel${index+1}`} onChange={handleChange(`panel${index+1}`)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index+1}bh-content`}
            id={`panel${index+1}bh-header`}
            sx={{padding:0, height:'60px'}}
            >
            <p className='numAccordionItemServices'> {`0${index+1}`} </p>
            <p className='titleAccordionItemServices'> {item["title"]} </p>
          </AccordionSummary>
          <AccordionDetails sx={{paddingLeft:0}}>
            <p className='descriptionAccordionItemServices'> {item["description"]} </p>
          </AccordionDetails>
        </Accordion>
        ) 
    })}
    </div>
  )
}