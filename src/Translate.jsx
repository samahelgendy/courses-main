import { Select } from "antd";
import './Translate.css'
import i18n from "./i18n";

function Translate (){
    const onChange =(event)=>{
      i18n.changeLanguage(event.target.value);
    }
    return(
    <select className="selectLang" style={{color:'#9e58b5',
      border: "1px solid",
      borderRadius: "6px",
      width: '100px',
      padding: '5px 15px',
      outline: 'none',
      cursor:"pointer"
      }} onChange={onChange} placeholder="select language">
        <option value='en'>English</option>
        <option value='ar'>Arabic</option>
        
    </select>
    )
}
export default Translate;