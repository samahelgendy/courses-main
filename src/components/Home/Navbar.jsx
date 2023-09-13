import { useEffect, useRef, useState } from 'react'
import { BsCart4, BsMusicNoteList, BsPerson, BsPersonBadge, BsPersonBadgeFill, BsPlayBtnFill, BsSignDoNotEnterFill } from 'react-icons/bs'
import { AiOutlineUser } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import {BsInstagram}from 'react-icons/bs'
import { AiOutlineTwitter } from "react-icons/ai";
import { BsSnapchat } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import logo from '../../assets/logo.webp'
import logo2 from '../../assets/za-deg.png'
import  './navbarStyle.css'
import { Avatar, Badge, Button, Drawer, FloatButton, Input, Menu, Typography } from 'antd'
import { Link , useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { ArrowLeftOutlined, ArrowsAltOutlined, CiCircleFilled, CloseCircleOutlined, CloseCircleTwoTone, CloseOutlined, InstagramOutlined, LineChartOutlined, LinkOutlined, MessageOutlined, MinusCircleOutlined, SearchOutlined, TwitterOutlined, WhatsAppOutlined } from '@ant-design/icons';
import user from '../../assets/user.jpg';
import { useTranslation } from 'react-i18next';
import Translate from '../../Translate'

const NaveBAr = () => {
  const {t} = useTranslation();
  const navTopREf = useRef();
  const [showMenu , setShowMenu] = useState(false);
  const [showLink , setShowLink] = useState(false);
  const [showClient , setShowClient] = useState(false);
  useEffect(() => {
    const handel_Scroll_Nav = () => {
        
      if(window.scrollY >= 200) {
       navTopREf.current.style.position = 'fixed';
       navTopREf.current.style.top = '0';
      } else {
         navTopREf.current.style.position = "relative";
      }
    }
     window.addEventListener("scroll", handel_Scroll_Nav)
    return () => {
      window.removeEventListener("scroll",handel_Scroll_Nav)
    };
  },[])
  const cart = useSelector(state => state.cart);
   const TotalPrice = cart.reduce((acc , product)=>{
    acc += +product.price ;
    return acc;
} , 0)
  return (
    <>   
     <div className='overlay' >
      <div className='searchCon'>
      <SearchOutlined className='iconSear' />
      <input className='inputsea' placeholder={t("inpSea")} />
      <CloseOutlined className='iconclose' onClick={(e)=>{
        document.querySelector('.overlay').classList.remove('active')
        }}/>
      </div>
    </div>

      <div
        className="topNav w-full h-[60px] flex justify-between items-center bg-main-purple lg:px-12 xs:px-2 "
        style={{ background: "#9d58b5" }}
        ref={navTopREf}
      >
        <div className="search-icon w-[30%] h-full flex justify-start items-center ">
          <FiMenu onClick={()=>{setShowMenu(true);}}  style={{color:"orange" ,fontSize:25 }} className="ml-4 lg:hidden cursor-pointer  " />
          <BsSearch onClick={()=>{document.querySelector('.overlay').classList.add('active')}} style={{color:"orange" ,fontSize:20 }} className="cursor-pointer " />
        </div>
        <div className="logo w-[30%] h-full flex justify-center items-center ">
          <img className=" h-[80%] " src={logo} alt="logo" />
        </div>
        <div className="cart-user w-[30%] flex justify-end items-center ">
          <span className="ml-4">
            {/* <AiOutlineUser className="w-5 h-5" /> */}
            <img src={user} className="w-7 h-7" style={{borderRadius:"50%"}} />
          </span>
           <Link to='cart'>
           <Badge style={{cursor:"pointer" , marginRight:"23px"}} count={cart.length} >
           <BsCart4 style={{cursor:'pointer'}} color="orange" className="w-6 h-6 text-white" />
          </Badge>
          </Link>
          <span className="price mr-2" style={{color:"orange"}}>{TotalPrice}ر.س</span>
        </div>
      </div>
      <div className="navLinks w-full h-[60px] flex justify-between items-center px-6 font-bold text-[14px]  ">
        <ul className=" flex w-[60%] h-full  justify-center items-center ">
          <li>{t("lists-1")}</li>
          <li className="flex items-center mr-4">
            <img src={logo2} alt="زيا الرقمية" className="w-4 h-4 ml-2" />
            {t("lists-2")}
          </li>
          <li className="flex items-center mr-4">
            <img src={logo2} alt="زيا الرقمية" className="w-4 h-4 ml-2" />
            {t("lists-3")}
          </li>
          <li className="mr-4">{t("lists-4")}</li>
          <li className="mr-4">{t("lists-5")}</li>
        </ul>
        <ul className="icon-social  w-40% h-full  flex justify-center items-center">
        
          <li >
            <FloatButton   icon={<InstagramOutlined />} tooltip={t("instagram")} style={{position:'absolute' , backgroundColor:'orange' , top:'70px' , left:'43px' , zIndex:1}} />
          </li>
          <li >
          <FloatButton icon={<TwitterOutlined />} tooltip={t('twitter')} style={{position:'absolute' , backgroundColor:'orange', top:'70px' , left:'100px' , zIndex:1}} />
          </li>
          <li >
          <FloatButton icon={<MessageOutlined />} tooltip={t('massenger')} style={{position:'absolute' , backgroundColor:'orange', top:'70px' , left:'150px' , zIndex:1}} />
          </li>
          <li >
          <FloatButton icon={<BsTiktok />} tooltip={t('tiktok')} style={{position:'absolute', backgroundColor:'orange', top:'70px' , left:'200px' , zIndex:1}} />
          </li>
        </ul>
        
      </div>
    <Drawer style={{direction:"rtl"}} open={showMenu} title={t("mainmenu")} onClose={()=>{setShowMenu(false);}}>
        <Menu style={{border:'none'}} items={[
          {label:'خدمات المتاجر الالكترونية' , key:'services'},
          {label:'تخفيضات' , key:'sales'},
          {label:'المدونة' , key:'blog' },
          {label:'الدورات التعليمية' , key:'courses' },
          {label:'خدمات التحول الرقمى' , key:'digital' },

        ]}>

        </Menu>
        <div style={{display:"flex" , justifyContent:"space-between" , cursor:"pointer"}} onClick={()=>{{setShowLink(true)}}}>
            
        <Button type='link' icon={<LinkOutlined />} >روابط تهمك</Button>
        <ArrowLeftOutlined/>
        </div>
        <div style={{display:"flex" , justifyContent:"space-between" , cursor:"pointer"}} onClick={()=>{{setShowClient(true)}}}>
        <Button type='link' icon={<BsPerson />} >خدمة العملاء</Button>
        <ArrowLeftOutlined/>
        </div>
    </Drawer>
    <Drawer style={{direction:"rtl"}} open={showLink} title='روابط تهمك' onClose={()=>{setShowLink(false);}}>
       <Menu style={{border:'none'}} items={[
               {label:'سياسية الخصوصية' , key:'special' },
               {label:'سياسية الاستبدال والاسترجاع' , key:'replace' },
               {label:'أكاديمية زايا' , key:'zayaAcademy' },
               {label:'المدونة' , key:'blogs' },
       ]}>

       </Menu>
    </Drawer>

    <Drawer style={{direction:"rtl"}} open={showClient} title='خدمة العملاء' onClose={()=>{setShowClient(false);}}>
     <Typography.Link style={{display:"flex" , flexDirection:"column" , justifyContent:"center" , alignItems:"center"}}>
        <WhatsAppOutlined style={{color:"#000" , fontSize:20}} />
        <Typography style={{ fontSize:20}} >واتساب</Typography>
     </Typography.Link>
     <Typography.Paragraph style={{margin:'20px 0' , display:"flex" , justifyContent:"center" }}>تابع زايا الرقمية |Zaya Digital</Typography.Paragraph>

     <div style={{margin:'20px 0' , display:"flex" , justifyContent:"center" }}>
     <FloatButton   icon={<InstagramOutlined />} tooltip={t("instagram")} style={{position:'absolute' , backgroundColor:'orange' , top:'200px' , left:'250px' , zIndex:1}} />
     <FloatButton icon={<TwitterOutlined />} tooltip={t('twitter')} style={{position:'absolute' , backgroundColor:'orange', top:'200px' , left:'200px' , zIndex:1}} />
     <FloatButton icon={<MessageOutlined />} tooltip={t('massenger')} style={{position:'absolute' , backgroundColor:'orange', top:'200px' , left:'150px'  , zIndex:1}} />
     <FloatButton icon={<BsTiktok />} tooltip={t('tiktok')} style={{position:'absolute', backgroundColor:'orange', top:'200px' , left:'100px' , zIndex:1}} />
     </div>
    </Drawer>
    </>
  );
}


export default NaveBAr;