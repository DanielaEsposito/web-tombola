export default function GamePage() {
  return (
    <main className="main-content">
      <div className="container d-flex">
        <div className="row">
          <div className="col-9">tombola</div>
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
      </div>
    </main>
  );
}
