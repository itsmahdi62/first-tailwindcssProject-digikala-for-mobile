import img1 from "../../asset/19ccd88145ca600f3edd54e36178aeb16a5b1e64_1683173953.webp"
import img2 from "../../asset/231581990e374be323d20d4a6f7fc7edbb21a581_1683183140.webp"
import img3 from "../../asset/775689151af3b5b8cc976f8480eecb748ccefe5f_1682415626.webp"

import { useState , useEffect } from "react"
const Slider = () => {
    const [index , setIndex] = useState(0)
    const Images = [img1 , img2 , img3]

    useEffect(() =>{
        setInterval(()=>{
           setIndex(index + 1 < Images.length ? index + 1 : 0)
        },3000)
    },[])
    return ( 
        <div>
            <img src={Images[index]} alt="" />
        </div>
     );
}
 
export default Slider;