export default function GamePage() {
  let numbers = [];
  for (let i = 1; i <= 90; i++) {
    numbers.push(i);
  }
  //console.log(numbers);
  return (
    <main className="main-content">
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
            <div className="num-drawn"></div>
            <button className="btn btn-secondary"> estrai numero </button>
            <hr />
            <button className="btn btn-secondary"> termina il gioco </button>
          </div>
        </div>
      </div>
    </main>
  );
}
