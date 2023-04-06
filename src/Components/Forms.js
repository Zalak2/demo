import React,{useState} from 'react';

function Forms(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");

    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    };

    const handlePasswordChange=(e)=>
    {
    setPassword(e.target.value);
    }
    const handleFname=(e)=>
    {
    setFname(e.target.value);
    }
    const handleLname=(e)=>
    {
    setLname(e.target.value);
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        const emailRegex=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        const passwordRegex=/^[A-z]/;
        const fnameRegex=/^[A-Z]/;
        const lnameRegex=/^[A-Z]/;

        if(!emailRegex.test(email))
        {
        alert("please enter valid email");
        }
        else if(!passwordRegex.test(password))
        {
        alert("please enter valid password")
        }
        else if(!lnameRegex.test(lname))
        {
        alert("Please enter Valid Last name");
        }
        else if(!fnameRegex.test(fname))
        {
        alert("Please Enter valid First Name")
        }
        else{
            console.log("form submitted");
        }
    }



  return (
    <div><h2>Forms</h2>
    <form onSubmit={handleSubmit}>
    <label>FirstName:
            <input type="text" value={fname} onChange={handleFname}/>
        </label>
        <br/>
        <label>LastName:
            <input type="text" value={lname} onChange={handleLname}/>
        </label>
        <br/>
        <label>Email:
            <input type="email" value={email} onChange={handleEmailChange}/>
        </label>
        <br/>
        <label>
            Password:
            <input type='password' value={password} onChange={handlePasswordChange}/>
        </label>
        <br/>
        <button type="submit">Submit</button>
    </form>
    </div>
  )
}


export default Forms