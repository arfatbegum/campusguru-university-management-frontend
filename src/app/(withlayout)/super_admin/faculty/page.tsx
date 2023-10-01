import UMBreadCrumb from "@/components/Ui/UMBreadCrumb";

const Faculty = () => {
    return (
        <div>
               <UMBreadCrumb
                items={[
                    {
                        label: "Super Admin",
                        link: "/super_admin",
                    },
                    {
                        label: "Faculty",
                        link: "/faculty",
                    },
                ]}
            />
        </div>
    );
};

export default Faculty;