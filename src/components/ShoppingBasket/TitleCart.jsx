import { Badge, Typography } from "antd";
import { useTranslation } from "react-i18next";
import { BsCart4 } from "react-icons/bs";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TitleCart(){
    const cart = useSelector(state => state.cart);
const symbol = " > "
    const {t} = useTranslation();
    return(
      <div style={{backgroundColor:"#eee" ,textAlign:"right"  ,position:"absolute" , top:"170px" , width:"100%" , padding:"20px"}}>
      <div style={{display:"flex"}}>
      <h2 style={{fontSize:"25px" , fontWeight:"bold"}} >{t("shoppingCart")}</h2>  
       <span style={{position:"relative" , top:"9px"}}>
       ( {cart.length}         
         <span>{t("product")}</span>)
       </span>
      </div>
   <div style={{display:"flex"}}>
     <Link to='/main'>
          { t("main") }    
        </Link>
        <Typography> { symbol } { t("shoppingCart") }</Typography>
</div>

          
      </div>
    )
}
export default TitleCart;