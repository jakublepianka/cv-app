export function CoursePreview({ data }) {
  return (
    <div className="course-container">
      <h1>Courses & Certificates</h1>
      {data.map((section) => (
        <div key={section.key} className="cv-entry">
          <h2>{section.name}</h2>
          <p>
            <i>{section.institution}</i>
          </p>
          <p>{section.description}</p>
        </div>
      ))}
    </div>
  );
}
