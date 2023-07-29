import React, {useState} from 'react';
import './Usestatefrom.css';
function UseStateFrom() {
    const [msgDetail, setMymsgDetail] = useState("Invalid");
   const handleInputChange = (event) => {
    const checkValue =  event.target.value; 
    if (checkValue.trim().length > 2) {   
        setMymsgDetail('Valid');
    }else{
        setMymsgDetail('Invalid');
    }
    };
    
    return (
      <form>
      <div className='formContainer'>
        <label>Full Name</label>
       <input onChange={handleInputChange}/>
       <p className='msgtxt'>{msgDetail} Message</p>
      </div>
      </form>
    );
  }
  
  export default UseStateFrom;