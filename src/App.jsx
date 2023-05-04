import './App.css';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
const App = () => {
  return (
    <div className="App bg-gray-400 w-screen h-screen flex flex-col" dir='rtl'>
       <div className="w-full h-44 bg-white flex flex-col p-4 divide-gray-100 divide-y-2">
        <Navbar /> 
       </div>
        <Slider />
    </div>
  );
}

export default App;


