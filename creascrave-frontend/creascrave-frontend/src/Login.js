import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import lmDevLogo from "./images/lmDevLogo.png";

const Login = () => {
  return (
    <div id="mainLoginReturnDiv" style={{ marginTop: -44 }}>
      <Navbar />
      <div className="container-fluid" style={{ marginBottom: 87 }}>
        <div className="row">
          <form>
            <div id="emailPwRow" style={{ marginTop: 187 }}>
              <label htmlFor="inputEmail" className="col-5 form-label">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="enter email"
                />
              </label>

              <label htmlFor="inputpassword" className="col-5 form-label">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="enter password"
                />
              </label>
            </div>

            <div>
              <p id="createAccount">create new account</p>
            </div>

            <Link to="/customers" style={{ textDecoration: "none" }}>
              <button type="submit" className="btn btn-dark center">
                LOGIN
              </button>
            </Link>

            <div>
              <p style={{ textAlign: "center" }}>
                <span>
                  <a href="/" id="resets">
                    reset username
                  </a>
                </span>
                &nbsp;&nbsp;&nbsp;
                <span>
                  <a href="/" id="resets">
                    reset password
                  </a>
                </span>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="row" style={{ backgroundColor: "white" }}>
        <img
          src={lmDevLogo}
          alt="La'Tonia Mertica Dot Dev Logo"
          className="center"
          style={{
            width: "37%",
            height: "auto",
            marginTop: 30,
          }}
        />
      </div>
    </div>
  );
};
export default Login;
