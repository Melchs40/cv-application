export default function ResumeGeneral({ generalInfo }) {
  return (
    <>
      <h1>General Info</h1>
      <h3>{generalInfo.name}</h3>
      <h3>{generalInfo.address}</h3>
      <h3>{generalInfo.number}</h3>
      <h3>{generalInfo.email}</h3>
    </>
  );
}
