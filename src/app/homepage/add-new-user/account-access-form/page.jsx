"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/app/components/Button";
import Input from "@/app/components/Input";
import { useFormContext } from "@/app/context/FormContext";
import { useRouter } from "next/navigation";

const AccountAccessForm = () => {
  const { updateFormData } = useFormContext();
  const formData = JSON.parse(localStorage.getItem("formData")) || {};
  console.log("formData:", formData);
  const router = useRouter();
  const { values, handleBlur, handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      accessemail: "",
      slackID: "",
      skypeID: "",
      githubID: "",
    },
    validationSchema: Yup.object({
      accessemail: Yup.string()
        .email("Invalid email address")
        .required("Email address is required"),
      slackID: Yup.string().required("Slack ID is required"),
      skypeID: Yup.string().required("Skype ID is required"),
      githubID: Yup.string().required("GitHub ID is required"),
    }),
    onSubmit: () => {
      updateFormData("accountAccess", values);
      router.push("/homepage/summary");
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-5 mb-3 w-full">
        <Input
          type="email"
          placeholder="Enter Email Address"
          name="accessemail"
          value={values.accessemail}
          onChange={handleChange}
          onBlur={handleBlur}
          className={"px-3 py-3 w-full rounded-lg"}
          error={errors.accessemail}
        />

        <Input
          type="text"
          placeholder="Enter Slack ID"
          name="slackID"
          value={values.slackID}
          onChange={handleChange}
          onBlur={handleBlur}
          className={"px-3 py-3 w-full rounded-lg"}
          error={errors.slackID}
        />
      </div>

      <div className="flex gap-5 w-full">
        <Input
          type="text"
          placeholder="Enter Skype ID"
          name="skypeID"
          value={values.skypeID}
          onChange={handleChange}
          onBlur={handleBlur}
          className={"px-3 py-3 w-full rounded-lg"}
          error={errors.skypeID}
        />

        <Input
          type="text"
          placeholder="Enter Github ID"
          name="githubID"
          value={values.githubID}
          onChange={handleChange}
          onBlur={handleBlur}
          className={"px-3 py-3 w-full rounded-lg"}
          error={errors.githubID}
        />
      </div>

      <div className="w-full flex justify-end gap-3 mt-3">
        <Button type="button" className={"border bg-gray-200 text-black"}>
          Cancel
        </Button>
        <Button type="submit" className={"border bg-purple-600 text-white"}>
          Add
        </Button>
      </div>
    </form>
  );
};

export default AccountAccessForm;
