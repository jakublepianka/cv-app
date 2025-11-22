export function SummaryPreview({data}){
  return (
    <div className="summary-container">
      <div className="cv-entry">
        <h1>Professional summary</h1>
        <p>{data[0].content}</p>
      </div>
    </div>
  );
}