import {Form, Input,Button, Typography, message} from 'antd';
import { useEffect, useState } from 'react';
import NavRegister from '../Login/NavLogin';
import { useNavigate } from 'react-router-dom';
import Translate from '../../Translate';
import { useTranslation } from 'react-i18next';

function SecondLogin (){
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [loading,setLoading]=useState(false);
  
    let navigate=useNavigate();
    const [products , setProducts] = useState([]);
    // useEffect(()=>{
    //   fetch("http://localhost:9000/data")
    //   .then((res)=> res.json() )
    //   .then((product)=>{setProducts(product)})
       
    // } ,[] )
    const onFinish =() =>{
        setLoading(true);
        try {
         setTimeout(()=>{
            fetch("http://localhost:9000/data")
            .then((res)=> res.json() )
            .then((product)=>{setProducts(product)
            products.map((product)=>{
                const username = document.querySelector("#username");
                const password = document.querySelector("#password");
                //  const arruser = ["s" , "e" , "3"];
                // const arrpass = [];
                    //   console.log(arruser.push(product.username))
                //       console.log(arruser.length)
                    //   console.log(product.password)

                    if(username.value === product.username && password.value === product.password){
                        message.success('The account was created successfully');
                        navigate('/main');
                    } else{
                        message.error('The password or user name is error');
                    }
            })

            })
               
                //  message.success('The account was created successfully')
                
                 setLoading(false);
                //  navigate('/login');
                
            //  })
            } , 1500)
        } catch (error) {
         console.error("Error:", error);
       }
     }
     const {t} = useTranslation();
     const msgName = t("mesname");
     const msgPass = t("msgPass");
    return(
      <>
        <NavRegister />
        <Translate />
        <div className='loginContainer ' style={{marginTop:"100px"}}>
            <Typography.Title style={{position:"relative" , top:"80px"}}>{t("login")}</Typography.Title>
            <Form  onFinish={onFinish} className='firstLogin' labelCol={{ span:10 }} wrapperCol={{span:15}} initialValues={{userName:"" ,password :"" }}  >
            <Form.Item label={t('userName')} name={"username"} rules={[{
                    required:true,
                    message:msgName 
                },
                {
                    min:8,
                },
            {
                whitespace:true,
            }]}
                hasFeedback
                >
                  <Input className='userName' onChange={(e)=>{setUsername(e.target.value)}}  placeholder={t("nameHolder")}/>
                </Form.Item>
                <Form.Item label={t("labpass")} name={"password"} rules={[{
                    required:true,
                    message:msgPass      
                },
            ]}
                hasFeedback>
                    <Input type='password' style={{width:"100%"}} onChange={(e)=>{setPassword(e.target.value)}}  placeholder={t("inpPass")} />
                </Form.Item>
                <Button loading={loading} htmlType='submit' className='btnlog' >{t("login")}</Button>
            </Form>
            
        </div></>
    )
}
// const username = document.querySelector(".userName");
// console.log(username.value)
export default SecondLogin;