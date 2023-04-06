import { useState } from "react";
import react from "react"
import { useEffect } from "react";


const UseEffect=()=> {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation]=useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);      //every one second it will count
//     }, 1000);
//   });

//one time count
//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   },[]);

  useEffect(() => {
    setCalculation(() => count*5);
  },[count]);

  return(
    <div>
        <h1>I've rendered {count} times!</h1>
        <p>Count:{count}</p>
        <button onClick={()=>setCount((c)=>c+1)}>+</button>
        <p>Calculation:{calculation}</p>
    </div>

  ) 
}
export default UseEffect