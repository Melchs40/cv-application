export default function ResumeGeneral({ generalInfo }) {
  return (
    <>
      <h1>{generalInfo.name}</h1>
      <h2>{generalInfo.address}</h2>
      <h2>{generalInfo.number}</h2>
      <h3>{generalInfo.email}</h3>
    </>
  );
}
