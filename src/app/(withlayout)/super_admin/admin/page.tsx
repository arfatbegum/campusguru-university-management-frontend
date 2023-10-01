import UMBreadCrumb from "@/components/Ui/UMBreadCrumb";

const Admin = () => {
    return (
        <div>
            <UMBreadCrumb
                items={[
                    {
                        label: "Super Admin",
                        link: "/super_admin",
                    },
                    {
                        label: "Admin",
                        link: "/admin",
                    },
                ]}
            />
        </div>
    );
};

export default Admin;