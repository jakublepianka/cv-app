export function PersonalSection({ objid, obj, onChange }) {
  return (
    <div className="personal-section">
      <section>
        <div className="input-field-normal">
          <input
            type="text"
            name="firstName"
            data-objid={objid}
            onChange={onChange}
            value={obj.firstName}
            id={`first-name-${objid}`}
            placeholder=""
            autoComplete="new-password"
          ></input>
          <label htmlFor={`first-name-${objid}`}>First name</label>
        </div>
        <div className="input-field-normal">
          <input
            type="text"
            name="lastName"
            data-objid={objid}
            onChange={onChange}
            value={obj.lastName}
            id={`last-name-${objid}`}
            placeholder=""
            autoComplete="new-password"
          ></input>
          <label htmlFor={`last-name-${objid}`}>Last name</label>
        </div>
        <div className="input-field-normal">
          <input
            type="email"
            name="email"
            data-objid={objid}
            onChange={onChange}
            value={obj.email}
            id={`email-${objid}`}
            placeholder=""
          ></input>
          <label htmlFor={`email-${objid}`}>E-mail</label>
        </div>
        <div className="input-field-normal">
          <input
            type="tel"
            name="phoneNum"
            data-objid={objid}
            onChange={onChange}
            value={obj.phoneNum}
            id={`phone-num-${objid}`}
            placeholder=""
            autoComplete="new-password"
          ></input>
          <label htmlFor={`phone-num-${objid}`}>Phone number</label>
        </div>
        <div className="input-field-normal">
          <input
            type="date"
            name="birthDate"
            data-objid={objid}
            onChange={onChange}
            value={obj.birthDate}
            id={`birth-date-${objid}`}
            placeholder=""
            autoComplete="new-password"
          ></input>
          <label htmlFor={`birth-date-${objid}`}>Birth date</label>
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
            autoComplete="new-password"
          ></input>
          <label htmlFor={`city-${objid}`}>City</label>
        </div>
      </section>
    </div>
  );
}
