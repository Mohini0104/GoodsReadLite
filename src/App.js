import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [display, setDisplay] = useState("Ratings No 1");
  const [displayItem2, setDisplayItem2] = useState("Rating No2");

  const Fiction = () => {
    setDisplay("THE GRAND STORY OF IKLI CHOKLI(4/5)");
    setDisplayItem2("SSUSIE WILL NOT SPEAK(4.6/5)");
  };

  const Novels = () => {
    setDisplay("DREAMS ON FIRE?(5/5)");
    setDisplayItem2("BigBaazar(4.5/5)");
  };

  const Biography = () => {
    setDisplay("GAUTAMA BUDDHA(5/5)");
    setDisplayItem2(" MOTHER TERESA(4.5/5)");
  };

  return (
    <div className="App">
      <h1>Good Reads Lite</h1>
      <p>Get The Ratings of Book by clicking on the tab</p>
      <button onClick={Fiction}>Fiction</button>
      <button onClick={Novels}>Novels(Fiction)</button>
      <button onClick={Biography}>Biography</button>

      <hr />
      <div>
        <p>{display}</p>
      </div>
      <hr />
      <div>
        <p>{displayItem2}</p>
      </div>
    </div>
  );
}
