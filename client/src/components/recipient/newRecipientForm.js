import React, { useState, useEffect } from 'react';
import '../../App.css';
import validationData from '../../validationData/addressValidationData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Modal from '../modal';
import $ from 'jquery';

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

  const modal = (event) => {
    
  }
  

  return ( 
    <div className="App form-fields">
      <Modal modalId="importedModal" title="WAZZUP" body="The body of christ" />
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#importedModal" data-whatever="@mdo">Launch imported modal</button><br />
      <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Add New Recipient</button>
          <div id="myModal" className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">New Recipient</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                              <FontAwesomeIcon className={"nowrap fas "} icon={faUser} style=""/>  
                            </span>
                          </div>
                          <input 
                            type="text" className="form-control" name="name" placeholder="Full Name" aria-label="Full Name" aria-describedby="basic-addon1" 
                            value={recipientInfo.name || ''} onChange={(ev) => handleInputChange(ev)} />
                        </div>
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                              <FontAwesomeIcon className={"nowrap fas "} icon={faUser} style=""/>  
                            </span>
                          </div>
                          <input type="text" className="form-control" required name="streetAddress" placeholder="Street Address" aria-describedby="basic-addon1"  value={recipientInfo.streetAddress || ''} onChange={(ev) => handleInputChange(ev)}/>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                              <FontAwesomeIcon className={"nowrap fas "} icon={faUser} style=""/>  
                            </span>
                          </div>
                          <input type="text" className="form-control" required name="city" placeholder="City" aria-describedby="basic-addon1"  value={recipientInfo.city || ''} onChange={(ev) => handleInputChange(ev)}/>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                              <FontAwesomeIcon className={"nowrap fas "} icon={faUser} style=""/>  
                            </span>
                          </div>
                          <input type="text" className="form-control stateChars" required name="state" maxLength="2" placeholder="State" aria-describedby="basic-addon1"  value={recipientInfo.state || ''} onChange={(ev) => handleInputChange(ev)}/>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                              <FontAwesomeIcon className={"nowrap fas "} icon={faUser} style=""/>  
                            </span>
                          </div>
                          <input type="text" className="form-control stateChars" required name="zip"  placeholder="Zip" aria-describedby="basic-addon1"  value={recipientInfo.zip || ''} onChange={(ev) => handleInputChange(ev)}/>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="input-group mb-3">
                          <div className="input-group-prepend">
                            <span className="input-group-text" id="basic-addon1">
                              <FontAwesomeIcon className={"nowrap fas "} icon={faUser} style=""/>  
                            </span>
                          </div>
                          <input type="text" className="form-control stateChars" disabled required name="country"  placeholder="Country" aria-describedby="basic-addon1"  value={"United States" || ''} />
                        </div>
                      </div>
                    </div>
                </form>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={
                    (e)=>{ e.preventDefault(); props.updateRecipentList(recipientInfo); clearForm();
                    }}>
                    Add</button>
                </div>
              </div>
            </div>
            </div>
          </div>
          <button type="button" className="btn btn-primary"onClick={
                    (e)=>{ e.preventDefault(); $("#myModal").modal({"show":true})
                    }}>
                    LAUNCH da modal</button>
          
        </div>);
}

export default NewRecipientForm;
