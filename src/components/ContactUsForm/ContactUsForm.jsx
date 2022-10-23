import React from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
import * as Yup from "yup";

const initialValues = {
  fName: "",
  lName: "",
  phone: "",
  email: "",
  subject: "",
};

const validation = Yup.object().shape({
  email: Yup.string()
    .email("ایمیل وارد شده نامعتبر است")
    .required("پر کردن این فید الزامی است"),
  subject: Yup.string().required("پر کردن این فیلد الزامی است"),
});

const ContactUsForm = () => {
  return (
    <div className="flex flex-col justify-start items-start shadow-lg rounded-xl p-10">
      <h2 className="mb-7">فرم تماس با ما</h2>
      <Formik initialValues={initialValues} validationSchema={validation}>
        <Form className="w-full">
          <div className="w-full h-20">
            <Field
              name="fName"
              type="text"
              placeholder="نام"
              className="w-full p-3 border-b"
            />
            <ErrorMessage name="fName" />
          </div>
          <div className="w-full h-20">
            <Field
              name="lName"
              type="text"
              placeholder="نام خانوادگی"
              className="w-full p-3"
            />
            <ErrorMessage name="lName" />
          </div>
          <div className="w-full h-20">
            <Field
              name="phone"
              type="number"
              placeholder="شماره تماس"
              className="w-full p-3"
            />
            <ErrorMessage name="phone" />
          </div>
          <div className="w-full h-20">
            <Field
              name="email"
              type="email"
              placeholder="ایمیل"
              className="w-full p-3"
            />
            <span className="text-red-600 font-semibold  text-xs ">
              <ErrorMessage name="email" />
            </span>
          </div>
          <div className="w-full h-20">
            <Field
              component="textarea"
              name="subject"
              type="text"
              placeholder="توضیحات"
              className="resize-none w-full p-3 outline-none h-24 border-b-2 focus:border-b-blue-700 transition-colors duration-700"
            />
            <span className="text-red-600 font-semibold text-xs ">
              <ErrorMessage name="subject" />
            </span>
          </div>
          <button
            type="submit"
            className="mt-16 outline-none text-white bg-blue-700 px-5 py-3 rounded-3xl hover:shadow-lg hover:shadow-blue-300 transition-all duration-500 hover:bg-white hover:text-blue-700 "
          >
            ارسال
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactUsForm;
