import { useRef, useLayoutEffect } from "react";

export function EmploymentSection({ objid, obj, onChange, isCollapsed }) {
  const textareaRef = useRef(null);

  function adjustHeight(el) {
    if (!el) return;
    el.style.height = "auto";

    requestAnimationFrame(() => {
      const newHeight = el.scrollHeight + 5;
      el.style.height = `${newHeight}px`;
    });
  }

  useLayoutEffect(() => {
    adjustHeight(textareaRef.current);
  }, [obj.description]);

  function handleChange(e) {
    onChange(e);
    adjustHeight(e.target);
  }

  return (
    <div className="employment-section">
      {isCollapsed ? (
        <div className="hidden-section">
          <h3>{obj.jobTitle === "" ? "(Not specified)" : obj.jobTitle}</h3>
          <p>
            {obj.startDate !== "" &&
              new Date(obj.startDate).toLocaleDateString("en-EN")}{" "}
            -{" "}
            {obj.endDate === "Present" || obj.endDate === ""
              ? obj.endDate
              : new Date(obj.endDate).toLocaleDateString("en-EN")}
          </p>
        </div>
      ) : (
        <section>
          <div className="input-field-normal">
            <input
              type="text"
              name="jobTitle"
              data-objid={objid}
              onChange={onChange}
              value={obj.jobTitle}
              id={`job-title-${objid}`}
              placeholder=""
            ></input>
            <label htmlFor={`job-title-${objid}`}>Job title</label>
          </div>
          <div className="input-field-normal">
            <input
              type="text"
              name="employer"
              data-objid={objid}
              onChange={onChange}
              value={obj.employer}
              id={`employer-${objid}`}
              placeholder=""
            ></input>
            <label htmlFor={`employer-${objid}`}>Employer</label>
          </div>
          <div className="date-inputs">
            <div className="input-field-normal">
              <input
                type="date"
                name="startDate"
                data-objid={objid}
                onChange={onChange}
                value={obj.startDate}
                id={`start-date-${objid}`}
                placeholder=""
              ></input>
              <label htmlFor={`start-date-${objid}`}>Start date</label>
            </div>
            <div className="input-field-normal">
              {obj.isCurrent ? (
                <input
                  type="text"
                  name="endDate"
                  data-objid={objid}
                  onChange={onChange}
                  value={(obj.endDate = "Present")}
                  id={`end-date-${objid}`}
                  readOnly
                  placeholder=""
                ></input>
              ) : (
                <input
                  type="date"
                  name="endDate"
                  data-objid={objid}
                  onChange={onChange}
                  value={obj.endDate}
                  id={`end-date-${objid}`}
                  placeholder=""
                ></input>
              )}
              <label htmlFor={`end-date-${objid}`}>End date</label>
            </div>
            <div className="present-date">
              <label htmlFor={`is-current-${objid}`}>
                Currently work here{" "}
              </label>
              <input
                type="checkbox"
                name="isCurrent"
                data-objid={objid}
                onChange={onChange}
                value={obj.isCurrent}
                id={`is-current-${objid}`}
                checked={obj.isCurrent}
              ></input>
              <span className="custom-checkbox"></span>
            </div>
          </div>
          <div className="input-field-normal">
            <input
              type="text"
              name="city"
              data-objid={objid}
              onChange={onChange}
              value={obj.city}
              id={`city-${objid}`}
              placeholder=""
            ></input>
            <label htmlFor={`city-${objid}`}>City</label>
          </div>
          <div className="input-field-textarea">
            <textarea
              ref={textareaRef}
              name="description"
              data-objid={objid}
              onChange={handleChange}
              value={obj.description}
              id={`description-${objid}`}
              placeholder=""
            ></textarea>
            <label htmlFor={`description-${objid}`}>Description</label>
          </div>
        </section>
      )}
    </div>
  );
}
