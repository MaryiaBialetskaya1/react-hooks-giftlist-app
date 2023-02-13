import { useState } from "react";
import { data } from "./data/data";
import "./App.css";

function App() {
  const [gift, setGift] = useState(data);
  console.log(data);

  return (
    <div>
      <div className="container">
        <h1>Gift List {gift.length}</h1>
      </div>
    </div>
  );
}

export default App;
