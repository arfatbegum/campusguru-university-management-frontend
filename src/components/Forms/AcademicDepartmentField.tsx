import { useAcademicDepartmentsQuery } from "@/redux/api/academic/departmentApi";
import FormSelectField, { SelectOptions } from "./FormSelectField";

type AcademicDepartmentFieldProps = {
  name: string;
  label?: string;
};

const AcademicDepartmentField = ({
  name,
  label,
}: AcademicDepartmentFieldProps) => {
  const { data } = useAcademicDepartmentsQuery({
    limit: 100,
    page: 1,
  });
  const academicDepartments = data?.academicDepartments;
  const academicDepartmentOptions = academicDepartments?.map((academicDepartment) => {
    return {
      label: academicDepartment?.title,
      value: academicDepartment?.id,
    };
  });

  return (
    <FormSelectField
      name={name}
      label={label}
      options={academicDepartmentOptions as SelectOptions[]}
    />
  );
};

export default AcademicDepartmentField;