"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import Input from "@/app/components/Input";
import Button from "@/app/components/Button";
import Select from "@/app/components/Select";
import { useRouter } from "next/navigation";
import { useFormContext } from "@/app/context/FormContext";

const ProfessionalInfoForm = () => {
  const { updateFormData } = useFormContext();
  const router = useRouter();

  const schema = Yup.object().shape({
    employeeID: Yup.string()
      .required("Employee ID is required")
      .max(10, "Employee ID must be less than 6 digits"),
    userName: Yup.string().required("User Name is required"),
    employeeType: Yup.string().required("Employee Type is required"),
    professionalemail: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    department: Yup.string().required("Department is required"),
    designation: Yup.string().required("Designation is required"),
    workingDays: Yup.string().required("Working days are required"),
    joiningDate: Yup.date().required("Joining Date is required"),
    officeLocation: Yup.string().required("Office Location is required"),
  });

  const { values, handleChange, handleSubmit, handleBlur, errors } = useFormik({
    initialValues: {
      employeeID: "",
      userName: "",
      employeeType: "",
      professionalemail: "",
      department: "",
      designation: "",
      workingDays: "",
      joiningDate: "",
      officeLocation: "",
    },
    validationSchema: schema,

    onSubmit: () => {
      updateFormData("professionalInfo", values);
      router.push("/homepage/add-new-user/documents-form");
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between gap-5 mb-5 w-full">
        <Input
          type="text"
          placeholder="Employee ID"
          name="employeeID"
          value={values.employeeID}
          onChange={handleChange}
          onBlur={handleBlur}
          className="flex-1 w-full p-3 text-sm"
          error={errors.employeeID}
        />

        <Input
          type="text"
          placeholder="User Name"
          name="userName"
          value={values.userName}
          onChange={handleChange}
          onBlur={handleBlur}
          className="flex-1 w-full p-3 text-sm"
          error={errors.userName}
        />
      </div>

      <div className="flex justify-between gap-5 mb-5 w-full">
        <Select
          name="employeeType"
          value={values.employeeType}
          onChange={handleChange}
          onBlur={handleBlur}
          className="p-3 border rounded-lg w-full"
          options={[
            { label: "Select Employee Type", value: "" },
            { label: "Full-Time", value: "Full-Time" },
            { label: "Part-Time", value: "Part-Time" },
            { label: "Contract", value: "Contract" },
          ]}
          error={errors.employeeType}
        />

        <Input
          type="email"
          placeholder="Email Address"
          name="professionalemail"
          value={values.professionalemail}
          onChange={handleChange}
          onBlur={handleBlur}
          className="flex-1 p-3 w-full text-sm"
          error={errors.professionalemail}
        />
      </div>

      <div className="flex justify-between gap-5 mb-5 w-full">
        <Select
          name="department"
          value={values.department}
          onChange={handleChange}
          onBlur={handleBlur}
          className="p-3 border rounded-lg w-full"
          error={errors.department}
          options={[
            { value: "", label: "Select Department" },
            { value: "HR", label: "HR" },
            { value: "IT", label: "IT" },
            { value: "Finance", label: "Finance" },
          ]}
        />

        <Input
          type="text"
          placeholder="Enter Designation"
          name="designation"
          value={values.designation}
          onChange={handleChange}
          onBlur={handleBlur}
          className="flex-1 p-3 text-sm"
          error={errors.designation}
        />
      </div>

      <div className="flex justify-between gap-5 mb-5 w-full">
        <Select
          name="workingDays"
          value={values.workingDays}
          onChange={handleChange}
          onBlur={handleBlur}
          className="p-3 border rounded-lg w-full"
          error={errors.workingDays}
          options={[
            { value: "", label: "Select Working Day" },
            { value: "5 Days", label: "5 Days" },
            { value: "6 Days", label: "6 Days" },
          ]}
        />

        <Input
          type="date"
          name="joiningDate"
          value={values.joiningDate}
          onChange={handleChange}
          onBlur={handleBlur}
          className="flex-1 p-3 text-sm"
          error={errors.joiningDate}
        />
      </div>

      <div className="flex justify-between gap-3 mb-5 w-full">
        <Select
          name="officeLocation"
          value={values.officeLocation}
          onChange={handleChange}
          onBlur={handleBlur}
          className="p-3 border rounded-lg w-full"
          error={errors.officeLocation}
          options={[
            { value: "", label: "Select Office Location" },
            { value: "New York", label: "New York" },
            { value: "London", label: "London" },
            { value: "Sydney", label: "Sydney" },
          ]}
        />
      </div>

      <div className="w-full flex justify-end gap-3">
        <Button type="button" className={"border bg-gray-200 text-black"}>
          Cancel
        </Button>
        <Button type="submit" className={"border bg-purple-600 text-white"}>
          Next
        </Button>
      </div>
    </form>
  );
};

export default ProfessionalInfoForm;
