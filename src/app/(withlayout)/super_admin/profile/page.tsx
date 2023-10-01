import UMBreadCrumb from "@/components/Ui/UMBreadCrumb";

const Profile = () => {
    return (
        <div>
               <UMBreadCrumb
                items={[
                    {
                        label: "Super Admin",
                        link: "/super_admin",
                    },
                    {
                        label: "Profile",
                        link: "/profile",
                    },
                ]}
            />
        </div>
    );
};

export default Profile;