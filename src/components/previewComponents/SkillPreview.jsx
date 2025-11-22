export function SkillPreview({data}){
  return (
    <div className="skill-container">
      <h1>Skills</h1>
      {data.map(section => 
        <div key={section.key} className="cv-entry">
          <div>
            <b>{section.skill}</b>
            <i> {section.level !== "none" && section.level.toLowerCase()}</i>
          </div>
        </div>
      )}
    </div>
  );
}