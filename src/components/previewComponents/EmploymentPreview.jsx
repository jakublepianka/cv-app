export function EmploymentPreview({ data }) {
  return (
    <div className="employment-container">
      <h1>Employment</h1>
      {data.map((section) => (
        <div key={section.key} className="cv-entry">
          <h2>{section.jobTitle}</h2>
          {section.degree !== "" && (
            <p>
              <b>Employer: {section.employer}</b>
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
