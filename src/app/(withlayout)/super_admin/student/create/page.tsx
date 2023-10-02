"use client";
import StepperForm from "@/components/StepperForm/StepperForm";
import GuardianInfo from "@/components/StudentForms/GuardianInfo";
import LocalGuardianInfo from "@/components/StudentForms/LocalGuardianInfo";
import StudentBasicInfo from "@/components/StudentForms/StudentBasicInfo";
import StudentInfo from "@/components/StudentForms/StudentInfo";

const CreateStudent = () => {
    const steps = [
        {
            title: "Student Information",
            content: <StudentInfo />,
        },
        {
            title: "Basic Information",
            content: <StudentBasicInfo />,
        },
        {
            title: "Guardian Information",
            content: <GuardianInfo />,
        },
        {
            title: "Local Guardian Information",
            content: <LocalGuardianInfo />,
        },
    ];

    const handleStudentSubmit = async (data: any) => {
        try {
            console.log(data);
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <div>
            <StepperForm
                submitHandler={(value) => {
                    handleStudentSubmit(value);
                }}
                steps={steps}
            />
        </div>
    );
};

export default CreateStudent;