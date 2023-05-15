// @ts-nocheck
import { Disclosure} from '@headlessui/react'
import React from 'react';
import "./AccordionItem.css"
export const AccordionItem = ({data, index})=>{    
    const  {title, description, img} = data;
        
    function showAccordionImg(imgID){
        const allAccordionImg = document.getElementsByClassName("sobreimgAccordion")

        /* img por defecto */
        const sobreimg = document.getElementById("sobreimg")
        sobreimg?.classList.add("sobreimgHidden")   

        for (let i = 0; i < allAccordionImg.length; i++) {
            allAccordionImg[i].classList.add("sobreimgHidden")   
        }
        const accordionImg = document.getElementById(imgID)
        accordionImg?.classList.remove("sobreimgHidden")        
    }

    function hideAccordionImg(imgID){
        const sobreimg = document.getElementById("sobreimg")
        sobreimg?.classList.remove("sobreimgHidden")  

        const accordionImg = document.getElementById(imgID)
        accordionImg?.classList.add("sobreimgHidden")
    }

    
    return (
        <Disclosure as="div"  className="py-6 mt disclosure" key={title}>
                {({ open }) => (                   
                <>
                    <h3 className="-my-3 flow-root">
                    <Disclosure.Button className="flex w-full items-center justify-between py-3 text-sm text-gray-400 hover:text-gray-500">
                        <span className=" accordionTitle"><p>{index}</p>{title}</span>
                        <span className="ml-6 flex items-center">
                        {open ? (
                            <img src='../assets/icons/chevron.png' alt='chevron' className='w-4 rotate-180'/>
                        ) : (
                            <img src='../assets/icons/chevron.png' alt='chevron' className='w-4'/>
                        )}
                        
                        {open? showAccordionImg(img) : hideAccordionImg(img)}
                        </span>
                    </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6">
                    <div className="space-y-4">
                        <p className='detailsText'>{description}</p>
                    </div>
                    </Disclosure.Panel>
                </>
                )}
                
        </Disclosure>
    )
}