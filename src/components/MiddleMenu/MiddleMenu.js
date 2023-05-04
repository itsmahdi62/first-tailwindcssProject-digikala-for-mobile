import {BsFillRocketTakeoffFill} from "react-icons/bs"
const MiddleMenu = () => {
    return ( 
        <div className="h-56 w-full bg-white flex flex-col p-3">
            <div className="flex h-1/2 justify-between  items-center">
                <div className="flex h-20 w-20  bg-orange-500 rounded-3xl justify-center items-center">
                    <BsFillRocketTakeoffFill className="h-12 w-10 fill-gray-100"/>
                </div>
                <div className="flex h-20 w-20  bg-orange-500 rounded-3xl justify-center items-center">
                    <BsFillRocketTakeoffFill className="h-12 w-10 fill-gray-100"/>
                </div>
                <div className="flex h-20 w-20  bg-orange-500 rounded-3xl justify-center items-center">
                    <BsFillRocketTakeoffFill className="h-12 w-10 fill-gray-100"/>
                </div>
                <div className="flex h-20 w-20  bg-orange-500 rounded-3xl justify-center items-center">
                    <BsFillRocketTakeoffFill className="h-12 w-10 fill-gray-100"/>
                </div>
            </div>
            <div className="flex h-1/2 justify-between  items-center">
                <div className="flex h-20 w-20  bg-indigo-500 rounded-3xl justify-center items-center">
                    <BsFillRocketTakeoffFill className="h-12 w-10 fill-gray-100"/>
                </div>
                <div className="flex h-20 w-20  bg-indigo-500 rounded-3xl justify-center items-center">
                    <BsFillRocketTakeoffFill className="h-12 w-10 fill-gray-100"/>
                </div>
                <div className="flex h-20 w-20  bg-indigo-500 rounded-3xl justify-center items-center">
                    <BsFillRocketTakeoffFill className="h-12 w-10 fill-gray-100"/>
                </div>
                <div className="flex h-20 w-20  bg-indigo-500 rounded-3xl justify-center items-center">
                    <BsFillRocketTakeoffFill className="h-12 w-10 fill-gray-100"/>
                </div>
            </div>
        </div>
     );
}
 
export default MiddleMenu;