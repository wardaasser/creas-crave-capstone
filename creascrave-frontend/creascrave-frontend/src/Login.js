import Navbar from "./Navbar";
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

            <button type="submit" className="btn btn-dark center">
              LOGIN
            </button>
            <div>
              <p id="resets">
                <span>reset username</span>&nbsp;&nbsp;&nbsp;
                <span>reset password</span>
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
