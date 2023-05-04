import './App.css';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import MiddleMenu from './components/MiddleMenu/MiddleMenu';
import AmazingItems from './components/AmazingItems/AmazingItems';
const App = () => {
  return (
    <div className="App bg-gray-400 w-screen  flex flex-col overflow-y-auto" dir='rtl'>
       <div className="w-full h-44 bg-white flex flex-col p-4 divide-gray-100 divide-y-2">
        <Navbar /> 
       </div>
        <Slider />
        <MiddleMenu />
        <AmazingItems />
    </div>
  );
}

export default App;


