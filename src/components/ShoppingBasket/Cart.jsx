import Translate from '../../Translate';
import NaveBAr from '../Home/Navbar'
import Product from './Products';
import TitleCart from './TitleCart';
function Cart (){
    return(
        <>
          <NaveBAr />
          <Translate />
          <TitleCart />
          <Product />
        </>
    )
}
export default Cart;