import { useState } from 'react';
import './App.css';
import Paypal from './components/Paypal';

function App() {

  const [checkOut, setcheckOut] = useState(false);

  return (
    <div className='App'>
      {checkOut ? (
        <Paypal />
      ) :
        (
          <button onClick={() => setcheckOut(true)}>CheckOut</button>
        )}
    </div>
  );
}

export default App;
