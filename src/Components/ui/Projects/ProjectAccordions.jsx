import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "../accordionprojects"
import React from 'react'

const ProjectAccordions = () => {
  return (
    <>
    <Accordion  type="single" collapsible className="w-full my-12 space-y-4">
        <AccordionItem className='' value="item-1">
            <AccordionTrigger className='bg-white text-black data-[state=open]:bg-black data-[state=open]:text-white text-xl px-4 font-bold'>1. Why will you choose our services?</AccordionTrigger>
            <AccordionContent className='text-lg text-gray-600 p-4'>
            Forging relationships between multi-national cor porations, governments and global NGOs begins with connections between people.
            </AccordionContent>
        </AccordionItem>

        <AccordionItem className='' value="item-2">
            <AccordionTrigger className='bg-white text-black data-[state=open]:bg-black data-[state=open]:text-white text-xl px-4 font-bold'>2. How can you contact us?</AccordionTrigger>
            <AccordionContent className='text-lg text-gray-600 p-4'>
            Forging relationships between multi-national cor porations, governments and global NGOs begins with connections between people.
            </AccordionContent>
        </AccordionItem>

        <AccordionItem className='' value="item-3">
            <AccordionTrigger className='bg-white text-black data-[state=open]:bg-black data-[state=open]:text-white text-xl px-4 font-bold'>3. Why you work with us?</AccordionTrigger>
            <AccordionContent className='text-lg text-gray-600 p-4'>
            Forging relationships between multi-national cor porations, governments and global NGOs begins with connections between people.

            </AccordionContent>
        </AccordionItem>
    </Accordion>
    </>
  )
}

export default ProjectAccordions
