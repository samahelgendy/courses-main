import { useEffect, useRef } from 'react'
import { BsCart4 } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import {BsInstagram}from 'react-icons/bs'
import { AiOutlineTwitter } from "react-icons/ai";
import { BsSnapchat } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import logo from '../assets/logo.webp'
import logo2 from '../assets/za-deg.png'
import  './navbarStyle.css'

const NaveBAr = () => {
  const navTopREf = useRef()
  const menu_mobil = useRef();
  useEffect(() => {
    const handel_Scroll_Nav = () => {
      if(window.scrollY >= 200) {
       navTopREf.current.style.position = 'fixed'
       navTopREf.current.style.top = '0'
      } else {
         navTopREf.current.style.position = "relative";
      }
    }
     window.addEventListener("scroll", handel_Scroll_Nav)
    return () => {
      window.removeEventListener("scroll",handel_Scroll_Nav)
    };
  },[])
  return (
    <>
      <div
        className="topNav w-full h-[60px] flex justify-between items-center bg-main-purple lg:px-12 xs:px-2 "
        style={{ background: "#9d58b5" }}
        ref={navTopREf}
      >
        <div className="search-icon w-[30%] h-full flex justify-start items-center ">
          <FiMenu color="#f00" className="ml-4 lg:hidden cursor-pointer  " />
          <BsSearch color="#f00 " className=" cursor-pointer" />
        </div>
        <div className="logo w-[30%] h-full flex justify-center items-center ">
          <img className=" h-[80%] " src={logo} alt="logo" />
        </div>
        <div className="cart-user w-[30%] flex justify-end items-center ">
          <span className="ml-4">
            <AiOutlineUser className="w-5 h-5" />
          </span>
          <span>
            <BsCart4 color="#f00" className="w-6 h-6 text-white" />
          </span>
          <span className="price mr-2 text-red-400">ر.س</span>
        </div>
      </div>
      <div className="navLinks w-full h-[60px] flex justify-between items-center px-6 font-bold text-[14px]  ">
        <ul
          className="links flex w-[60%] h-full  justify-center items-center "
          ref={menu_mobil}
        >
          {/* {menu_mobil.current.classList.contains("menu-nav-bar") && (<li>القائمه الرئيسية</li>)} */}
          <li>خدمات المتاجر الالكترونية</li>
          <li className="flex items-center mr-4">
            <img src={logo2} alt="زيا الرقمية" className="w-4 h-4 ml-2" />
            تخفيضات
          </li>
          <li className="flex items-center mr-4">
            <img src={logo2} alt="زيا الرقمية" className="w-4 h-4 ml-2" />
            المدونة
          </li>
          <li className="mr-4">الدورات التعليمية</li>
          <li className="mr-4">خدمات التحول الرقمي</li>
        </ul>
        <ul className="icon-social  w-40% h-full  flex justify-center items-center">
          <li className="w-12 h-12 rounded-full bg-orange-500 flex justify-center items-center ml-4">
            <BsInstagram />
          </li>
          <li className="w-12 h-12 rounded-full bg-orange-500 flex justify-center items-center ml-4">
            <AiOutlineTwitter />
          </li>
          <li className="w-12 h-12 rounded-full bg-orange-500 flex justify-center items-center ml-4">
            <BsSnapchat />
          </li>
          <li className="w-12 h-12 rounded-full bg-orange-500 flex justify-center items-center ml-4">
            <BsTiktok />
          </li>
        </ul>
      </div>
    </>
  );
}
export default NaveBAr;