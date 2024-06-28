import { useState } from 'react';

window.global ||= window;

function Experience({ onExperienceUpdate }) {
  const [company, setCompany] = useState('');
  const [location, setLocation] = useState('');
  const [title, setTitle] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [description, setDescription] = useState('');

  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
    onExperienceUpdate({ company: event.target.value });
  };
  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    onExperienceUpdate({ location: event.target.value });
  };
  const handleTitleChange = (event) => {
    setTitle(event.target.value);
    onExperienceUpdate({ title: event.target.value });
  };
  const handleStartChange = (event) => {
    setStart(event.target.value);
    onExperienceUpdate({ start: event.target.value });
  };
  const handleEndChange = (event) => {
    setEnd(event.target.value);
    onExperienceUpdate({ end: event.target.value });
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
    onExperienceUpdate({ description: event.target.value });
  };

  return (
    <>
      <div className="experience-info">
        <form action=""></form>
        <input
          type="text"
          value={company}
          placeholder="Microsoft"
          onChange={handleCompanyChange}
        />
        <input
          type="text"
          value={location}
          placeholder="Seattle, WA"
          onChange={handleLocationChange}
        />
        <input
          type="text"
          value={title}
          placeholder="Web Developer"
          onChange={handleTitleChange}
        />
        <input
          type="text"
          value={start}
          placeholder="06/02/2024"
          onChange={handleStartChange}
        />
        <input
          type="text"
          value={end}
          placeholder="current"
          onChange={handleEndChange}
        />
        <textarea
          value={description}
          placeholder="I love my job"
          onChange={handleDescriptionChange}
        />
      </div>
    </>
  );
}

export default Experience;
