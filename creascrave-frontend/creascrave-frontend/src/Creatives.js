import NavbarBackend from "./NavbarBackend";
import SidebarCreatives from "./SidebarCreatives";
import lmDevLogo from "./images/lmDevLogo.png";

const Creatives = () => {
  return (
    <div
      className="container-fluid"
      style={{ marginTop: -44, backgroundColor: "#545454" }}
    >
      <div className="btn-group">
        <button
          className="btn btn-secondary btn-sm dropdown-toggle"
          type="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          Small button
        </button>
        <div className="dropdown-menu">...</div>
      </div>

      <NavbarBackend />
      <SidebarCreatives className="col-4" />
      <div className="row">
        <div className="col-8" style={{ marginBottom: 22 }}></div>
      </div>

      <div className="row disclaimer" style={{ backgroundColor: "#360836" }}>
        <p>
          <h1
            style={{
              fontSize: "smaller",
              color: "white",
              textAlign: "center",
              paddingTop: 20,
            }}
          >
            disclaimer: unauthorized access and/or usage will be prosecuted to
            the fullest extent of the creatives law.
          </h1>
        </p>
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
export default Creatives;
