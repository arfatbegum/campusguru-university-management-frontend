import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  AppstoreOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
  UsergroupAddOutlined
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "./role";


export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined style={{ fontSize: '18px', color: '#4338ca' }} />,
      children: [
        {
          label: <Link href={`/${role}/profile`}>Account Profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/change_password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/${role}/student`}>Students</Link>,
      icon: <UsergroupAddOutlined style={{ fontSize: '18px', color: '#4338ca' }} />,
      key: `/${role}/manage-student`,
    },
    {
      label: <Link href={`/${role}/faculty`}>Faculty</Link>,
      icon: <UsergroupAddOutlined style={{ fontSize: '18px', color: '#4338ca' }} />,
      key: `/${role}/manage-faculty`,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: "Manage Academic",
      key: "manage-academic",
      icon: <TableOutlined style={{ fontSize: '18px', color: '#4338ca' }} />,
      children: [
        {
          label: <Link href={`/${role}/academic/faculty`}>Faculties</Link>,
          key: `/${role}/academic/faculty`,
        },
        {
          label: <Link href={`/${role}/academic/department`}>Departments</Link>,
          key: `/${role}/academic/department`,
        },
        {
          label: <Link href={`/${role}/academic/semester`}>Semesters</Link>,
          key: `/${role}/academic/semester`,
        },
      ],
    },
    {
      label: "Management",
      key: "management",
      icon: <AppstoreOutlined style={{ fontSize: '18px', color: '#4338ca' }} />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
        {
          label: <Link href={`/${role}/building`}>Building</Link>,
          key: `/${role}/building`,
        },
        {
          label: <Link href={`/${role}/room`}>Rooms</Link>,
          key: `/${role}/room`,
        },
        {
          label: <Link href={`/${role}/course`}>Course</Link>,
          key: `/${role}/course`,
        },
        {
          label: (
            <Link href={`/${role}/semester_registration`}>
              Semester registration
            </Link>
          ),
          key: `/${role}/semester_registration`,
        },
        {
          label: <Link href={`/${role}/offered_course`}>Offered courses</Link>,
          key: `/${role}/offered-course`,
        },
        {
          label: (
            <Link href={`/${role}/offered_course_section`}>
              Course sections
            </Link>
          ),
          key: `/${role}/offered_course_section`,
        },
        {
          label: (
            <Link href={`/${role}/offered_course_schedule`}>
              Course schedules
            </Link>
          ),
          key: `/${role}/offered_course_schedule`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: <Link href={`/${role}/admin`}>Admin</Link>,
      icon: <TableOutlined style={{ fontSize: '18px', color: '#4338ca' }} />,
      key: `/${role}/admin`,
    },
    {
      label: <Link href={`/${role}/user`}>User</Link>,
      icon: <TableOutlined style={{ fontSize: '18px', color: '#4338ca' }} />,
      key: `/${role}/user`,
    },
    {
      label: "Management",
      key: "management",
      icon: <AppstoreOutlined style={{ fontSize: '18px', color: '#4338ca' }} />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
      ],
    },
  ];

  const facultySidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      icon: <TableOutlined style={{ fontSize: '18px', color: '#4338ca' }} />,
      key: `/${role}/courses`,
    },
  ];

  const studentSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/courses`}>Courses</Link>,
      icon: <TableOutlined style={{ fontSize: '18px', color: '#4338ca' }} />,
      key: `/${role}/courses`,
    },
    {
      label: <Link href={`/${role}/courses/schedule`}>Course schedules</Link>,
      icon: <ScheduleOutlined style={{ fontSize: '18px', color: '#4338ca' }} />,
      key: `/${role}/courses/schedule`,
    },
    {
      label: <Link href={`/${role}/registration`}>Registration</Link>,
      icon: <ThunderboltOutlined style={{ fontSize: '18px', color: '#4338ca' }} />,
      key: `/${role}/registration`,
    },
    {
      label: <Link href={`/${role}/payment`}>Payment</Link>,
      icon: <CreditCardOutlined style={{ fontSize: '18px', color: '#4338ca' }} />,
      key: `/${role}/payment`,
    },
    {
      label: <Link href={`/${role}/academic_report`}>Academic report</Link>,
      icon: <FileTextOutlined style={{ fontSize: '18px', color: '#4338ca' }} />,
      key: `/${role}/academic-report`,
    },
  ];

  if (role === USER_ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === USER_ROLE.ADMIN) return adminSidebarItems;
  else if (role === USER_ROLE.FACULTY) return facultySidebarItems;
  else if (role === USER_ROLE.STUDENT) return studentSidebarItems;
  else {
    return defaultSidebarItems;
  }
};