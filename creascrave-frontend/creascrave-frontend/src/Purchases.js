import Footer from "./Footer";
import NavbarBackend from "./NavbarBackend";
import Sidebar from "./Sidebar";

const Purchases = () => {
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
      <Sidebar className="col-4" />
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
      <Footer />
    </div>
  );
};
export default Purchases;
