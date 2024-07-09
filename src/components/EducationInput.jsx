import EducationForm from './EducationForm';
import { useState } from 'react';

export default function EducationInput({ setEducationInfo, educationInfo }) {
  const [educationForms, setEducationForms] = useState([]);
  const [showEducation, setShowEducation] = useState(false);

  let edu = (
    <EducationForm
      setEducationInfo={setEducationInfo}
      educationInfo={educationInfo}
    />
  );

  function handleClick() {
    setShowEducation(true);
    setEducationForms((educationForms) => [...educationForms, edu]);
  }
  return (
    <>
      {showEducation && educationForms}
      <button onClick={handleClick}>Add Education</button>
    </>
  );
}
