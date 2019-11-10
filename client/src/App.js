import React, { useState, useEffect } from 'react';
import RecipientForm from './components/newRecipientForm';
import RecipientList from './components/recipientList';
import './App.css';

const App = props => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [recipientList, setRecipientList] = useState([]);

  useEffect(() => {
    return () => {
      console.log();
    };
  }, []);

  const updateRecipentList = (recipient) => {
    let tempList = [...recipientList];
    tempList.push(recipient);
    setRecipientList(tempList);
  }

  return (
    <div className="App">
        <RecipientList recipients={recipientList} />
        <RecipientForm updateRecipentList={updateRecipentList} />
        
    </div>
  );
}

export default App;
