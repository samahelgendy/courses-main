import { Button } from "antd";
import { useState } from "react";
import zaya from '../../assets/logo.webp';
import {Link} from 'react-router-dom';
import './NavLogin.css'
import { AiOutlineUser } from "react-icons/ai";
import {useTranslation} from 'react-i18next';
function NavRegister (){
    const [ t, i18n ] = useTranslation();
    return(
     <div className="navregister">
     <div className="contain">
          
        <div className="img">
            <img src={zaya} />
        </div>

        <div className="navbtn">
        <span style={{display:"flex" , alignItems:"center"}}>
            <AiOutlineUser className="w-5 h-5" />
          </span>
        <Link to='/' className="action" >{t("register")}</Link>
        <Link to='/login' className="action">{t("login")}</Link>
        </div>
     </div>
     </div>
    )
}
export default NavRegister;