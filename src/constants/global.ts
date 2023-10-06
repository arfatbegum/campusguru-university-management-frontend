export const genderOptions = [
    {
        label: "Male",
        value:"male"
    },
    {
        label: "Female",
        value:"female"
    },
    {
        label: "Others",
        value:"others"
    },
]

export const bloodGroupOptions = [
	{
		label: 'A+',
		value: 'A+',
	},
	{
		label: 'A-',
		value: 'A-',
	},
	{
		label: 'B+',
		value: 'B+',
	},
	{
		label: 'B-',
		value: 'B-',
	},
	{
		label: 'AB+',
		value: 'AB+',
	},
	{
		label: 'AB-',
		value: 'AB-',
	},
	{
		label: 'O+',
		value: 'O+',
	},
	{
		label: 'O-',
		value: 'O-',
	},
];


export const semesterOptions = [
	{
	  label: "Autumn",
	  value: "Autumn",
	},
	{
	  label: "Summer",
	  value: "Summer",
	},
	{
	  label: "Fall",
	  value: "Fall",
	},
];
  
export const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];
  
  export const monthOptions = months.map((month: string) => {
	return {
	  label: month,
	  value: month,
	};
  });