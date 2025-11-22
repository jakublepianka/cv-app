import { useState } from "react";

export function SkillSection({ objid, obj, onChange, isCollapsed }) {
  const radioValues = [
    "Novice",
    "Beginner",
    "Intermediate",
    "Advanced",
    "Expert",
  ];

  const [radioIndex, setRadioIndex] = useState(radioValues.indexOf(obj.level));
  const groupName = `level-${objid}`;

  function handleRadioChange(e) {
    if (e.target) setRadioIndex(radioValues.indexOf(e.target.value));
  }

  return (
    <div className="skill-section">
      {isCollapsed ? (
        <div className="hidden-section">
          <h3>
            {obj.skill === "" ? "(Not specified)" : obj.skill}
            {obj.level !== "none" && <p>{obj.level}</p>}
          </h3>
        </div>
      ) : (
        <section>
          <div className="skill-input">
            <div className="input-field-normal">
              <input
                type="text"
                name="skill"
                data-objid={objid}
                value={obj.skill}
                id={`skill-${objid}`}
                onChange={onChange}
                placeholder=""
              ></input>
              <label htmlFor={`skill-${objid}`}>Skill</label>
            </div>
            <div className="no-level">
              <label htmlFor={`nolevel-${objid}`}>
                Don't specify skill level{" "}
              </label>
              <input
                type="radio"
                name={groupName}
                data-objid={objid}
                value="none"
                id={`nolevel-${objid}`}
                onChange={onChange}
                checked={obj.level === "none"}
              ></input>
              <span className="custom-checkbox"></span>
            </div>
          </div>

          <div className="radio-buttons">
            <div className="buttons-wrapper">
              <div
                className="highlighting-box"
                style={
                  obj.level !== "none"
                    ? {
                        transform: `translateX(${100 * radioIndex}%)`,
                        opacity: 1,
                      }
                    : {
                        transform: `translateX(${100 * radioIndex}%)`,
                        opacity: 0,
                      }
                }
              ></div>
              <div className="custom-radio-container">
                <input
                  type="radio"
                  name={groupName}
                  data-objid={objid}
                  value="Novice"
                  onChange={onChange}
                  onClick={handleRadioChange}
                  checked={obj.level === "Novice"}
                ></input>
              </div>
              <div className="custom-radio-container">
                <input
                  type="radio"
                  name={groupName}
                  data-objid={objid}
                  value="Beginner"
                  onChange={onChange}
                  onClick={handleRadioChange}
                  checked={obj.level === "Beginner"}
                ></input>
              </div>
              <div className="custom-radio-container">
                <input
                  type="radio"
                  name={groupName}
                  data-objid={objid}
                  value="Intermediate"
                  onChange={onChange}
                  onClick={handleRadioChange}
                  checked={obj.level === "Intermediate"}
                ></input>
              </div>
              <div className="custom-radio-container">
                <input
                  type="radio"
                  name={groupName}
                  data-objid={objid}
                  value="Advanced"
                  onChange={onChange}
                  onClick={handleRadioChange}
                  checked={obj.level === "Advanced"}
                ></input>
              </div>
              <div className="custom-radio-container">
                <input
                  type="radio"
                  name={groupName}
                  data-objid={objid}
                  value="Expert"
                  onChange={onChange}
                  onClick={handleRadioChange}
                  checked={obj.level === "Expert"}
                ></input>
              </div>
            </div>
            <span className="skill-level">
              {obj.level === "none" ? "Not specified" : obj.level}
            </span>
          </div>
        </section>
      )}
    </div>
  );
}
