import GeneralInput from './GeneralInput';
import EducationInput from './EducationInput';

export default function InputContainer({
  setGeneralInfo,
  setEducationInfo,
  educationInfo,
}) {
  return (
    <div>
      <GeneralInput setGeneralInfo={setGeneralInfo} />
      <EducationInput
        setEducationInfo={setEducationInfo}
        educationInfo={educationInfo}
      />
    </div>
  );
}
