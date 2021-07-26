const SidebarCreatives = () => {
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
              purchases
            </li>
            <br />
            <li
              className="list-group-item"
              style={{ backgroundColor: "#c8c4bd", padding: 25 }}
            >
              favorites
            </li>
            <br />
            <li
              className="list-group-item"
              style={{ backgroundColor: "#c8c4bd", padding: 25 }}
            >
              abandoned carts
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
export default SidebarCreatives;
