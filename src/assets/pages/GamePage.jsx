import { useState } from "react";
export default function GamePage() {
  let numbers = [];
  for (let i = 1; i <= 90; i++) {
    numbers.push(i);
  }

  const [overlayClass, setOverlayClass] = useState("");
  const closeOverlay = () => {
    setOverlayClass("d-none");
  };
  const [randomNumber, steRundomNumber] = useState("");
  //console.log(numbers);
  function generateRandomNumbers() {
    let randomNumbers = Math.floor(Math.random() * (90 - 1 + 1)) + 1;
    return steRundomNumber(randomNumbers);
  }
  return (
    <main className="main-content">
      <div className={`overlay ${overlayClass} `}>
        <div className="message d-flex flex-column  align-items-center ">
          <p className="message-text">Ricordati che Gesù ti vede</p>
          <button onClick={closeOverlay} className="btn btn-secondary">
            Go to Play
          </button>
        </div>
      </div>
      <div className="container d-flex ">
        <div className="col-9">
          <div className="container d-flex flex-wrap">
            {numbers.map((num) => {
              return (
                <div key={num} className="singleNum">
                  <span className="num">{num}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-3">
          <div className="container d-flex flex-column  align-items-center">
            <p>Ultimo numero estratto</p>
            <div className="num-drawn">{randomNumber}</div>
            <button
              onClick={generateRandomNumbers}
              className="btn btn-secondary"
            >
              {" "}
              estrai numero{" "}
            </button>
            <hr />
            <button className="btn btn-secondary"> termina il gioco </button>
          </div>
        </div>
      </div>
    </main>
  );
}
