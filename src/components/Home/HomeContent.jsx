import Translate from "../../Translate";
import Featured_products_component from "./Featured_products_component";
import MarketingDigital from "./MarketingDigital";
import NaveBAr from "./Navbar";
import Posters from "./Posters";

function HomeContent (){
    return(
        <div className="homeContent">
      <NaveBAr />
      <Translate />
       <MarketingDigital />
      <Posters />
      <Featured_products_component />
        </div>
    )
}
export default HomeContent;