import {Form, Input,Button, Typography, message} from 'antd';
import { useState } from 'react';
import NavRegister from '../Login/NavLogin';
import { useNavigate } from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import Translate from '../../Translate';
 
function FirstLogin (){
    const [ t, i18n ] = useTranslation();
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [loading,setLoading]=useState(false);
    let navigate=useNavigate();
    const onFinish =() =>{
       setLoading(true);
       try {
        setTimeout(()=>{
            fetch('http://localhost:9000/data' , {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify({
                    username:username ,
                    password:password
                  }), 
              }).then(res =>{res.json()})
              .then(()=>{       
                message.success('The account was created successfully')
                setLoading(false);
                navigate('/login');
            })
           } , 1500)
       } catch (error) {
        console.error("Error:", error);
      }
    }
    const msgName = t("mesname");
    const msgPass = t("msgPass");
    const msgPassconfirm = t("confirmcopy");
    const Passconfirm = t("msgConfirm");

    return(
       <>
        <NavRegister />
 
        <Translate  />
      
         <div className='loginContainer' style={{marginTop:"100px"}}>
        
            <div>

            </div>
            <Typography.Title style={{position:"relative" , top:"80px"}}>{t("register")}</Typography.Title>
             <Form onFinish={onFinish} className='firstLogin' labelCol={{ span:10 }} wrapperCol={{span:15}}  >
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
                  <Input onChange={(e)=>{setUsername(e.target.value)}}  placeholder={t("nameHolder")}/>
                </Form.Item>
                <Form.Item label={t("labpass")} name={"password"} rules={[{
                    required:true,
                    message:msgPass      
                },
            ]}
                hasFeedback>
                    <Input type='password' style={{width:"100%"}} onChange={(e)=>{setPassword(e.target.value)}}  placeholder={t("inpPass")} />
                </Form.Item>
                <Form.Item label={t("confirmpass")} name={"confirmPassword"} rules={[{
                    required:true, 
                    message:Passconfirm ,  
                },
                  ({getFieldValue}) =>({
                    validator(_,value){
                        if(!value || getFieldValue("password") === value){
                            return Promise.resolve();
                        }else{
                            return Promise.reject(msgPassconfirm);
                        }
                    }
                  })
            ]}
                hasFeedback>
                  <Input type='password' placeholder={t("confirmholder")}/>
                </Form.Item>

                <div style={{display:'flex' , gap:20}}>
                </div>
                <Button loading={loading} htmlType='submit' className='btnreg'>{t("register")}</Button>
            </Form> 
         </div>
       </>
    )
}
export default FirstLogin;