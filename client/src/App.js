import React, { useState, useEffect } from 'react';
import RecipientForm from './components/recipient/newRecipientForm';
import RecipientList from './components/recipient/recipientList';
import RecipientDetails from './components/recipient/recipientDetails';
import './App.css';
var isEmpty = require('lodash.isempty');

const App = props => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [recipientList, setRecipientList] = useState([]);
  const [selectedRecipient, setSelectedRecipient] = useState({});

  const updateRecipentList = (recipient) => {
    let tempList = [...recipientList];
    tempList.push(recipient);
    setRecipientList(tempList);
  }

  const loadRecipientDetails = (recipient) => {
    setSelectedRecipient(recipient);
  }

  const backHome = () => {
    setSelectedRecipient({});
  }

  let recipientForm = (
    <RecipientForm recipient={selectedRecipient} updateRecipentList={updateRecipentList} />
  )
  let recipientDetails = (
    <RecipientDetails recipient loadRecipientDetails={loadRecipientDetails} />
  )

  useEffect(() => {
    console.log("selected recipient updatedxxx");
    return () => {
      console.log("selected recipient updated");
    };
  }, [selectedRecipient]);

  

  

  return (
    <div className="App">
        {isEmpty(selectedRecipient) ? (<RecipientList recipients={recipientList} loadRecipientDetails={loadRecipientDetails} />) : (<span></span>)}
        {isEmpty(selectedRecipient)  ? (<RecipientForm updateRecipentList={updateRecipentList} />) : (<span></span>)}
        {!isEmpty(selectedRecipient) ? (<RecipientDetails backHome={backHome} recipient={selectedRecipient} loadRecipientDetails={loadRecipientDetails} />) : (<span></span>)}

    </div>
  );
}

export default App;
