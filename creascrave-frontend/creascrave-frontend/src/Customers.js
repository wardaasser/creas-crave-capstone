import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Customers = () => {
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-4">
            <Sidebar />
          </div>
          <div className="col-8"></div>
        </div>
      </div>
    </div>
  );
};
export default Customers;
