export function PersonalSection({objid, obj ,onChange}){

  return (
    <div className="personal-section">
      <section>
        <label>
          First name
          <input type="text" name="firstName" data-objid={objid} onChange={onChange} value={obj.firstName}></input>
        </label>
        <label>
          Last name
          <input type="text" name="lastName" data-objid={objid} onChange={onChange} value={obj.lastName}></input>
        </label>
        <label>
          E-mail
          <input type="email" name="email" data-objid={objid} onChange={onChange} value={obj.email}></input>
        </label>
        <label>
          Phone number
          <input type="tel" name="phoneNum" data-objid={objid} onChange={onChange} value={obj.phoneNum}></input>
        </label>
        <label>
          Birth date
          <input type="date" name="birthDate" data-objid={objid} onChange={onChange} value={obj.birthDate}></input>
        </label>
        <label>
          City
          <input type="text" name="city" data-objid={objid} onChange={onChange} value={obj.city}></input>
        </label>
      </section>
    </div>
  );
}

// {
//     label: "First name",
//     name: "firstName",
//     type: "text",
//     pattern: "[A-Za-z]",
//     key: crypto.randomUUID()
//   },
//   {
//     label: "Last name",
//     name: "lastName",
//     type: "text",
//     pattern: "[A-Za-z]",
//     key: crypto.randomUUID()
//   },
//   {
//     label: "E-mail",
//     name: "email",
//     type: "email",
//     pattern: "[A-Za-z]",
//     key: crypto.randomUUID()
//   },
//   {
//     label: "Phone number",
//     name: "phoneNum",
//     type: "tel",
//     pattern: "[0-9]",
//     key: crypto.randomUUID()
//   },
//   {
//     label: "Birth date (optional)",
//     name: "birthDate",
//     type: "date",
//     pattern: "",
//     key: crypto.randomUUID()
//   },
//   {
//     label: "City",
//     name: "city",
//     type: "text",
//     pattern: "[A-Za-z]\\w+",
//     key: crypto.randomUUID()
//   }
// ]