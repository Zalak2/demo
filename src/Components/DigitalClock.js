import { useState, useEffect } from 'react';
function Clock(){
 const date=new Date();
 const time=date.toLocaleTimeString();
 const [t,sett]=useState(time);
  
  useEffect(() => {
    setInterval(()=>{
        sett(t=>t+1)
    },1000);
},[])
  return (
    <span>
    <h1>{time}</h1>
    </span>
  );
}
export default Clock;