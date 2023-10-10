import { useSemesterRegistrationsQuery } from "@/redux/api/semesterRegistrationApi";
import FormSelectField, { SelectOptions } from "./FormSelectField";

type SemesterRegistrationProps = {
  name: string;
  label: string;
};

const SemesterRegistrationField = ({ name, label }: SemesterRegistrationProps) => {
    const { data } = useSemesterRegistrationsQuery({
        limit: 10,
        page: 1,
    });

    const semesterRegistrations = data?.semesterRegistrations;
    const semesterRegistrationsOptions = semesterRegistrations?.map(
        (semester) => {
            return {
                label: semester?.academicSemester?.title,
                value: semester?.id,
            };
        }
    );


  return (
    <FormSelectField
      name={name}
      label={label}
      options={semesterRegistrationsOptions as SelectOptions[]}
    />
  );
};

export default SemesterRegistrationField;