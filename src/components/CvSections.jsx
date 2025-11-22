import { useState } from "react";
import { PersonalSection } from "./sectionComponents/PersonalSection.jsx";
import { EducationSection } from "./sectionComponents/EducationSection.jsx";
import { EmploymentSection } from "./sectionComponents/EmploymentSection.jsx";
import { LanguageSection } from "./sectionComponents/LanguageSection.jsx";
import { SkillSection } from "./sectionComponents/SkillSection.jsx";
import { CourseSection } from "./sectionComponents/CourseSection.jsx";
import { SummarySection } from "./sectionComponents/SummarySection.jsx";
import { LinkSection } from "./sectionComponents/LinkSection.jsx";
import { HobbySection } from "./sectionComponents/HobbySection.jsx";
import trashIcon from "../assets/trash.png";
import eraserIcon from "../assets/eraser.png";
import collapseIcon from "../assets/collapse.png";
import expandIcon from "../assets/expand.png";

const sections = [
  PersonalSection,
  EducationSection,
  EmploymentSection,
  LanguageSection,
  SkillSection,
  CourseSection,
  SummarySection,
  LinkSection,
  HobbySection,
];

export function CvSections({
  onChange,
  onDelete,
  onClear,
  onAdd,
  inputData,
  sectionId,
}) {
  const [isCollapsedList, setIsCollapsedList] = useState([]);
  const CurrentComponent = sections[sectionId];
  function isCollapsed(givenKey) {
    if (!isCollapsedList || !isCollapsedList.length) return false;
    return isCollapsedList.some((listKey) => listKey === givenKey);
  }

  function toggleCollapse(keyToToggle) {
    setIsCollapsedList((prev) => {
      if (isCollapsed(keyToToggle)) {
        const newList = prev.filter((key) => key !== keyToToggle);
        return newList;
      } else {
        return [...prev, keyToToggle];
      }
    });
  }

  return (
    <div className="sections-container">
      {inputData.map((section) => (
        <div key={section.key} className="section-card">
          {!(
            sectionId === 0 ||
            sectionId === 6 ||
            sectionId === 8
          ) && (
            <div className="toggle-container">
              <button
                className="collapse-toggle"
                onClick={() => toggleCollapse(section.key)}
                title="Toggle card collapse"
              >
                <img
                  src={isCollapsed(section.key) ? expandIcon : collapseIcon}
                ></img>
              </button>
            </div>
          )}

          <div
            className={`input-container-${
              isCollapsed(section.key) ? "hidden" : "shown"
            }`}
          >
            <CurrentComponent
              objid={section.key}
              obj={section}
              onChange={onChange}
              isCollapsed={isCollapsed(section.key)}
            />
          </div>
          { !isCollapsed(section.key) &&
          <div className="card-buttons-container">
            <button data-objid={section.key} onClick={onClear} title="Clear inputs">
              <img src={eraserIcon}></img>
            </button>
            {!(sectionId === 0 || sectionId === 6 || sectionId === 8) && (
              <button data-objid={section.key} onClick={onDelete} title="Delete card">
                {" "}
                <img src={trashIcon}></img>{" "}
              </button>
            )}
          </div>}
        </div>
      ))}
      {!(sectionId === 0 || sectionId === 6 || sectionId === 8) && (
        <button onClick={onAdd} className="add-section-button">
          <span className="plus-mark">+</span> Add section
        </button>
      )}
    </div>
  );
}
