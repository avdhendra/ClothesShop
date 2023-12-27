
import {useState } from "react";
import "./styles/Accordion.scss"
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { AccordionProps, sectionType } from "../defs/types.def";
import { Rating } from "react-simple-star-rating";
export default function Accordion({setMark,mark}:AccordionProps) {
   const [sections, setSections] = useState<sectionType[]>([
    { id: 1, title: 'Categories', value:"categories"  ,checkboxes:["electronics","jewelery","men's clothing","women's clothing"], isOpen: false },
    { id: 2, title: 'Price Range',value:"price" ,checkboxes: ['Rs.500 - Rs.400', 'Rs.400 - Rs.300','Rs.300 - Rs.200','Rs.200-Rs.100','Rs.100-Rs.0'], isOpen: false },
    { id: 3, title: 'Rating', value: 'rating', checkboxes: ['1', '2', '3', '4', '5'], isOpen: false },
  ]);

  const handleAccordionToggle = (sectionId:number) => {
    setSections((prevSections) =>
      prevSections.map((section) => ({
        ...section,
        isOpen: section.id === sectionId ? !section.isOpen : section.isOpen,
      }))
    );
  };


 // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCheckboxChange = (sectionId:number, section:sectionType, checkbox:string, checkboxId:number,event: any) => {
    const updatedMark = { ...mark };

    if (!updatedMark[section.value.toLowerCase()]) {
      updatedMark[section.value] = [];
    }

    if (event.target.checked) {
      // Checkbox is checked, add to the mark
      updatedMark[section.value.toLowerCase()].push(checkbox);
    } else {
      // Checkbox is unchecked, remove from the mark
      updatedMark[section.value.toLowerCase()] = updatedMark[section.value.toLowerCase()].filter(item => item !== checkbox);
    }

    console.log("updatedmark:",updatedMark)
    setMark(updatedMark);

    console.log(`Checkbox state changed for Section ${sectionId}, Checkbox ${checkboxId}`);

    // You can now access the selected checkboxes in the mark state.
    console.log('Mark:', updatedMark);
  };
  return (
    <div className="accordion">
      {sections.map((section) => (
        <div key={section.id} className={`accordion-section ${section.isOpen ? 'open' : ''}`}>
          <div className="accordion-heading" onClick={() => handleAccordionToggle(section.id)}>
            <span>{section.title}</span>
            <span className={`icon ${section.isOpen ? 'open' : ''}`}>{section.isOpen ? <RiArrowDropUpLine/> :<RiArrowDropDownLine/> }</span>
          </div>
          <div className="content">
           
            {section.checkboxes.map((checkbox, index) => (
                <div key={index} className="checkbox-item">
                    <div className="checkbox-item-input">

                <input
                  type="checkbox"
                  id={`checkbox_${section.id}_${index + 1}`}
                    onClick={(event) => { handleCheckboxChange(section.id, section, checkbox, index + 1,event) }}
                />
                    </div>
                    <div className="checkbox-item-label">

                  {section.value === "rating" ? <Rating size={20} readonly={true} initialValue={parseInt(checkbox)}/>:<label htmlFor={`checkbox_${section.id}_${index + 1}`}>{checkbox}</label>}
                    </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}