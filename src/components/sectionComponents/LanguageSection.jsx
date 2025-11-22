import ISO6391 from "iso-639-1";

export function LanguageSection({ objid, obj, onChange, isCollapsed }) {
  const languages = ISO6391.getAllNames();

  return (
    <div className="language-section">
      {isCollapsed ? (
        <div className="hidden-section">
          <h3>
            {obj.language === "" ? "(Not specified)" : obj.language}
            {obj.proficiency !== "none" && <p>{obj.proficiency}</p>}
          </h3>
        </div>
      ) : (
        <section>
          <div className="input-field-normal">
            <select
              name="language"
              data-objid={objid}
              value={obj.language}
              id={`language-${objid}`}
              onChange={onChange}
            >
              {languages.map((language, index) => (
                <option key={index}>{language}</option>
              ))}
            </select>
            <label htmlFor={`language-${objid}`}>Language</label>
          </div>
          <div className="input-field-normal">
            <select
              name="proficiency"
              data-objid={objid}
              value={obj.proficiency}
              id={`proficiency-${objid}`}
              onChange={onChange}
            >
              <option>Elementary (A2)</option>
              <option>Intermediate (B1)</option>
              <option>Upper-Intermediate (B2)</option>
              <option>Advanced (C1)</option>
              <option>Proficient (C2)</option>
            </select>
            <label htmlFor={`proficiency-${objid}`}>Proficiency</label>
          </div>
        </section>
      )}
    </div>
  );
}
