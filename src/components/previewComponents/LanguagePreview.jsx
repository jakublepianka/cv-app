export function LanguagePreview({data}){
  return (
    <div className="language-container">
      <h1>Languages</h1>
      {data.map(section => 
        <div key={section.key} className="cv-entry">
            <div>
              <strong>
                {section.language}
              </strong>
              <i> {section.proficiency.toLowerCase()}</i>  
            </div>
        </div>
      )}
    </div>
  )
}