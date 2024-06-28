import GeneralInput from './GeneralInput';
import { useState } from 'react';

function Resume() {
  const [general, setGeneral] = useState({
    name: '',
    address: '',
    number: '',
    email: '',
  });

  const handleGeneral = (newData) => {
    setGeneral(newData);
  };

  return (
    <>
      <h3 className="title">General Input:</h3>
      <h4>{general.name}</h4>
      <GeneralInput onHandleGeneral={handleGeneral} />
    </>
  );
}

export default Resume;
