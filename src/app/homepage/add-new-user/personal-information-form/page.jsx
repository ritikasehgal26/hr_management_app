"use client";
// import "../personal.module.css";
import { useRouter } from "next/navigation";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { useFormik } from "formik";
import * as yup from "yup";
import Select from "@/app/components/Select";
import { useFormContext } from "@/app/context/FormContext";

const PersonalInfoForm = () => {
  const router = useRouter();
  const { updateFormData } = useFormContext();
  const schema = yup.object().shape({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    mobile: yup
      .string()
      .matches(/^[0-9]+$/, "Mobile number must be digits")
      .min(10, "Mobile number must be at least 10 digits")
      .max(10, "Mobile number must be less than 10 digits")
      .required("Mobile number is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    dob: yup.string().required("Date of Birth is required"),
    maritalStatus: yup.string().required("Marital Status is required"),
    gender: yup.string().required("Gender is required"),
    nationality: yup.string().required("Nationality is required"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
    zipCode: yup
      .string()
      .matches(/^[0-9]+$/, "ZIP Code must be digits")
      .required("ZIP Code is required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    mobile: "",
    email: "",
    dob: "",
    maritalStatus: "",
    gender: "",
    nationality: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
  };

  const { values, handleChange, handleSubmit, errors } = useFormik({
    initialValues: initialValues,
    validationSchema: schema,
    onSubmit: () => {
      updateFormData("personalInfo", values);
      // localStorage.setItem("personalData", JSON.stringify(values));
      router.push("/homepage/add-new-user/professional-information-form");
    },
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-5 mb-3">
          <Input
            type="text"
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
            value={values.firstName}
            error={errors.firstName}
            className="w-full p-3 border text-base"
          />
          <Input
            type="text"
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
            className="w-full p-3 border text-base"
            value={values.lastName}
            error={errors.lastName}
          />
        </div>

        <div className="flex gap-5 mb-3">
          <Input
            type="number"
            placeholder="Mobile Number"
            name="mobile"
            onChange={handleChange}
            value={values.mobile}
            className="w-full p-3 border text-base"
            error={errors.mobile}
          />
          <Input
            type="email"
            placeholder="Email Address"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="w-full p-3 border text-base"
            error={errors.email}
          />
        </div>

        <div className="flex gap-5 mb-3">
          <Input
            type="date"
            name="dob"
            value={values.dob}
            onChange={handleChange}
            className="w-full p-3 border text-base"
            error={errors.dob}
          />
          <Select
            name="maritalStatus"
            onChange={handleChange}
            value={values.maritalStatus}
            placeholder={"Marital Status"}
            className="w-full p-3 border rounded-lg text-base"
            error={errors.maritalStatus}
            options={[
              { value: "Marital Status", label: "Marital Status" },
              { value: "Married", label: "Married" },
              { value: "Single", label: "Single" },
            ]}
          />
        </div>

        <div className="flex gap-5 mb-3">
          <Select
            name="gender"
            onChange={handleChange}
            value={values.gender}
            className="w-full border rounded-lg p-3 text-base"
            error={errors.gender}
            options={[
              { value: "Gender", label: "Gender" },
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
              { value: "Other", label: "Other" },
            ]}
          />
          <Input
            type="text"
            placeholder="Nationality"
            name="nationality"
            onChange={handleChange}
            value={values.nationality}
            className="w-full p-3 border text-base"
            error={errors.nationality}
          />
        </div>

        <div className="flex gap-5 mb-3">
          <Input
            type="text"
            placeholder="Address"
            name="address"
            onChange={handleChange}
            value={values.address}
            className="w-full p-3 border text-base"
            error={errors.address}
          />
        </div>

        <div className="flex gap-5 mb-3">
          <Input
            type="text"
            placeholder="City"
            name="city"
            onChange={handleChange}
            value={values.city}
            className="w-full p-3 border text-base"
            error={errors.city}
          />
          <Input
            type="text"
            placeholder="State"
            name="state"
            onChange={handleChange}
            value={values.state}
            className="w-full p-3 border text-base"
            error={errors.state}
          />
          <Input
            type="text"
            placeholder="ZIP Code"
            name="zipCode"
            onChange={handleChange}
            value={values.zipCode}
            className="w-full p-3 border text-base"
            error={errors.zipCode}
          />
        </div>
        <div className="w-full flex justify-end gap-3">
          <Button className={"border bg-gray-200 text-black"}>Cancel</Button>
          <Button type={"submit"} className={"border bg-purple-600 text-white"}>
            Next
          </Button>
        </div>
      </form>
    </>
  );
};

export default PersonalInfoForm;
