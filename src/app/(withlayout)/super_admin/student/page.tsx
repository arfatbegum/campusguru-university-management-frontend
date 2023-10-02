import ActionBar from "@/components/Ui/ActionBar";
import UMBreadCrumb from "@/components/Ui/UMBreadCrumb";
import Link from "next/link";

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
            <ActionBar title="Student List">
                <Link href="/super_admin/student/create">
                    <button className="bg-indigo-700 px-4 py-2 text-white rounded font-semibold float-right">Create Student</button>
                </Link>
            </ActionBar>
        </div>
    );
};

export default Student;