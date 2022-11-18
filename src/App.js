import './App.css';
import Body from './Body';
import Navbar from './Navbar';
import { useState } from 'react';


function App() {
  const [amnt, setamnt] = useState(0)
  const [close, setclose] = useState();
  const [shut, setshut] = useState();
  const Dets = (data) => {
    setamnt(data)
  }
  // const Close = (shut) => {
  //   setclose(shut)
  // }
  const Del = (data) => {
    setclose(0)
  }
  return (
    <div className="App">
        <Navbar dets={amnt} Del={Del} Shut={shut}/>
        <Body Dets={Dets} Empty = {close} />
    </div>
  );
}

export default App;
