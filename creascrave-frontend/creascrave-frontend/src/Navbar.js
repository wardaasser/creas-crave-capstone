import shoppingCartImg from "./images/shoppingCart.png";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bglmccsblue">
          <div className="container-fluid">
            <a className="navbar-brand" href={{ Navbar }}>
              CREAS CRAVE
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse navbar-left"
              id="navbarSupportedContent"
            >
              <div className="row" style={{ marginTop: 10 }}>
                <div className="col">
                  <form className="d-flex">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="get creative"
                      aria-label="Search"
                    />
                    <button
                      className="btn btn-outline-light"
                      type="button"
                      id="searchSubmitBtn"
                    >
                      search
                    </button>
                  </form>
                </div>
                <div className="col-2">
                  <a href="/">
                    <img
                      className="img-responsive"
                      style={{ height: 37 }}
                      src={shoppingCartImg}
                      alt="Shopping Cart"
                      id="shopCart"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
