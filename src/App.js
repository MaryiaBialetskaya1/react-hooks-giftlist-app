import { useState } from "react";
import { data } from "./data/data";
import "./App.css";

function App() {
  const [gift, setGift] = useState(data);

  const removeItem = (id) => {
    let newGifts = gift.filter((el) => el.id !== id);
    setGift(newGifts);
  };

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
            <div className="container">
              <button onClick={() => removeItem(id)}>Remove</button>
            </div>
          </div>
        );
      })}
      <div className="container">
        <button
          onClick={() => {
            setGift([]);
          }}
        >
          delete all
        </button>
      </div>
    </div>
  );
}

export default App;
