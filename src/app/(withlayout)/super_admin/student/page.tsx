import UMBreadCrumb from "@/components/Ui/UMBreadCrumb";

const Student = () => {
    return (
        <div>
               <UMBreadCrumb
                items={[
                    {
                        label: "Super Admin",
                        link: "/super_admin",
                    },
                    {
                        label: "Student",
                        link: "/student",
                    },
                ]}
            />
        </div>
    );
};

export default Student;