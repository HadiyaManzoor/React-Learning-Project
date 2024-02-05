
import { CiShoppingCart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import {Link} from 'react-router-dom';


const CartIcon=()=>{
  return(
    <div className="relative">
    <FaShoppingCart className="text-7x1 w-7 h-8"/>
    <span className='absolute -top-[10px] left-3 w-6 h-6 bg-red-500 p-0 px-1 rounded-full text-white'>01</span>
    </div>
)
}
const Header = () => {
 
  return (
    <>
      <header className="w-full shadow-md">
   
  <div className="container mx-auto flex flex-wrap w-full p-4 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    
      <CiShoppingCart  className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"/>
      <span className="ml-3 text-xl">Shopify</span>
    </a>
    <nav className="md:ml-auto md:py-1 md:pl-4 	flex flex-wrap items-center text-base justify-center">
      <Link to={'/'} className="mr-5 hover:text-gray-900">Home</Link>
      <Link to={'/checkout'} className="mr-5 hover:text-gray-900">Checkout</Link>
      <Link to={'/about'} className="mr-5 hover:text-gray-900">About</Link>
      <CartIcon/>
    </nav>
 
  </div>
   
      </header>
    
      
    </>
  )
}

export default Header
