export function EducationPreview({ data }) {
  return (
    <div className="education-container">
      <h1>Education</h1>
      {data.map((section) => (
        <div key={section.key} className="cv-entry">
          <h2>{section.school}</h2>
          {section.degree !== "" && (
            <p>
              <b>Degree: {section.degree}</b>
            </p>
          )}
          {section.city !== "" && (
            <p>
              <b>City:</b> {section.city}
            </p>
          )}
          <p>
            {section.startDate !== "" &&
              new Date(section.startDate).toLocaleDateString("en-EN")}{" "}
            -{" "}
            {section.endDate === "Present" || section.endDate === ""
              ? `${section.endDate}`
              : new Date(section.endDate).toLocaleDateString("en-EN")}
          </p>
          <p>{section.description}</p>
        </div>
      ))}
    </div>
  );
}
