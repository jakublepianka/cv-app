export function LinkSection({ objid, obj, onChange, isCollapsed }) {
  return (
    <div className="link-section">
      {isCollapsed ? (
        <div className="hidden-section">
          <h3>
            {obj.description === "" ? "(Not specified)" : obj.description}
          </h3>
        </div>
      ) : (
        <section>
          <div className="input-field-normal">
            <input
              type="url"
              name="link"
              data-objid={objid}
              value={obj.link}
              id={`link-${objid}`}
              onChange={onChange}
              placeholder=""
            ></input>
            <label htmlFor={`link-${objid}`}>URL</label>
          </div>
          <div className="input-field-normal">
            <input
              type="text"
              name="description"
              data-objid={objid}
              value={obj.description}
              id={`description-${objid}`}
              onChange={onChange}
              placeholder=""
            ></input>
            <label htmlFor={`description-${objid}`}>Description</label>
          </div>
        </section>
      )}
    </div>
  );
}
