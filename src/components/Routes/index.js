import {Routes , Route, Outlet} from 'react-router-dom';
import FirstLogin from '../Login/rejecter.jsx';
import SecondLogin from '../Login/Login.jsx';
import HomeContent from '../Home/HomeContent.jsx';
import Cart from '../ShoppingBasket/Cart.jsx';
function Router (){
    return(
        <Routes>
            <Route path="/" element={<FirstLogin />} />
            <Route path="login" element={<SecondLogin />} />
            <Route path="main" element={<>
              <Outlet />
            </>} >
               <Route path="" element={<HomeContent />} />
               <Route path="cart" element={<Cart />}/>
            </Route >
        </Routes>
    )
}
export default Router;



