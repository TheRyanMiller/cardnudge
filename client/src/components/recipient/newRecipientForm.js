import React, { useState, useEffect } from 'react';
import '../../App.css';
import validationData from '../../validationData/addressValidationData';

const NewRecipientForm = props => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [recipientInfo, setRecipientInfo] = useState({country:"United States"});
  

  const handleInputChange = (event) => {
    event.preventDefault();
    let value = event.target.value;
    let fieldName = event.target.name;
    setRecipientInfo(recipientInfo => ({
        ...recipientInfo, 
        [fieldName]: value
    }
    ));
  }

  const clearForm = () => {
    setRecipientInfo({country:"United States"});
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
            <label>Recipient:</label> <input required name="name" value={recipientInfo.name || ''} onChange={(ev) => handleInputChange(ev)} />
            <label>Street Address:</label> <input required name="streetAddress" value={recipientInfo.streetAddress || ''} onChange={(ev) => handleInputChange(ev)}/>
            
            <label>City:</label> <input required name="city" value={recipientInfo.city || ''} onChange={(ev) => handleInputChange(ev)} />
            <label>State:</label> <input required className="stateChars" name="state" maxLength="2" value={recipientInfo.state || ''} onChange={(ev) => handleInputChange(ev)} />
            
            <label>Zip:</label> <input required name="zip" pattern="[0-9]*" value={recipientInfo.zip || ''} onChange={(ev) => handleInputChange(ev)} />
            <label>Country:</label> <input required disabled name="country" value={"United States" || ''} />

            <button type="submit" onClick={(e)=>{ e.preventDefault(); props.updateRecipentList(recipientInfo); clearForm();}}> Click It! </button>
        </form>
        
    </div>
  );
}

export default NewRecipientForm;
