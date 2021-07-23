import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const Customers = () => {
  return (
    <div>
      <div className="container-fluid">
        <Navbar />
        <div className="row">
          <div className="col-4">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Customers;
