import './App.css';
import {FaBars} from "react-icons/fa"
import {FaAws} from "react-icons/fa"
import {AiFillQuestionCircle} from "react-icons/ai"
import {FaUserAlt} from "react-icons/fa"
import {HiShoppingCart} from 'react-icons/hi'
const App = () => {

  const Navbar = () => {
    return <div className='flex justify-between p-4'>
      <FaBars className='h-7 fill-gray-600 block' />
      <FaAws className='h-10 fill-gray-600 blocj' />
      <AiFillQuestionCircle className='h-7 fill-gray-600' />
    </div>;
  }
  const UserNav = () => {
    return <div className='flex  h-10 justify-between pt-3'>
      <input type='text' className='bg-gray-200 p-3 rounded-md h-10'
        placeholder='جستجو' />
      <FaUserAlt className='fill-gray-600 h-7' />
      <HiShoppingCart className='fill-gray-600 h-7' />
    </div>;
  }
  
  

  return (
    <div className="App bg-gray-400 w-screen h-screen flex flex-col" dir='rtl'>
       <div className="w-full h-44 bg-white flex flex-col p-4 divide-gray-100 divide-y-2">
        <Navbar /> 
        <UserNav />
        <p>test</p>
       </div>
    </div>
  );
}

export default App;

