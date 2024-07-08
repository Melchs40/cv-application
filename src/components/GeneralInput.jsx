export default function GeneralInput({ setGeneralInfo }) {
  let name = '';
  function handleName(e) {
    name = e.target.value;
  }

  let address = '';
  function handleAddress(e) {
    address = e.target.value;
  }

  let number = '';
  function handleNumber(e) {
    number = e.target.value;
  }

  let email = '';
  function handleEmail(e) {
    email = e.target.value;
  }

  function handleClick(e) {
    e.preventDefault();
    setGeneralInfo({
      name: name,
      address: address,
      number: number,
      email: email,
    });
  }

  return (
    <div>
      <div>General Information</div>
      <form action="">
        <input
          type="text"
          placeholder="Full Name"
          onChange={(e) => handleName(e)}
        />
        <input
          type="text"
          placeholder="Address"
          onChange={(e) => handleAddress(e)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          onChange={(e) => handleNumber(e)}
        />
        <input
          type="text"
          placeholder="Email Address"
          onChange={(e) => handleEmail(e)}
        />
        <button onClick={(e) => handleClick(e)} type="submit">
          Save
        </button>
      </form>
    </div>
  );
}
