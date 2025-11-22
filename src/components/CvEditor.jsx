import { CvSections } from "./CvSections.jsx";
import { PersonalSection } from "./sectionComponents/PersonalSection.jsx";
import { EducationSection } from "./sectionComponents/EducationSection.jsx";
import { EmploymentSection } from "./sectionComponents/EmploymentSection.jsx";
import { LanguageSection } from "./sectionComponents/LanguageSection.jsx";
import { SkillSection } from "./sectionComponents/SkillSection.jsx";
import { CourseSection } from "./sectionComponents/CourseSection.jsx";
import { SummarySection } from "./sectionComponents/SummarySection.jsx";
import { LinkSection } from "./sectionComponents/LinkSection.jsx";
import { HobbySection } from "./sectionComponents/HobbySection.jsx";

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

export function CvEditor({
  onChange,
  onAdd,
  onPrev,
  onNext,
  onDelete,
  onClear,
  inputData,
  sectionId,
}) {
  const HEADINGS = [
    "Personal Information",
    "Education",
    "Employment History",
    "Languages",
    "Technical Skills",
    "Courses, Certifications",
    "Professional Summary",
    "Links",
    "Hobbies",
  ];
  const style = { transform: `scaleX(${(sectionId+1) * 0.11111111111})`, transformOrigin: "left"}

  return (
    <div className="editor-wrapper">
        <div className="progress-bar-container">
          <div className="progress-bar" style={style}></div>
        </div>
        <div className="editor-container">
          <h1>{HEADINGS[sectionId]}</h1>
          <CvSections
            onChange={onChange}
            onDelete={onDelete}
            onClear={onClear}
            onAdd={onAdd}
            inputData={inputData}
            sectionId={sectionId}
          ></CvSections>
        </div>
        <div className="editor-nav-buttons">
          <div className="nav-buttons-wrapper">
            {!!sectionId && (
              <button className="previous-button" onClick={onPrev}>
                Previous
              </button>
            )}
            {sectionId < sections.length - 1 && (
              <button className="next-button" onClick={onNext}>
                Next: {HEADINGS[sectionId + 1]}
              </button>
            )}
          </div>
        </div>
    </div>
  );
}
