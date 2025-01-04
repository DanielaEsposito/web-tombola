import { Link, NavLink } from "react-router-dom";
export default function HomeLayout() {
  return (
    <div className="wrapper">
      <div className="backgroung-img">
        <div className="container home-container">
          <div className="black-container">
            <h1 className="home-title">
              Tombola <br /> Ignorante
            </h1>
            <div className="btn-link">
              <Link to="/game" className="link-gamePage">
                Start to Play
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
