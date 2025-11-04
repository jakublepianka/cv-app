import { useState } from "react";
// import { InputSection } from "./InputSection.jsx";
// import { sectionTemplates } from "../sectionTemplates.js"
import { PersonalSection } from "./PersonalSection.jsx";
import { EducationSection } from "./EducationSection.jsx";
import { EmploymentSection } from "./EmploymentSection.jsx";
// import { EmploymentSection } from "./EmploymentSection.jsx";

export function SectionsContainer({
  onChange,
  onAdd,
  onPrev,
  onNext,
  personalData,
  educationData,
  employmentData,
  sectionId
}){

  return (
    <div className="sections-container">
      { 
        sectionId === 0 ?
          personalData.map(section => 
            <PersonalSection key={section.key} objid={section.key} obj={section} onChange={onChange}/>
          ) : 
          sectionId === 1 ? 
            educationData.map(section => 
              <EducationSection key={section.key} objid={section.key} obj={section} onChange={onChange}/>
            ) : 
            sectionId === 2 ? 
              employmentData.map(section => 
                <EmploymentSection key={section.key} objid={section.key} obj={section} onChange={onChange}/>
              ) : null
      }
      {!!sectionId && <button onClick={onAdd}>Add section</button>}
      <div className="buttons-container">
        {!!sectionId && <button className="previous-button" onClick={onPrev}>Previous</button>}
        {sectionId < 2 && <button className="next-button" onClick={onNext} >Next</button>}
      </div>
    </div>
  );
}