import NavbarBackend from "./NavbarBackend";
import Sidebar from "./Sidebar";
import Disclaimer from "./Disclaimer";
import Footer from "./Footer";

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
      <Sidebar type="purchases" className="col-4" />
      <div className="row">
        <div className="col-8" style={{ marginBottom: 22 }}></div>
      </div>

      <Disclaimer />
      <Footer />
    </div>
  );
};
export default Purchases;
