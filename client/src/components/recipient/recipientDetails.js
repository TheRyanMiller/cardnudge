import React, { useState, useEffect } from 'react';
import NewMailing from '../mailing/newMailing';
import './recipientDetails.css';


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

  let mailingsList=(<div className="fontColor">No current mailings for this recipient.</div>);

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
        <div className="recipientDeets"> Address details: <br />
          {JSON.stringify(props.recipient)}
        </div>
      </div>
    )
  }

  if(mailings && mailings.length>0){
    mailingsList = mailings.map(
      (mailing, index) => {
        return(
          <div
            className="fontColor mailing"
            key={index}
            onClick={()=>{console.log("MAILING DISSPLYED"); }}
            >
            {mailing.category}, {mailing.recurring}, {mailing.date.toDateString()}
            <button onClick={()=>{showForm(false)}}>Edit</button>
          </div>
        )
      }
    )
  }
  

  return (
    <div>
      <button onClick={()=>props.backHome()}>BACK</button>
      <h4 className="fontColor recipientHeader">{props.recipient.name}</h4>
      {mailingsList}
      {addressInfo}
      <button
        onClick={()=>{showForm(false)}}>
          Add New Mailing
      </button>
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
