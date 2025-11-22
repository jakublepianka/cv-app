export function HobbyPreview({ data }) {
  return (
    <div className="hobby-container">
      <div className="cv-entry">
        <h1>Hobbies</h1>
        <p>{data[0].content}</p>
      </div>
    </div>
  );
}
