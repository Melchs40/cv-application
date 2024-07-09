import ResumeGeneral from './ResumeGeneral';
import ResumeEducation from './ResumeEducation';

export default function ResumeContainer({ generalInfo, educationInfo }) {
  return (
    <>
      <ResumeGeneral generalInfo={generalInfo} />
      <ResumeEducation educationInfo={educationInfo} />
    </>
  );
}
