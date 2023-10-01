import UMBreadCrumb from "@/components/Ui/UMBreadCrumb";

const ChangedPassword = () => {
    return (
        <div>
             <UMBreadCrumb
                items={[
                    {
                        label: "Super Admin",
                        link: "/super_admin",
                    },
                    {
                        label: "Change Password",
                        link: "/change_password",
                    },
                ]}
            />
        </div>
    );
};

export default ChangedPassword;