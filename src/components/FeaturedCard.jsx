import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import {BsBagCheck} from 'react-icons/bs'
import imageCard from '../assets/imageCard.jpg'
const FeaturedCard = ({ serves }) => {
  return (
    <div className="Card md:w-60 w-full h-[360px] border-purple-500 border-2 flex flex-col  rounded-md mr-2 lg:mb-2 mb-4">
      <div className="cardPhoto w-full h-[60%] rounded-md">
        <img
          className="w-full h-full rounded-md"
          src={serves.photo}
          alt="cardPhoto"
        />
      </div>
      <p className=" w-full h-6 flex justify-start items-center font-bold font-main-font text-[13px] text-purple-700 px-2 mt-2 ">
        {serves.name}
      </p>
      <p className=" w-full h-6 flex justify-start items-center font-bold font-main-font text-[12px] text-gray-500 px-2 ">
        اختر عدد المنتجات من الداخل
      </p>
      <p className=" w-full h-6 mb-2 flex justify-start items-center font-bold font-main-font text-[14px] text-purple-700 px-2 mt-2 ">
        {serves.price}
      </p>
      <div className="Btns w-full h-8 flex justify-center items-center px-2 mb-2">
        <button className="w-[70%] h-full flex justify-center items-center text-[12px] bg-orange-600 hover:bg-orange-400 text-white rounded-md">
          <BsBagCheck className="ml-2" /> اضف للسله
        </button>
        <p className="w-[20%] h-full flex justify-center items-center cursor-pointer">
          <AiOutlineHeart size={20} />
        </p>
      </div>
    </div>
  );
};

export default FeaturedCard