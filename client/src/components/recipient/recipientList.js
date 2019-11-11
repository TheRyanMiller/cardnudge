import React, { useState, useEffect } from 'react';
import './recipientList.css';

const RecipientList = props => {

  let recipientList=(<div></div>);
  if(props.recipients && props.recipients.length>0){
    recipientList = props.recipients.map(
      (recipient, index) => {
        return(
          <div
            className="recipientBlock fontColor"
            key={index}
            onClick={()=>{
              props.loadRecipientDetails(recipient);
            }}
            >
            {recipient.name}
          </div>
        )
      }
    )
  }
  

  return (
    <div>
      {recipientList}
    </div>
  );
}

export default RecipientList;
