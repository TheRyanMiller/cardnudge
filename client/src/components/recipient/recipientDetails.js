import React, { useState, useEffect } from 'react';
import NewMailing from '../mailing/newMailing';
import './recipientDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';

const RecipientDetails = props => {
  const [showMailingForm, setShowMailingForm] = useState(false);
  const [editClicked, setEditClicked] = useState(false);

  useEffect(() => {
    console.log("Fetch all mailing data for this recipient");
  });

  let mailings = [
    {
      recipient: {name: "Ryan Miller"},
      category: "Mother's Day",
      recurring: "Annual",
      date: new Date(2018, 11, 24, 10, 33, 30, 0)
    },
    {
      recipient: {name: "Ryan Miller"},
      category: "Anniversary",
      recurring: "Annual",
      date: new Date(2019, 11, 24, 10, 33, 30, 0)
    },
    {
      recipient: {name: "Ryan Lingo"},
      category: "Christmas",
      recurring: "Annual",
      date: new Date(2018, 11, 24, 10, 33, 30, 0)
    }
  ];

  let mailingsList=(<div className="">No current mailings for this recipient.</div>);

  const showForm = () => {
    setEditClicked(false)
    setShowMailingForm(!showMailingForm);
  }

  console.log(props.recipient ? console.log("MAGA ",props.recipient) : "NO RECIPIENT DATA TO LIST")
  let addressInfo=(<div></div>);
  let newMailing=(<div></div>);

  if(props.recipient){
    addressInfo=(
      <div>
        <div className="addressInfo"> Address details: <br />
          {JSON.stringify(props.recipient)}
        </div>
        <button 
          className="editButton">
            <FontAwesomeIcon 
            className={"nowrap fas "} icon={faPencilAlt} 
            style=""
            />  
                Edit Address Info
        </button>
      </div>
    )
  }

  if(mailings && mailings.length>0){
    mailingsList = mailings.map(
      (mailing, index) => {
        return(
          <div
            className="mailing fontColor"
            key={index}
            onClick={()=>{console.log("MAILING DISSPLYED"); }}
            >
            {mailing.category}, {mailing.recurring}, {mailing.date.toDateString()}
            <button 
              onClick={()=>{showForm(false)}}
              className="editButton">
                <FontAwesomeIcon 
                className={"nowrap fas "} icon={faPencilAlt} 
                style=""
                /> 
                 Edit
            </button>
          </div>
        )
      }
    )
  }
  

  return (
    <div>
      <button onClick={()=>props.backHome()}>BACK</button>
      <h4 className="recipientHeader">{props.recipient.name}</h4>
      <button
        onClick={()=>{showForm(false)}}
        className="button">
          Add New Mailing </button>
      {mailingsList}
      {addressInfo}
      <div
        style={{display: showMailingForm ? "" : "none"}} > 
        <NewMailing
          isEdit={editClicked} recipient={props.recipient} 
          />
      </div>
      
    </div>
  );
}

export default RecipientDetails;
