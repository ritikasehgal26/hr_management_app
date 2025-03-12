"use client";

import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/app/components/Button";
import { UploadCloud } from "lucide-react";
import Input from "@/app/components/Input";
import { useRouter } from "next/navigation";
// import "../personal.module.css";
import { useFormContext } from "@/app/context/FormContext";

const UploadBox = ({ title, name, formik }) => {
  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    formik.setFieldValue(name, file);
  };

  return (
    <div className="border-2 border-dashed rounded-lg p-3 text-center w-full">
      <h3 className="mb-2 font-medium">{title}</h3>
      <label className="cursor-pointer p-4 bg-gray-50 rounded-lg hover:bg-gray-100 block">
        <Input
          type="file"
          accept=".jpeg,.jpg,.pdf"
          className="hidden"
          onChange={handleFileChange}
        />
        <UploadCloud className="mx-auto text-gray-400" size={32} />
        <p className="text-sm text-gray-600">
          Drag & Drop or <span className="text-blue-500">choose file</span> to
          upload
        </p>
        <p className="text-xs text-gray-400">Supported formats: .jpeg, .pdf</p>
      </label>
      {formik.values[name] && (
        <p className="mt-2 text-sm text-gray-500">
          Selected file: {formik.values[name].name}
        </p>
      )}
      {formik.touched[name] && formik.errors[name] && (
        <p className="text-red-500 text-sm mt-1">{formik.errors[name]}</p>
      )}
    </div>
  );
};

export default function FileUpload() {
  const { updateFormData } = useFormContext();

  const router = useRouter();
  const validationSchema = Yup.object({
    appointmentLetter: Yup.mixed()
      .required("Appointment Letter is required")
      .test(
        "fileSize",
        "File too large (Max 2MB)",
        (value) => !value || value.size <= 2 * 1024 * 1024
      )
      .test(
        "fileFormat",
        "Invalid file format (Only jpeg, pdf)",
        (value) =>
          !value || ["image/jpeg", "application/pdf"].includes(value.type)
      ),
    salarySlips: Yup.mixed()
      .required("Salary Slips are required")
      .test(
        "fileSize",
        "File too large (Max 2MB)",
        (value) => !value || value.size <= 2 * 1024 * 1024
      )
      .test(
        "fileFormat",
        "Invalid file format (Only jpeg, pdf)",
        (value) =>
          !value || ["image/jpeg", "application/pdf"].includes(value.type)
      ),
    relivingLetter: Yup.mixed()
      .required("Relieving Letter is required")
      .test(
        "fileSize",
        "File too large (Max 2MB)",
        (value) => !value || value.size <= 2 * 1024 * 1024
      )
      .test(
        "fileFormat",
        "Invalid file format (Only jpeg, pdf)",
        (value) =>
          !value || ["image/jpeg", "application/pdf"].includes(value.type)
      ),
    experienceLetter: Yup.mixed()
      .required("Experience Letter is required")
      .test(
        "fileSize",
        "File too large (Max 2MB)",
        (value) => !value || value.size <= 2 * 1024 * 1024
      )
      .test(
        "fileFormat",
        "Invalid file format (Only jpeg, pdf)",
        (value) =>
          !value || ["image/jpeg", "application/pdf"].includes(value.type)
      ),
  });

  const formik = useFormik({
    initialValues: {
      appointmentLetter: null,
      salarySlips: null,
      relivingLetter: null,
      experienceLetter: null,
    },
    validationSchema,
    onSubmit: () => {
      updateFormData("documents", {
        appointmentLetter: formik.values.appointmentLetter.name,
        salarySlips: formik.values.salarySlips.name,
        relivingLetter: formik.values.relivingLetter.name,
        experienceLetter: formik.values.experienceLetter.name,
      });
      // localStorage.setItem("documentsData", JSON.stringify(formik.values));
      console.log("formik.values:", formik.values);
      router.push("/homepage/add-new-user/account-access-form");
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="py-2 px-8 mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UploadBox
          title="Upload Appointment Letter"
          name="appointmentLetter"
          formik={formik}
        />
        <UploadBox
          title="Upload Salary Slips"
          name="salarySlips"
          formik={formik}
        />
        <UploadBox
          title="Upload Relieving Letter"
          name="relivingLetter"
          formik={formik}
        />
        <UploadBox
          title="Upload Experience Letter"
          name="experienceLetter"
          formik={formik}
        />
      </div>
      <div className="w-full flex justify-end gap-3 mt-8">
        <Button type="button" className="border bg-gray-200 text-black">
          Cancel
        </Button>
        <Button type="submit" className="border bg-purple-600 text-white">
          Next
        </Button>
      </div>
    </form>
  );
}
