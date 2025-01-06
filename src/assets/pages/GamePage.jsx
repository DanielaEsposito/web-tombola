import { useState } from "react";

export default function GamePage() {
  //overlay
  const [overlayClass, setOverlayClass] = useState("");
  const closeOverlay = () => {
    setOverlayClass("d-none");
  };

  // numeri del tabellone
  let numbers = [];
  for (let i = 1; i <= 90; i++) {
    numbers.push(i);
  }
  const [randomNumber, steRundomNumber] = useState("");
  const [drawnNumber, setDrawnNumbers] = useState([]);

  //console.log(numbers);
  //messaggi
  const [message, setMessage] = useState("");
  const phrases = [
    "Lo stivalone decadente",
    "Bestiola indemoniata",
    "La gatta morta",
    "Il principe porcello",
    "Federica",
    "L'origine del Mondo",
    "Il fucile",
    "Ave o maria prega di più per noi...ne abbiamo bisogno",
    "L'insulsa",
    "Ti fanno diventare una spara puzzette",
    "Pantegana",
    "Soldato Rayan",
    "Sant'Antonino ",
    "Il Veneto",
    "L'insulso",
    "Il Boffice",
    "Disonore su di te e sulla tua Mucca",
    "I'm a teapot",
    "MUAHAHAHAHA",
    "Party Rock",
    "La Madonna di Munch",
    "Quello fuori come un balcone",
    "La guardia che guarda",
    "Legolas cosa vedono i tuoi occhi da elfo?",
    "Per me è diesci",
    "Vuoi che muoro?",
    "La monaca di Monza",
    "Adesso non posso ne scendere nè salire!!",
    "Vertebra di Moffetta",
    "Daje roma",
    "Te mollo na sciafa che te impituro su pal muro",
    "Shawarma per tutti",
    "Gli anni di Cristo",
    "Pat Pat",
    "Sono Batman",
    "Quanto fa 15 + 18 ??",
    "Lucius Malfoy...finalmente ci conoscioi",
    "Le gambe delle vecchie",
    "Ara che te dago",
    "Bazinga!!",
    "Signora i limoni....SignoraAAA",
    "Cogito ergo sum",
    "Memento Mori",
    "Ciccio bello ha la bua ma non vole te",
    "Discunt",
    "Sono Massimo Decimo Meridione",
    "Mangia che stai sciupato a nonna",
    "San Vittorio da Arcane protettore degli invalidi e degli Zoppi",
    "Letsgoski",
    "Pizza bacon pineapple and mozzarella",
    "Non è mica facile trovare 90 frasi",
    "Ciao sono Lucia e sono uina Sirena",
    "Chi sei ?? Goku non lo sai...tranquillo fra nessuno di noi lo sa",
    "Nel bel mezzo del cammin di nostra vita mi imbattei in una tombola strana...che la sanità mentale mi fece smarrire",
    "AAAAAAAAAAA",
    "Gesù, Giuseppe, Sant'Angela e Maria",
    "Spero che non mi boccino dopo questa",
    "and his name is john cenaaaaa tu tu ru tuuu",
    "Depilati",
    "Ed, Edd, Eddy",
    "Io sono Pdor, figlio di Kmer",
    "Fra poco mi arrendo",
    "Postit...postit ovunque",
    "Tiziano salvaci tu",
    "Sono a mala pena a 65 frasi...",
    "Sono Lillo",
    "Mi sento come Mr.Peanutbutter...e questo la dice lunga",
    "Ci son due coccodrilli",
    "Non ho mai visto una patata cos' elegante",
    "Il mio gatto di chiama 104",
    "Fra poco mi arrendo parte seconda",
    "La triste e deprimente storia della mia vita",
    "Il cimiche elicottero che mi sveglia di notte",
    "Hai palesemente mangiato della pietra pomice",
    "Ti hanno fatto mangiare secchi di vernice al piombo da piccolo per esser così ?",
    "Mi stanno schioccando i neuroni",
    "I miei neuroni stanno pogando tra di loro",
    "Sono la personificazione dell'esaurimento nervoso",
    "Mi devono santificare",
    "Mi sento un po' spastica",
    "Ho bisogno dell'aiuto da casa",
    "Ma come ci arrivo all'anno prossimo ?",
    "I bicipiti di Ale",
    "Adesso faccio un console.log per vedere a quante frasi sono arrivata, ho esaurito la fantasia ",
    "Io credo in me e nel cuore miooo",
    "Mamma mia here we go again",
    "Mamaaaaa uuuuuu",
    "Oh signore mio",
    "Sto chiedendo suggerimenti a mia madre per delle frasi...non si applica abbastanza",
    "Gino D'acampo salvaci tu",
  ];
  console.log(phrases);

  // estrazione numeri funzione
  function generateRandomNumbers() {
    let randomNumbers = Math.floor(Math.random() * 90) + 1;
    if (!drawnNumber.includes(randomNumbers)) {
      setDrawnNumbers(() => [...drawnNumber, randomNumbers]);
      setMessage(phrases[randomNumbers - 1]);
      return steRundomNumber(randomNumbers);
    } else {
      if (drawnNumber.length == 90) {
        gameOver();
        return alert("hai estratto tutti i numeri ");
      }
      return generateRandomNumbers();
    }
  }
  //game over function
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
        <div className="col-3 ">
          <div className="container d-flex flex-column  align-items-center">
            <p className="last-number">ULTIMO NUMERO ESTRATTO</p>
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
          <div className="phrases">
            <p className="phrases-text">{`${randomNumber}: ${message}`}</p>
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
              <button
                type="button"
                data-bs-dismiss="modal"
                className="btn btn-secondary"
              >
                BACK TO PLAY
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
