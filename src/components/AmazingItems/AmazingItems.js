import {FaTshirt} from "react-icons/fa"

const AmazingItems = () => {
    return ( <div className="w-screen h-72 bg-red-500 items-center flex gap-x-3 overflow-x-auto">
        <div className="w-40 h-56  flex flex-col items-center justify-between p-0.5    rounded-md opacity-80 text-white">
            <p className="text-3xl text-center">پیشنهاد شگفت انگیز</p>
            <FaTshirt className="fill-white-600 h-24 w-20"/>
            <p>مشاهده همه</p>
        </div>

        <div className="w-40 bg-white h-56  flex flex-col items-center justify-between p-0.5    rounded-md  text-gray-900">
            <h4></h4>
            <FaTshirt className="fill-gray-600 h-24 w-20"/>
            <div className="flex justify-between w-full p-2 items-center">
                <div className="bg-red-600 rounded-full h-6 w-12 text-center text-white m-2 ">
                    <p>75%</p>
                </div>
                    <p>1400تومان</p>
            </div>
        </div>

        <div className="w-40 bg-white h-56  flex flex-col items-center justify-between p-0.5    rounded-md  text-gray-900">
            <h4></h4>
            <FaTshirt className="fill-gray-600 h-24 w-20"/>
            <div className="flex justify-between w-full p-2 items-center">
                <div className="bg-red-600 rounded-full h-6 w-12 text-center text-white m-2 ">
                    <p>75%</p>
                </div>
                    <p>1400تومان</p>
            </div>
        </div>

        <div className="w-40 bg-white h-56  flex flex-col items-center justify-between p-0.5    rounded-md  text-gray-900">
            <h4></h4>
            <FaTshirt className="fill-gray-600 h-24 w-20"/>
            <div className="flex justify-between w-full p-2 items-center">
                <div className="bg-red-600 rounded-full h-6 w-12 text-center text-white m-2 ">
                    <p>75%</p>
                </div>
                    <p>1400تومان</p>
            </div>
        </div>

        <div className="w-40 bg-white h-56  flex flex-col items-center justify-between p-0.5    rounded-md  text-gray-900">
            <h4></h4>
            <FaTshirt className="fill-gray-600 h-24 w-20"/>
            <div className="flex justify-between w-full p-2 items-center">
                <div className="bg-red-600 rounded-full h-6 w-12 text-center text-white m-2 ">
                    <p>75%</p>
                </div>
                    <p>1400تومان</p>
            </div>
        </div>
        
    </div> );
}
 
export default AmazingItems;