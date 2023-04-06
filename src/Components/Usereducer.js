import React,{ useReducer} from 'react'

const Usereducer = () => {
    const [sum,dispach]=useReducer((state,action)=>{
        return state + action;
    },0);
  return (
    <div><h1> Usereducer</h1>
    {sum}
    <button onClick={()=>dispach(2)}>Add 1</button>
        
        
       </div>
  )
}

export default Usereducer