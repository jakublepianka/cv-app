export function LinkPreview({ data }) {
  return (
    <div className="link-container">
      <h1>Links</h1>
      {data.map((section) => (
        <div key={section.key} className="cv-entry">
          <div>
            <a href={section.link} title={section.link}>
              {section.description}{" "}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
