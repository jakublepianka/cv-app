export function PersonalPreview({data}){
  return (
    <div className="personal-container">
        <div className="cv-entry">
          <h1>
            {data[0].firstName} {data[0].lastName}
          </h1>
          <p>
            Email: <strong>{data[0].email}</strong>
          </p>
          <p>
            Phone number: <strong>{data[0].phoneNum}</strong>
          </p>
          <p>
            City: <strong>{data[0].city}</strong>
          </p>
        </div>
    </div>
  )
}