window.global ||= window;

import { useState } from 'react';
import General from './General';
import Education from './Education';
import Experience from './Experience';

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

  const [experienceData, setExperienceData] = useState({
    company: '',
    location: '',
    title: '',
    start: '',
    end: '',
    description: '',
  });

  const handleExperienceUpdate = (data) => {
    setExperienceData({ ...experienceData, ...data });
  };

  return (
    <>
      <div className="input">
        <h3 className="general-input-title">General Information</h3>
        <General onGeneralUpdate={handleGeneralUpdate} />
        <h3 className="general-input-title">Education</h3>
        <Education onEducationUpdate={handleEducationUpdate} />
        <h3 className="general-input-title">Experience</h3>
        <Experience onExperienceUpdate={handleExperienceUpdate} />
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

        <div className="experience-section">
          <h2 className="experience-title">Experience</h2>
          <div className="experience exp-company">
            Company Name: {experienceData.company}
          </div>
          <div className="experience exp-location">
            Location: {experienceData.location}
          </div>
          <div className="experience exp-title">
            Title: {experienceData.title}
          </div>
          <div className="experience exp-start">
            Start Date: {experienceData.start}
          </div>
          <div className="experience exp-end">
            End Date: {experienceData.end}
          </div>
          <div className="experience exp-decription">
            Description: {experienceData.description}
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
