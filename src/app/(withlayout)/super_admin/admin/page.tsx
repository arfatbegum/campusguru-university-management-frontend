import ActionBar from "@/components/Ui/ActionBar";
import UMBreadCrumb from "@/components/Ui/UMBreadCrumb";
import Link from "next/link";

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
            <ActionBar title="Admin List">
                <Link href="/super_admin/admin/create">
                    <button className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold float-right">Create Admin</button>
                </Link>
            </ActionBar>
        </div>
    );
};

export default Admin;