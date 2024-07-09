export default function ResumeEducation({ educationInfo }) {
  return (
    <>
      <div>
        <h2>Education Info</h2>
        {educationInfo.map((educationEntry, index) => (
          <div key={index} className="education-item">
            <p>College: {educationEntry.college}</p>
            <p>Degree: {educationEntry.degree}</p>
            <p>Start Date: {educationEntry.startDate}</p>
            <p>End Date: {educationEntry.endDate}</p>
            <p>GPA: {educationEntry.gpa}</p>
          </div>
        ))}
      </div>
    </>
  );
}
