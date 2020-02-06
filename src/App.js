import React, {useState} from "react";
import './App.css'
// import Tweet from './Tweet';
function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count  + 1);
    setRed(!isRed);
  };

  return (
    <div className="app">
      {/* <Tweet name="Dev ED" message="This is random tweet 1" likes="4" />
      <Tweet name="john Snow" message="This is random tweet 2" likes="5" />
      <Tweet name="Winter is Coming" message="This is random tweet 3" likes="6" />
      <Tweet name="Mosh" message="This is random tweet 4" likes="7" />
      <Tweet name="Njegos Rajcevic" message="This is random tweet 5" likes="8" />
      <Tweet name="Marko Markovic" message="This is random tweet 6"  likes="9"/> */}
      <button onClick={increment}>Clic Me</button>
      <p>Count: {count}</p>
      <p className={isRed ? "red" : ""}>Change my color!</p>
    </div>
  );
}

export default App;