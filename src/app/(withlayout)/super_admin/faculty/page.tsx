import ActionBar from "@/components/Ui/ActionBar";
import UMBreadCrumb from "@/components/Ui/UMBreadCrumb";
import Link from "next/link";

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
               <ActionBar title="Faculty List">
                <Link href="/super_admin/faculty/create">
                    <button className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold float-right">Create Faculty</button>
                </Link>
            </ActionBar>
        </div>
    );
};

export default Faculty;