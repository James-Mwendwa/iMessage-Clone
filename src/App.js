import React from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import IMessage from './IMessage';
import { selectUser } from './features/userSlice';
import Login from './Login';


function App() {
  const user = useSelector(selectUser);

  return (
    <div className="app">

      <IMessage />

      {/* // { user ? <IMessage /> : <Login /> } */}
      
    
    </div>
    
  );
}

export default App;
