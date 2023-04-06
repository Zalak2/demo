import { useState } from "react";
import Component2 from "./Usecontext2";
import Usecon from "./Usecon";



function Component1() {
  const [user, setUser] = useState("ZMP1");

  return (
    <>
      <Usecon.Provider value={user}/>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </>
  );
}


export default Component1