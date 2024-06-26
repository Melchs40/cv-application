import { useState } from 'react';

window.global ||= window;

function Education({ onEducationUpdate }) {
  const [school, setSchool] = useState('');
  const [location, setLocation] = useState('');
  const [degree, setDegree] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [gpa, setGpa] = useState('');

  const handleSchoolChange = (event) => {
    setSchool(event.target.value);
    onEducationUpdate({ school: event.target.value });
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    onEducationUpdate({ location: event.target.value });
  };

  const handleDegreeChange = (event) => {
    setDegree(event.target.value);
    onEducationUpdate({ degree: event.target.value });
  };

  const handleStartChange = (event) => {
    setStart(event.target.value);
    onEducationUpdate({ start: event.target.value });
  };

  const handleEndChange = (event) => {
    setEnd(event.target.value);
    onEducationUpdate({ end: event.target.value });
  };

  const handleGpaChange = (event) => {
    setGpa(event.target.value);
    onEducationUpdate({ gpa: event.target.value });
  };

  return (
    <div className="education-info">
      <form action="">
        <input
          type="text"
          value={school}
          placeholder="Harvard University"
          onChange={handleSchoolChange}
        />
        <input
          type="text"
          value={location}
          placeholder="Cambridge, MA"
          onChange={handleLocationChange}
        />
        <input
          type="text"
          value={degree}
          placeholder="Bachelors"
          onChange={handleDegreeChange}
        />
        <input
          type="date"
          value={start}
          placeholder="09/01/2020"
          onChange={handleStartChange}
        />
        <input
          type="date"
          value={end}
          placeholder="06/01/2024"
          onChange={handleEndChange}
        />
        <input
          type="number"
          value={gpa}
          placeholder="3.95"
          onChange={handleGpaChange}
        />
      </form>
    </div>
  );
}

export default Education;
