import React, { useState, useEffect } from 'react';
import './recipientDetails.css';

const RecipientDetails = props => {

  let addressInfo=(<div></div>);
  let mailingsList=(<div></div>);
  let newMailing=(<div></div>);
  if(props.recipient){
    addressInfo=(<div>{JSON.stringify(props.recipient)}</div>)
  }
  if(props.mailings && props.mailings.length>0){
    mailingsList = props.mailings.map(
      (mailing, index) => {
        return(
          <div
            className="recipientBlock fontColor"
            key={index}
            onClick={()=>{console.log(mailing)}}
            >
            {mailing.type}
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

export default RecipientDetails;
