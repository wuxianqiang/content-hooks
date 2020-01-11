import React from 'react';
import './App.css';
import UserData from './components/UserData'
import { Provider } from './Context'

function App() {
  return (
    <Provider>
      <UserData></UserData>
    </Provider>
  );
}

export default App;
