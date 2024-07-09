import { useState } from 'react';

export default function EducationForm({ setEducationInfo }) {
  const [education, setEducation] = useState({
    college: '',
    degree: '',
    startDate: '',
    endDate: '',
    gpa: '',
  });

  function handleChange(e) {
    setEducation({ ...education, [e.target.name]: e.target.value });
  }

  function handleClick(e) {
    e.preventDefault();
    setEducationInfo((previous) => [...previous, education]);
  }
  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="College"
          name="college"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Degree"
          name="degree"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="Start Date"
          name="startDate"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="End Date"
          name="endDate"
          onChange={(e) => handleChange(e)}
        />
        <input
          type="text"
          placeholder="GPA"
          name="gpa"
          onChange={(e) => handleChange(e)}
        />
        <button onClick={(e) => handleClick(e)}>Save</button>
      </form>
    </>
  );
}
