import {FaBars} from "react-icons/fa"
import {FaAws} from "react-icons/fa"
import {AiFillQuestionCircle} from "react-icons/ai"
import {FaUserAlt} from "react-icons/fa"
import {HiShoppingCart} from 'react-icons/hi'
import {CiLocationOn} from 'react-icons/ci';
import {AiOutlineLeft} from "react-icons/ai"
const Navbar = () => {
    const Navbars = () => {
        return <div className='flex justify-between p-3'>
          <FaBars className='h-7 fill-gray-600 block' />
          <FaAws className='h-10 fill-gray-600 block' />
          <AiFillQuestionCircle className='h-7 fill-gray-600' />
        </div>;
      }
      const UserNav = () => {
        return <div className='flex  h-10 justify-between pt-2 mb-5'>
          <input type='text' className='bg-gray-200 p-3 rounded-md h-10'
            placeholder='جستجو' />
          <FaUserAlt className='fill-gray-600 h-7' />
          <HiShoppingCart className='fill-gray-600 h-7' />
        </div>;
      }
      function Address() {
        return <div className='flex pt-2 justify-between'>
          <div className="flex gap-x-2 ">
            <CiLocationOn className='mt-1 ' style={{ color: "orangered" }} />
            <p>ارسال به تهران</p>
          </div>
          <AiOutlineLeft />
        </div>;
      }



    return ( 
        <div>
            <Navbars />
            <UserNav />
            <Address />
        </div> 
    );
}
 
export default Navbar;