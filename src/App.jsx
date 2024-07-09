import Title from './components/Title';
import InputContainer from './components/InputContainer';
import ResumeContainer from './components/ResumeContainer';
import { useState } from 'react';

export default function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    address: '',
    number: '',
    email: '',
  });
  const [educationInfo, setEducationInfo] = useState([]);
  return (
    <>
      <Title />
      <InputContainer
        setGeneralInfo={setGeneralInfo}
        setEducationInfo={setEducationInfo}
        educationInfo={educationInfo}
      />
      <ResumeContainer
        generalInfo={generalInfo}
        educationInfo={educationInfo}
      />
    </>
  );
}
