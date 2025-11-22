import { useRef, useLayoutEffect } from "react";
export function CourseSection({ objid, obj, onChange, isCollapsed }) {
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
    <div className="course-section">
      {isCollapsed ? (
        <div className="hidden-section">
          <h3>{obj.name === "" ? "(Not specified)" : obj.name}</h3>
          <p>
              {obj.institution === "" ? "(Not specified)" : obj.institution}
          </p>
        </div>
      ) : (
        <section>
          <div className="input-field-normal">
            <input
              type="text"
              name="name"
              data-objid={objid}
              value={obj.name}
              onChange={onChange}
              id={`name-${objid}`}
              placeholder=""
            ></input>
            <label htmlFor={`name-${objid}`}>Name</label>
          </div>
          <div className="input-field-normal">
            <input
              type="text"
              name="institution"
              data-objid={objid}
              value={obj.institution}
              onChange={onChange}
              id={`institution-${objid}`}
              placeholder=""
            ></input>
            <label htmlFor={`name-${objid}`}>Institution</label>
          </div>

          <div className="input-field-textarea">
            <textarea
              name="description"
              data-objid={objid}
              value={obj.description}
              onChange={handleChange}
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
