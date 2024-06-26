window.global ||= window;

import { useState } from 'react';
import General from './General';
import Education from './Education';

function Info() {
  const [generalData, setGeneralData] = useState({
    name: '',
    address: '',
    number: '',
    email: '',
  });

  const handleGeneralUpdate = (data) => {
    setGeneralData({ ...generalData, ...data }); // Update specific properties
  };

  const [educationData, setEducationData] = useState({
    school: '',
    location: '',
    degree: '',
    start: '',
    end: '',
    gpa: '',
  });

  const handleEducationUpdate = (data) => {
    setEducationData({ ...educationData, ...data });
  };

  return (
    <>
      <div className="input">
        <General onGeneralUpdate={handleGeneralUpdate} />
        <Education onEducationUpdate={handleEducationUpdate} />
      </div>
      <div className="resume">
        <div className="general-section">
          <h2 className="general-title">General Information</h2>
          <div className="general gen-name">Name: {generalData.name}</div>
          <div className="general gen-address">
            Address: {generalData.address}
          </div>
          <div className="general gen-number">
            Phone Number: {generalData.number}
          </div>
          <div className="general gen-email">Email: {generalData.email}</div>
        </div>

        <div className="education-section">
          <h2 className="education-title">Education</h2>
          <div className="education edu-school">
            School Name: {educationData.school}
          </div>
          <div className="education edu-location">
            Location: {educationData.location}
          </div>
          <div className="education edu-degree">
            Degree: {educationData.degree}
          </div>
          <div className="education edu-start">
            Start Date: {educationData.start}
          </div>
          <div className="education edu-end">End Date: {educationData.end}</div>
          <div className="education edu-gpa">GPA: {educationData.gpa}</div>
        </div>
      </div>
    </>
  );
}

export default Info;
