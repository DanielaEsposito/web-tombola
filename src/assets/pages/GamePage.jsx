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
  const [drawnNumber, setDrawnNumbers] = useState([]);

  //console.log(numbers);

  function generateRandomNumbers() {
    let randomNumbers = Math.floor(Math.random() * 90) + 1;
    if (!drawnNumber.includes(randomNumbers)) {
      setDrawnNumbers(() => [...drawnNumber, randomNumbers]);
      return steRundomNumber(randomNumbers);
    } else {
      if (drawnNumber.length == 90) {
        return alert("hai estratto tutti i numeri ");
      }
      return generateRandomNumbers();
    }
  }

  function gameOver() {
    steRundomNumber("");
    setDrawnNumbers([]);
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
                <div
                  key={num}
                  id={num}
                  className={`singleNum ${
                    drawnNumber.includes(num) ? "drawn" : ""
                  }`}
                >
                  <span className="num">{num}</span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-3">
          <div className="container d-flex flex-column  align-items-center">
            <p>ULTIMO NUMERO ESTRATTO</p>
            <div className="num-drawn">{randomNumber ? randomNumber : "?"}</div>
            <button
              onClick={generateRandomNumbers}
              className="btn btn-secondary"
            >
              {" "}
              estrai numero{" "}
            </button>
            <div className="hr"></div>

            <button
              type="button"
              className="btn btn-secondary"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Termina il Gioco
            </button>
          </div>
        </div>
      </div>
      {/*GAME OVER MODAL */}

      <div
        className="modal fade"
        data-bs-theme="dark"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                GAME OVER
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              sei sicuro di voler terminare il gioco ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={gameOver}
              >
                GAME OVER
              </button>
              <button type="button" className="btn btn-secondary">
                BACK TO PLAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
