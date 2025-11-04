export function EducationSection({objid, obj, onChange}){
  return (
    <div className="education-section">
      <section>
        <label>
          School
          <input type="text" name="school" data-objid={objid} onChange={onChange} value={obj.school}></input>
        </label>
        <label>
          Degree
          <input type="text" name="degree" data-objid={objid} onChange={onChange} value={obj.degree}></input>
        </label>
        <label>
          Start date
          <input type="date" name="startDate" data-objid={objid} onChange={onChange} value={obj.startDate}></input>
        </label>
        <label>
          End date
          {obj.isCurrent ? 
            <input type="text" name="endDate" data-objid={objid} onChange={onChange} value={obj.endDate = "Present"} readOnly></input> : 
            <input type="date" name="endDate" data-objid={objid} onChange={onChange} value={obj.endDate = ""}></input> }
        </label>
        <label>
          Currently study here
          <input type="checkbox" name="isCurrent" data-objid={objid} onChange={onChange} value={obj.isCurrent} checked={obj.isCurrent}></input>
        </label>
        <label>
          City
          <input type="text" name="city" data-objid={objid} onChange={onChange} value={obj.city}></input>
        </label>
        <label>
          Description
          <textarea name="description" data-objid={objid} onChange={onChange} value={obj.description}></textarea>
        </label>
      </section>
    </div>
  );
}