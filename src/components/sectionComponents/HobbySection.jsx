import { useRef, useLayoutEffect } from "react";
export function HobbySection({ objid, obj, onChange }) {
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
    <div className="hobby-section">
      <div className="input-field-textarea">
        <textarea
          ref={textareaRef}
          name="content"
          data-objid={objid}
          value={obj.content}
          id={`content-${objid}`}
          onChange={handleChange}
          placeholder=""
        ></textarea>
        <label htmlFor={`content-${objid}`}>Your hobbies</label>
      </div>
    </div>
  );
}
