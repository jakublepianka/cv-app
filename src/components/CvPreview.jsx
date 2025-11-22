import { EducationPreview } from "./previewComponents/EducationPreview";
import { EmploymentPreview } from "./previewComponents/EmploymentPreview";
import { PersonalPreview } from "./previewComponents/PersonalPreview";
import { LanguagePreview } from "./previewComponents/LanguagePreview";
import { SkillPreview } from "./previewComponents/SkillPreview";
import { CoursePreview } from "./previewComponents/CoursePreview";
import { SummaryPreview } from "./previewComponents/SummaryPreview";
import { LinkPreview } from "./previewComponents/LinkPreview";
import { HobbyPreview } from "./previewComponents/HobbyPreview";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableSection } from "./SortableSection";
import { DragOverlay } from "@dnd-kit/core";

const previewSections = [
  PersonalPreview,
  EducationPreview,
  EmploymentPreview,
  LanguagePreview,
  SkillPreview,
  CoursePreview,
  SummaryPreview,
  LinkPreview,
  HobbyPreview,
];

export function CvPreview({
  inputData,
  sectionOrder,
  isEdit,
  onGoTo,
  activeId,
}) {
  function isEmpty(objArr) {
    let isEmpty = true;
    objArr.forEach((obj) => {
      let keys = Object.keys(obj);
      isEmpty = keys.every((key) => {
        if (
          key === "key" ||
          key === "isCurrent" ||
          (obj[key] === "none" && key === "level")
        )
          return true;
        if (obj[key] !== "") {
          return false;
        }
        return true;
      });
    });
    return isEmpty;
  }
  function isAllEmpty(inputData) {
    for (const obj of inputData) {
      if (!isEmpty(obj.sectionCards)) return false;
    }
    return true;
  }

  const visibleSectionIds = sectionOrder.filter(
    (sectionIndex) => !isEmpty(inputData[sectionIndex].sectionCards)
  );

  const fullPreviewStyles = isEdit
    ? {}
    : { display: "grid", gridTemplateColumns: "inherit", gridColumn: "1/21" };

  return (
    <div className="cv-container" style={fullPreviewStyles}>
      <div
        className="cv-subcontainer"
        style={isEdit ? {} : { gridColumn: "1/21" }}
      >
        <SortableContext
          items={visibleSectionIds}
          strategy={verticalListSortingStrategy}
        >
          {visibleSectionIds.map((sectionIndex) => {
            const Component = previewSections[sectionIndex];
            return (
              <SortableSection
                key={sectionIndex}
                sectionId={sectionIndex}
                onGoTo={onGoTo}
              >
                <Component
                  data={inputData[sectionIndex].sectionCards}
                ></Component>
              </SortableSection>
            );
          })}
        </SortableContext>

        <DragOverlay>
          {activeId !== null &&
            (() => {
              const Component = previewSections[activeId];
              return (
                <SortableSection
                  sectionId={activeId}
                  onGoTo={onGoTo}
                  dragOverlay
                >
                  <Component data={inputData[activeId].sectionCards} />
                </SortableSection>
              );
            })()}
        </DragOverlay>

        {isAllEmpty(inputData) && (
          <div className="placeholder-text">
            <h1>
              Enter information into the input fields to build your resume!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
