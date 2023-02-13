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
      {gift.map((element) => {
        const { id, gift, image } = element;

        return (
          <div key={id}>
            <div className="container">
              <h2>
                {id} - {gift}
              </h2>
            </div>
            <div className="container">
              <img src={image} alt="gifts" width="300px" />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
