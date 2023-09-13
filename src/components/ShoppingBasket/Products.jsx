import { Button, Typography } from "antd";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector , useDispatch } from "react-redux";
import { decrement, increment } from "../../app/features/Counter-Slice";
import { BsBagCheck } from "react-icons/bs";
import { DeleteFilled, HeartOutlined, PercentageOutlined } from "@ant-design/icons";
import { removeFromCart } from "../../app/features/CartSlice";
import Swal from 'sweetalert2';

function Product (){
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter);

    const [products ,setProducts ] = useState([]);
    const [loading,setLoading]=useState(false);
    const carts = useSelector(state => state.cart);
    const{t , i18n} = useTranslation();
   
        const wishes = ()=>{
           const sele = document.querySelector(".btnwatches");
           sele.classList.toggle("active")
        }
        const TotalPrice = carts.reduce((acc , product)=>{
            acc += +product.price ;
            return acc;
        } , 0)
    
    return(
       <div style={{display:"flex"}}>
        <div style={{width:"65%"}}>    
       {carts && carts.map((cart)=>{
        if(i18n.language == 'en'){
            return(
                <div className="container" style={{position:"relative" , top:"250px" }} key={cart.id}>           
                 <div style={{display:"flex", justifyContent:"flex-start" }}>
                 <img src={cart.photo} style={{width:"120px",height: "100px",borderRadius: "10px"}} />
                <div style={{marginRight:15}}>
                <Typography.Text>{cart.name}</Typography.Text>
                <Typography style={{marginTop:10 , textAlign:"right"}}>{cart.price}{t("sort")}</Typography>
                </div>
                 </div>

                 <div style={{display:"flex" , justifyContent:"space-between" , marginBottom:"30px" }}>
                 <Typography style={{display:"flex" , alignItems:"center"}}>{t("amount")}</Typography>
                 <div style={{ border: "1px solid #c1c1c1",padding: "0px 10px",borderRadius:" 6px"}}>
                 <button style={{ paddingLeft: "25px",color:" #999",fontSize: "30px"}} onClick={() => dispatch(increment(1))}>+</button>
                 <span style={{color:"#333"}}>{count >= 1 ? count : 1}</span>
                <button style={{ paddingRight: "25px",color:" #999",fontSize: "30px"}} onClick={() => dispatch(decrement(1))}>-</button>
                 </div>
                 </div>
                 <hr style={{padding:"10px 0 "}} />
                 <div style={{marginBottom:"50px" ,display: "flex",justifyContent: "space-between",alignItems:"center"}}>
                    <div style={{textAlign: "right", marginBottom:" 20px"}}>
                        <Typography.Text >{t("total")} : {cart.price}{t("sort")}</Typography.Text>
                    </div>
                    <div style={{display:"flex"}}>
                    <button onClick={wishes} style={{background:"#451256" , padding:"5px" , marginLeft:"15px"}} className=" btnwatches flex justify-center items-center text-[12px]  text-white rounded-md">
                     <HeartOutlined  style={{marginLeft:5}} /> {t("wishes")}
                   </button>
                   <button>
                   <DeleteButton item={cart} />
                   </button>
                    </div>
                 </div>
                </div>  
            )
        }else{
            return(
                <div className="container" style={{position:"relative" , top:"250px"}} key={cart.id}>      
                 <div style={{display:"flex", justifyContent:"flex-start" }}>
                 <img src={cart.photo} style={{width:"120px",height: "100px",borderRadius: "10px"}} />
                <div style={{marginRight:15}}>
                <Typography.Text>{cart.name_ar}</Typography.Text>
                <Typography style={{marginTop:10 , textAlign:"right"}}>{cart.price_ar}{t("sort")}</Typography>
                </div>
                 </div>
                     
                 <div style={{display:"flex" , justifyContent:"space-between" , marginBottom:"30px" }}>
                 <Typography style={{display:"flex" , alignItems:"center"}}>{t("amount")}</Typography>
                 <div style={{ border: "1px solid #c1c1c1",padding: "0px 10px",borderRadius:" 6px"}}>
                 <button style={{ paddingLeft: "25px",color:" #999",fontSize: "30px"}} onClick={() => dispatch(increment(1))}>+</button>
                 <span style={{color:"#333"}}>{count >= 1 ? count : 1}</span>
                <button style={{ paddingRight: "25px",color:" #999",fontSize: "30px"}} onClick={() => dispatch(decrement(1))}>-</button>
                 </div>
                 </div>
                 <hr style={{padding:"10px 0 "}} />
                 <div style={{marginBottom:"50px" ,display: "flex",justifyContent: "space-between",alignItems:"center"}}>
                    <div style={{textAlign: "right", marginBottom:" 20px"}}>
                        <Typography.Text >{t("total")} : {cart.price}{t("sort")}</Typography.Text>
                    </div>
                    <div style={{display:"flex"}}>
                    <button onClick={wishes} style={{background:"#451256" , padding:"5px" , marginLeft:"15px"}} className=" btnwatches flex justify-center items-center text-[12px]  text-white rounded-md">
                     <HeartOutlined  style={{marginLeft:5}} /> {t("wishes")}
                   </button>
                   <button>
                      <DeleteButton item={cart} />
                   </button>
                    </div>
                 </div>
                </div>

              
            )
           }

       })}
        </div>

        <div  className="container" style={{ width:"35%" ,position:"relative" , top:"250px"}}>
        <div style={{ boxShadow:"10px 10px 10px 10px #eeeeee90" , padding:"40px 20px"}}>
              <PercentageOutlined style={{border:"1px solid",borderRadius:"50%",padding: "3px",marginLeft:10}}/><Typography.Text style={{fontWeight:"bold"}}>{t("code")}</Typography.Text>
              <div style={{display:"flex" ,marginTop:"20px" , justifyContent:"center"}}>
              <input placeholder={t("entercode")} style={{border: "1px solid #451256",padding:" 0 20px",outline: "none" ,borderEndStartRadius: "6px",borderStartStartRadius:"6px" , fontSize:"14px" , color:"#333"}} />
              <button style={{background:"#451256" , color:"white" , padding:"8px 10px" , borderEndEndRadius:"6px", borderStartEndRadius: "6px", fontSize:"14px"}}>{t("discountapll")}</button>
              </div>
        </div>

        <div style={{ boxShadow:"10px 10px 10px 10px #eeeeee90" , padding:"40px 20px"}}>
             <Typography.Text style={{fontWeight:"bold" , display:"flex" , justifyContent:"flex-start" , fontSize:"25px" , marginBottom:"20px"}}>{t("summary")}</Typography.Text>
             <div style={{display:"flex" , justifyContent:"space-between"}}>
             <Typography.Text style={{ marginBottom:"20px"}}>{t("total products")} : </Typography.Text>
             <span style={{color:"#333"}}>{TotalPrice}{t("sort")}</span>
             </div>

             <div style={{display:"flex" , justifyContent:"space-between" , }}>
             <Typography.Text style={{ marginBottom:"20px" , fontSize:"25px" }}>{t("total")} : </Typography.Text>
             <span style={{color:"#333" , fontSize:"25px"}}>{TotalPrice}{t("sort")}</span>
             </div>
              <button style={{background:"#451256" , color:"white" , padding:"8px 10px" , borderRadius:"6px" , width:"90%" ,}}>{t("request")}</button>
           </div>

       </div>

       </div>
    )
}

const DeleteButton =({item})=>{
    const dispatch = useDispatch();
    const AlertDelete=()=>{
        Swal.fire({
            title:`You Are Sure To Delete ${item.category}?`,
            showCancelButton:true,
        }).then((data)=>{
            if(data.isConfirmed){
            dispatch(removeFromCart(item));
            }
        })
    }
   return (            
   <DeleteFilled onClick={()=>{AlertDelete()}} style={{cursor:"pointer" , color:"rgb(211, 4, 4)" , fontSize:"20px"}}/>
)
}
export default Product;