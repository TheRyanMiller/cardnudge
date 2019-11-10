import React, { useState, useEffect } from 'react';
import '../App.css';
import validationData from '../validationData/addressValidationData';

const NewMailingForm = props => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mailing, setMailing] = useState({});
  

  const handleInputChange = (event) => {
    event.preventDefault();
    let value = event.target.value;
    let fieldName = event.target.name;
    setRecipientInfo(recipientInfo => ({
        ...mailing, 
        [fieldName]: value
    }
    ));
  }

  const clearForm = () => {
    setRecipientInfo({});
  }

  const validateState = (stateStr) => {
    //Ensure all required fields are filled

    //Validate legal state
    if(!validationData.states[stateStr]){
      //alert("invalid state")
    }
  }

  return (
    <div className="App form-fields">
        <form className="form-fields">
            <label>Recipient:</label> <input required name="recipient" value={recipient.name || ''} onChange={(ev) => handleInputChange(ev)}/>
            <label>Event Category:</label> <select required name="category" value={category || ''} onChange={(ev) => handleInputChange(ev)}>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="holiday">Holiday</option>
                    <option value="other">Other</option>
                </select>
            <label>Recurring:</label> <select required name="recurring" value={recurring || ''} onChange={(ev) => handleInputChange(ev)}>
                    <option value="annual">Annual</option>
                    <option value="notrecurring">Not recurring</option>
                </select>
            <button type="submit" onClick={(e)=>{ e.preventDefault(); props.updateRecipentList(recipientInfo); clearForm();}}> Click It! </button>
        </form>
        
    </div>
  );
}

export default NewMailingForm;
