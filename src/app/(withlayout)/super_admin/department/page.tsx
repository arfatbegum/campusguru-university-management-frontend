import UMBreadCrumb from "@/components/Ui/UMBreadCrumb";

const Department = () => {
    return (
        <div>
               <UMBreadCrumb
                items={[
                    {
                        label: "Super Admin",
                        link: "/super_admin",
                    },
                    {
                        label: "Department",
                        link: "/department",
                    },
                ]}
            />
        </div>
    );
};

export default Department;