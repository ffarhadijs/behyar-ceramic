import React from "react";
import { Link } from "react-router-dom";
import footerImg from "../../assets/img/iranmvadfoot (1).svg";
import { TiTick } from "react-icons/ti";

const Footer = () => {
  return (
    <div className="w-full bg-[#999999] flex flex-col items-center justify-start pt-20 pb-6 px-6 xl:px-14 text-white mt-20 text-sm">
      <div className="flex flex-row justify-between items-center w-full xl:w-5/6 2xl:w-3/4 flex-wrap md:flex-nowrap">
        <div className="flex flex-col items-start justify-start w-full sm:w-2/5 md:w-48 lg:w-60 ">
          <span className="font-[800]">دسترسی سریع</span>
          <div className="flex flex-row items-center justify-around sm:justify-between w-full py-10">
            <div className="flex flex-col gap-2">
              <Link to="#">خانه</Link>
              <Link to="#">درباره ما</Link>
              <Link to="#">ارتباط با ما</Link>
              <Link to="#">همکاری با ما</Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="#">تبلیغات</Link>
              <Link to="#">فرم پرداخت</Link>
              <Link to="#">ثبت شرکت جدید</Link>
              <Link to="#">درج آگهی استخدام</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full sm:w-2/5 md:w-48 lg:w-60 ">
          <span className="font-[800]"> موضوعات مهم</span>
          <div className="flex flex-row items-center justify-around sm:justify-between w-full py-10">
            <div className="flex flex-col gap-2">
              <Link to="#">متالوژی</Link>
              <Link to="#">سرامیک</Link>
              <Link to="#">خوردگی</Link>
              <Link to="#">آرشیو ویدیوها</Link>
            </div>
            <div className="flex flex-col gap-2">
              <Link to="#">جوشکاری</Link>
              <Link to="#"> ریخته گری</Link>
              <Link to="#">ساخت و تولید</Link>
              <Link to="#"> اخبار استخدامی </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full md:w-80 lg:w-[480] ">
          <span className="font-[800]">مطالب را در ایمیل خود داشته باشید</span>
          <span className="pt-10 pb-5">
            خبرنامه ایران مواد با توجه به علاقه شما مقالات را برای شما را ارسال
            میکند
          </span>
          <div className="w-full overflow-hidden rounded-xl flex flex-row justify-start items-center bg-white h-[56px]">
            <input
              type="email"
              placeholder="ایمیل خود را وارد نمایید"
              className=" w-full outline-none placeholder:font-vazir text-gray-800 px-4 py-2 rounded-r-xl h-full font-vazir "
            />
            <button className="text-gray-700 text-2xl font-semibold bg-white h-[36px] px-2 w-10 rounded-l-xl hover:scale-125 transition-all duration-300 ">
              <TiTick />
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-start items-center w-full xl:w-5/6 2xl:w-3/4 my-10 flex-wrap md:flex-nowrap">
        <div className="w-full md:w-[600px]">
          <img
            src={footerImg}
            alt="footer img"
            className="w-auto h-auto mx-2"
          />
        </div>
        <div className="w-full md:w-auto pt-6">
          <p className="text-[14px] text-gray-200 leading-6">
            ایران مواد یک وبسایت محتوایی در حوزه مواد مهندسی است که از سال 1387
            فعالیت خود را با هدف توسعه فن و دانش مهندسی مواد در ایران آغاز نموده
            و همواره برای اعتلای آن تلاش می کند. ایران مواد همچنین یک دایرکتوری
            جامع از تجهیزات و مواد مهندسی فراهم ساخته که راهنمای منحصر بفردی
            برای صنعتگران، دانشگاهیان و تجار است. مخاطبان وبسایت ما، مهندسین،
            دانشگاهیان، صنعتگران و تجار حوزه های: متالورژی، ساخت و تولید، معدن،
            نفت و گاز، جوش، خوردگی و حفاظت، نانو، سرامیک و نسوز، شیمی و سایر
            حوزه های مرتبط هستند. (( در ایران مواد همه چیز رایگان است و برای
            استفاده از هزاران صفحه اطلاعات علمی آن نیاز به پرداخت هزینه نیست ))
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
