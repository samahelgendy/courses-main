import React from 'react'
import digital from '../assets/digital.jpg'
import {BsPersonVcard} from 'react-icons/bs'
const MarketingDigital  = () => {
  return (
    <>
      <div className="w-full  lg:h-96 h-auto flex lg:flex-row xs:flex-col mt-8 lg:px-12 xs:px-2 ">
        <div className="photo-section lg:w-[50%] xs:w-full h-full">
          <img
            className="w-full h-full rounded-r-md"
            src={digital}
            alt="digital"
          />
        </div>
        <div className="description lg:w-[50%] xs:w-full h-full flex flex-col  justify-start items-start lg:pr-12 xs:pr-0">
          <h2
            className="w-full text-3xl font-bold mt-6 font-main-font flex justify-start items-start "
            style={{ color: "#9d58b5" }}
          >
            اكاديمية زايا ZAYA ACADEMY
          </h2>
          <h3 className="font-bold text-[16px ] mt-2">
            دورات تعليمية مع شهادات اتمام
          </h3>
          <p className="w-10 h-10 flex justify-center items-center rounded-full my-4  bg-purple-500  hover:bg-purple-800">
            <BsPersonVcard size={16} />
          </p>
          <h3 className="font-bold text-xl mb-2 font-main-font">الاكاديمية</h3>
          <p className="w-full flex justify-start items-start">
            دورات تعليمية مع شهادات اتمام بعد الدورة من اكاديمية زايا zaya
            academy
          </p>
          <button className=" w-32 h-10 rounded-md mt-6 flex justify-center items-center font-main-font bg-purple-500 hover:bg-purple-800 ">
            اضغط هنا
          </button>
        </div>
      </div>
    </>
  );
}

export default MarketingDigital; 