import ActionBar from "@/components/Ui/ActionBar";
import UMBreadCrumb from "@/components/Ui/UMBreadCrumb";
import Link from "next/link";

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
            <ActionBar title="Department List">
                <Link href="/super_admin/department/create">
                    <button className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold float-right">Create Department</button>
                </Link>
            </ActionBar>
        </div>
    );
};

export default Department;