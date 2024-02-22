import React from 'react'
import Axios from 'axios'
import 'semantic-ui-css/semantic.min.css'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import "./Feedback.css"
  function Feedback() 
{
  const nav =useNavigate()
    // const url="http://localhost:3000/reviews";
    const initialValues={uname:"",visitedPlace:"",suggestions:""};
    const [formValues,setFormValues]=useState(initialValues);
    const [formErrors,setFormErrors]=useState({});
    const [isSubmit,setIsSubmit]=useState(false);

    const handleChange=(e)=>
    {
      const {name,value}=e.target;
      setFormValues({...formValues,[name]:value});
      console.log(formValues);
    };

      const handleSubmit=(e)=>{
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);

      // Axios.post(url,{
      //   name: formValues.uname,
      //   visited_Place:formValues.visitedPlace,
      //   Suggestions:formValues.suggestions
      // })

        // .then(res=>{
        // console.log(res.formValues)
        // })

   };

    useEffect(()=>{
    console.log(formErrors);
      if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(formValues);
      }

    },[formErrors])
    const validate=(values)=>{
    const errors={};
    const regex= /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(!values.uname)
    {
      errors.uname="Name is required!";
    }
    if(!values.visitedPlace)
    {
      errors.visitedPlace="Visited Place is required!";
    }
    if(!values.suggestions)
    {
      errors.suggestions="Give ur Suggestions!";
    }
    return errors;

};
    return (
      <div className='feedback'>
        <h1>Feedback</h1>

        <div className='storeval'>
          {Object.keys(formErrors).length === 0 && isSubmit ? (<div id="message" className="ui message success">Your feedback send Successfully</div>
          ):(<pre>{JSON.stringify(formValues,undefined,2)}</pre>)}
        </div>

        <form class="ui large form" onSubmit={handleSubmit}>

          <div class="field">
          <label> Name</label>
          <input type="text" name="uname" placeholder="Name" value={setFormValues.uname} onChange={handleChange}></input>
          </div>

          <p style={{color:'red'}}>{formErrors.uname}</p>

          <div class="field">
          <label>Visited Place</label>
          <input type="text" name="visitedPlace" placeholder="Visited Place" value={setFormValues.visitedPlace} onChange={handleChange}></input>
          </div>

          <p style={{color:'red'}}>{formErrors.visitedPlace}</p>

          <div class="field">
          <label>Suggestions</label>
          <input type="text" name="suggestions" placeholder="Suggestions" value={setFormValues.suggestions} onChange={handleChange}></input>
          </div>

          <p style={{color:'red'}}>{formErrors.suggestions}</p>
           
          <button class="ui primary button" type="submit">Submit</button>
          <button class="right attached ui secondary button" onClick={()=>nav('/reviews')}>Back</button>

        </form>
     </div>
    )
  }

export default Feedback;

// For email validation
// else if(!regex.test(values.email)){
//   errors.email ="This is not a valid email format";
// }
// For Password validation
// else if(values.password.length < 4){
//   errors.password ="password must be more than 4 characters";
// }
// else if(values.password.length > 10){
//   errors.password ="password cannot exceed more than 10 characters";
// }
