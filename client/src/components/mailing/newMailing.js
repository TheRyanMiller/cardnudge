import React, { useState, useEffect } from 'react';
import '../../App.css';
import validationData from '../../validationData/addressValidationData';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const NewMailingForm = props => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mailing, setMailing] = useState({});

  useEffect(() => {
    console.log("MAIL DATE CHANGED ",mailing);
  },[mailing]);

  const handleInputChange = (date) => {
    setMailing(mailing, date)
    console.log("xxx ",date);
    /* event.preventDefault();
    let value = event.target.value;
    let fieldName = event.target.name;
    setRecipientInfo(recipientInfo => ({
        ...mailing, 
        [fieldName]: value
    }
    )); */
  }

  const validateState = (stateStr) => {
    //Ensure all required fields are filled

    //Validate legal state
    if(!validationData.states[stateStr]){
      //alert("invalid state")
    }
  }

  return (
    <div className="App">
        <form className="form-fields">
            <label>Recipient:</label> <input required name="recipient" value={props.recipient.name || ''} onChange={(ev) => handleInputChange(ev)}/>
            <label>Event Category:</label> <select required name="category" value={mailing.category || ''} onChange={(ev) => handleInputChange(ev)}>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="holiday">Holiday</option>
                    <option value="other">Other</option>
                </select>
            <label>Date:</label>
              <DatePicker
                selected={ mailing.date ? mailing.date : new Date() }
                onChange={(ev)=>{
                  handleInputChange(ev);
                }}
              />
            <label>Recurring:</label> <select required name="recurring" value={mailing.recurring || ''} onChange={(ev) => handleInputChange(ev)}>
                    <option value="annual">Annual</option>
                    <option value="notrecurring">Not recurring</option>
                </select>
            
            <button type="submit" onClick={(e)=>{ e.preventDefault();}}> Click It! </button>
        </form>
        
    </div>
  );
}

export default NewMailingForm;
