import { useState } from "react";
import Component5 from "./Usecontxt5";



function Component4({ user }) {
    return (
      <>
        <h1>Component 4</h1>
        <Component5 user={user} />
      </>
    );
  }

  export default Component4