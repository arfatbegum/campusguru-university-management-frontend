import ActionBar from "@/components/Ui/ActionBar";
import UMBreadCrumb from "@/components/Ui/UMBreadCrumb";

const User = () => {
    return (
        <div>
               <UMBreadCrumb
                items={[
                    {
                        label: "Super Admin",
                        link: "/super_admin",
                    },
                    {
                        label: "User",
                        link: "/user",
                    },
                ]}
            />
              <ActionBar title="User List"/>
        </div>
    );
};

export default User;