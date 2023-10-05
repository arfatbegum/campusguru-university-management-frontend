"use client"

import UMBreadCrumb from "@/components/Ui/UMBreadCrumb";
import { useAdminQuery } from "@/redux/api/adminApi";
import { IDProps } from "@/types";
import Image from "next/image";
import adminImage from "@/assets/admin.jpg"

const AdminDetails = ({ params }: IDProps) => {
    const { id } = params;
    const { data } = useAdminQuery(id);
    const fullName = `${data?.name?.firstName} ${data?.name?.middleName} ${data?.name?.lastName}`;

    console.log(data)
    return (
        <div >
            <UMBreadCrumb
                items={[
                    {
                        label: "Super Admin",
                        link: "/super_admin",
                    },
                    {
                        label: "Admin",
                        link: "/super_admin/admin",
                    },
                ]}
            />
            <h1 className="py-5 text-lg font-bold"> Admin Details</h1>
            <div className="bg-gray-100 h-screen  items-center justify-center p-2">
                <div className="bg-white p-8 rounded-lg shadow-md w-full">
                    <div className="relative">
                        <Image width={500} height={10} src={adminImage} alt="Banner Profile" className="w-full h-16 rounded-t-lg" />
                        <Image width={200} height={200} className="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-indigo-700" src={data?.profileImage} alt="John Doe" />
                    </div>
                    <div className="flex items-center justify-center mt-16">
                        <h2 className="text-xl font-bold text-gray-800">{ fullName}</h2>
                    </div>
                    <p className="text-gray-700 mt-2 text-center">{data?.designation}</p>
                    <hr className="my-4 border-t border-gray-300" />
                    <div className="p-2">
                        <table className="text-sm my-3">
                            <tbody className="flex">
                                <div>
                                    <tr>
                                        <td className="px-10 py-2 text-gray-700 font-bold">ID</td>
                                        <td className="px-10 py-2">{data?.id}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-10 py-2 text-gray-700 font-bold">Email</td>
                                        <td className="px-10 py-2">{data?.email}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-10 py-2 text-gray-700 font-bold">Contact No</td>
                                        <td className="px-10 py-2">{data?.contactNo}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-10 py-2 text-gray-700 font-bold">Management Department</td>
                                        <td className="px-10 py-2">{data?.managementDepartment?.title}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-10 py-2 text-gray-700 font-bold">Emergency Contact No</td>
                                        <td className="px-10 py-2">{data?.emergencyContactNo}</td>
                                    </tr>
                                </div>
                                <div>
                                    <tr>
                                        <td className="px-10 py-2 text-gray-700 font-bold">Present Address</td>
                                        <td className="px-10 py-2">{data?.presentAddress}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-10 py-2 text-gray-700 font-bold">Parmanent Address</td>
                                        <td className="px-10 py-2">{data?.permanentAddress}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-10 py-2 text-gray-700 font-bold">Date of Birth</td>
                                        <td className="px-10 py-2">{data?.dateOfBirth}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-10 py-2 text-gray-700 font-bold">Blood Group</td>
                                        <td className="px-10 py-2">{data?.bloodGroup}</td>
                                    </tr>
                                    <tr>
                                        <td className="px-10 py-2 text-gray-700 font-bold">Gender</td>
                                        <td className="px-10 py-2">{data?.gender}</td>
                                    </tr>
                                </div>
                            </tbody></table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminDetails;