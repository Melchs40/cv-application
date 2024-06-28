import { useState } from 'react';

function General({ onGeneralUpdate }) {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [email, setEmail] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
    onGeneralUpdate({ name: event.target.value }); // Update name in parent
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
    onGeneralUpdate({ address: event.target.value });
  };

  const handleNumberChange = (event) => {
    setNumber(event.target.value);
    onGeneralUpdate({ number: event.target.value }); // Update number in parent
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    onGeneralUpdate({ email: event.target.value }); // Update email in parent
  };

  const [showInputs, setShowInputs] = useState(true);
  const [buttonText, setButtonText] = useState('Save');

  const handleToggleInputs = () => {
    showInputs ? setButtonText('Edit') : setButtonText('Save');
    setShowInputs(!showInputs); // Toggle visibility
  };

  return (
    <div id="general-info">
      {showInputs && (
        <form>
          Please enter your information below:
          <input
            value={name}
            type="text"
            placeholder="Full Name"
            onChange={handleNameChange}
          />
          <input
            value={address}
            type="text"
            placeholder="Address"
            onChange={handleAddressChange}
          />
          <input
            value={number}
            type="tel"
            placeholder="Phone Number"
            onChange={handleNumberChange}
          />
          <input
            value={email}
            type="email"
            placeholder="Email Address"
            onChange={handleEmailChange}
          />
        </form>
      )}
      <button onClick={handleToggleInputs}>{buttonText}</button>
    </div>
  );
}

export default General;
