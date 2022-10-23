import React from "react";
import CompanyInfo from "../../components/companyInfo/CompanyInfo";
import ContactUsForm from "../../components/ContactUsForm/ContactUsForm";
import Layout from "../../components/HOC/Layout";

const ContactUs = () => {
  return (
    <div className="mx-auto w-full">
      <div className="max-w-[1200px] mx-auto my-10 px-10">
        <h1 className="text-lg font-semibold mb-5 mt-10 py-5 border-b border-b-gray-300">
          ارتباط با ما
        </h1>
        <p>
          مطلب موردنیاز خود را نیافته اید؟ پیشنهاد یا انتقادی نسبت به سایت دارید
          ؟ درخواست یا سوالی دارید؟ از طریق فرم زیر با ما در تماس باشید.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-start items-start max-w-[1200px] mx-auto">
        <div className="md:mx-5 mx-auto my-5 md:my-10 md:py-10 w-5/6 md:w-1/2 lg:w-3/5">
          <CompanyInfo />
        </div>
        <div className=" my-5 md:my-10 md:mx-5 mx-auto w-5/6 md:w-1/2 lg:w-2/5">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default Layout(ContactUs);
