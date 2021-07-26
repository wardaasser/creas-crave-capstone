const SidebarPurchases = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col"
          style={{
            fontSize: "small",
            marginLeft: 22,
            maxWidth: "13%",
            textAlign: "center",
          }}
        >
          <ul className="list-group" style={{ paddingTop: 87 }}>
            <li
              className="list-group-item"
              style={{ backgroundColor: "#c8c4bd", padding: 25 }}
            >
              customers
            </li>
            <br />
            <li
              className="list-group-item"
              style={{ backgroundColor: "#c8c4bd", padding: 25 }}
            >
              creatives sold
            </li>
            <br />
            <li
              className="list-group-item"
              style={{ backgroundColor: "#c8c4bd", padding: 25 }}
            >
              sales amounts
            </li>
            <br />
            <li
              className="list-group-item"
              style={{ backgroundColor: "#c8c4bd", padding: 25 }}
            >
              sold dates
            </li>
            <br />
            <li
              className="list-group-item"
              style={{ backgroundColor: "#c8c4bd", padding: 25 }}
            >
              logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default SidebarPurchases;
