

import { Disclosure} from '@headlessui/react'
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid'

export const AccordionItem = ({data})=>{
    
    const  {title, description} = data;
    return (
        <Disclosure as="div"  className="border-b border-gray-200 py-6" key={title}>
                {({ open }) => (
                <>
                    <h3 className="-my-3 flow-root">
                    <Disclosure.Button className="flex w-full items-center justify-between bg-white  py-3 text-sm text-gray-400 hover:text-gray-500 ">
                        <span className="font-medium text-gray-900 font-bold text-xl">{title}</span>
                        <span className="ml-6 flex items-center">
                        {open ? (
                            <MinusIcon className="h-5 w-5" aria-hidden="true" />
                        ) : (
                            <PlusIcon className="h-5 w-5" aria-hidden="true" />
                        )}
                        </span>
                    </Disclosure.Button>
                    </h3>
                    <Disclosure.Panel className="pt-6">
                    <div className="space-y-4 ">
                        <p className='text-lg'>{description}</p>
                    </div>
                    </Disclosure.Panel>
                </>
                )}
        </Disclosure>
    )
}