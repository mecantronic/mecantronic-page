import { Disclosure} from '@headlessui/react'
import "./AccordionItem.css"
export const AccordionItem = ({data})=>{    
    const  {title, description} = data;
    return (
        <Disclosure as="div"  className="py-6 mt disclosure" key={title}>
                {({ open }) => (
                <>
                    <h3 className="-my-3 flow-root">
                    <Disclosure.Button className="flex w-full items-center justify-between bg-white  py-3 text-sm text-gray-400 hover:text-gray-500 ">
                        <span className=" accordionTitle">{title}</span>
                        <span className="ml-6 flex items-center">
                        {open ? (
                            <img src='../assets/icons/chevron.png' alt='chevron' className='w-4 rotate-180'/>
                        ) : (
                            <img src='../assets/icons/chevron.png' alt='chevron' className='w-4'/>
                        )}
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