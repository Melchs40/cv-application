import { useState } from 'react';

function GeneralInput({ onHandleGeneral }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <>
      <div className="form-container">
        <form action="" className="general-info-form">
          <input
            type="text"
            value={name}
            placeholder="Full Name"
            onChange={handleNameChange}
          />
          <input
            type="text"
            value={address}
            placeholder="Address"
            onChange={handleAddressChange}
          />
          <input
            type="text"
            value={number}
            placeholder="Phone Number"
            onChange={handleNumberChange}
          />
          <input
            type="text"
            value={email}
            placeholder="Email"
            onChange={handleEmailChange}
          />
        </form>
        <button
          className="submit-general"
          onClick={() => onHandleGeneral({ name, address, number, email })}
        >
          Save
        </button>
      </div>
    </>
  );
}
export default GeneralInput;
