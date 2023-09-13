import {  Button, Spin, Typography, message } from 'antd';
import React, { useEffect, useState } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import {BsBagCheck} from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { AddToCart } from '../API';
import { addToCart } from '../../app/features/CartSlice';
import { findProducts } from '../../app/features/CartSlice';
import {HeartFilled} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const FeaturedCard = ({ serves }) => {
    const{t , i18n} = useTranslation();
    if(i18n.language == "en"){
  return (
   
    <div style={{width:'200px'}} className="Card md:w-60 w-full h-[360px]  flex flex-col  rounded-md mr-2 lg:mb-2 mb-2 ml-2">
    <div className="cardPhoto w-full h-[50%] rounded-md">
      <img
        className="cardImg w-full h-full rounded-md"
        src={serves.photo}
        alt="cardPhoto"
      />
    </div>
    <p className=" w-full h-6 flex justify-start items-center font-bold font-main-font text-[13px] text-purple-700 px-2 mt-5 ">
      {serves.category}
    </p>
    <p className=" w-full h-6 flex justify-start items-center font-bold font-main-font text-[12px] text-gray-500 px-2 mt-3 ">
    {serves.name}
    </p>
    <div className=' w-full flex justify-start' >
     <p  className="h-6 mb-2  font-bold font-main-font text-[14px] text-purple-700 px-2 mt-2 ">
      {serves.price}
    </p>
    <p  className=" h-6 mb-2 font-main-font text-[14px] text-purple-700 px-2 mt-2" style={{color: 'rgb(247, 169, 182)',textDecoration:' line-through'}}>
      {serves.priceOld}
    </p>
     </div>
    <div className="Btns w-full h-8 flex justify-center items-center px-2 mb-2">
    <AddToCartButton item={serves} />
    <ChangeStyle />
    </div>
  </div>
  
  );
}else{
  return (
   
    <div style={{width:'200px'}} className="Card md:w-60 w-full h-[360px]  flex flex-col  rounded-md mr-2 lg:mb-2 mb-2 ml-2">
    <div className="cardPhoto w-full h-[50%] rounded-md">
      <img
        className="cardImg w-full h-full rounded-md"
        src={serves.photo}
        alt="cardPhoto"
      />
    </div>
    <p className=" w-full h-6 flex justify-start items-center font-bold font-main-font text-[13px] text-purple-700 px-2 mt-5 ">
      {serves.category_ar}
    </p>
    <p className=" w-full h-6 flex justify-start items-center font-bold font-main-font text-[12px] text-gray-500 px-2 mt-3 ">
    {serves.name_ar}
    </p>
    <div className=' w-full flex justify-start' >
     <p  className="h-6 mb-2  font-bold font-main-font text-[14px] text-purple-700 px-2 mt-2 ">
      {serves.price_ar}
    </p>
    <p  className=" h-6 mb-2 font-main-font text-[14px] text-purple-700 px-2 mt-2" style={{color: 'rgb(247, 169, 182)',textDecoration:' line-through'}}>
      {serves.priceOld_ar}
    </p>
     </div>
    <div className="Btns w-full h-8 flex justify-center items-center px-2 mb-2">
    <AddToCartButton item={serves} />
    <ChangeStyle />
    </div>
  </div>
  
  );
}
};
function AddToCartButton ({item}){
  const{t} = useTranslation();
    const dispatch = useDispatch();
     const [loading , setLading] = useState(false);

      const  AddCartMessage = () => {
        
        setLading(true);
        AddToCart(item.id).then(res =>{  
         dispatch(addToCart(item));
         setLading(false);
        });  
     } 
     
     return(
        <Button loading={loading} onClick={()=>{AddCartMessage()}} style={{transition:'0.5s'  , position:"relative" , zIndex:1}} className=" w-[70%] h-full flex justify-center items-center text-[12px] bg-orange-600 hover:bg-orange-400 text-white rounded-md">
          <BsBagCheck className="ml-2" /> {t("addCart")}
        </Button>
     )
 }

 function ChangeStyle(){
    const [loading , setLading] = useState(false);
      function ChagColor (){   
        const hearts = document.querySelectorAll('.heartIcon');  
        hearts.forEach((heart) =>{
            heart.addEventListener('click' , ()=>{
                    setLading(true);         
                    heart.style.color='rgba(128, 128, 128, 0.819)';
                     setLading(false)
            } )
        })
      }
    return(  
        <HeartFilled loading={loading} onClick={()=>{ChagColor()}}  className='heartIcon mr-4 cursor-pointer' style={{color:"rgb(244, 86, 86)" , fontSize:'25px', transition:'0.5s'}}  />  
    )

 }

export default FeaturedCard;