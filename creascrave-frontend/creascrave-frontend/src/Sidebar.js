const Sidebar = ({ links }) => {
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
            {links.map((link) => {
              return (
                <>
                  <li
                    className="list-group-item"
                    style={{ backgroundColor: "#c8c4bd", padding: 25 }}
                  >
                    {link}
                  </li>
                  <br />
                </>
              );
            })}
            <li
              className="list-group-item"
              style={{ backgroundColor: "#c8c4bd", padding: 25 }}
            >
              purchase history
            </li>
            <br />
            <li
              className="list-group-item"
              style={{ backgroundColor: "#c8c4bd", padding: 25 }}
            >
              favorite creatives
            </li>
            <br />
            <li
              className="list-group-item"
              style={{ backgroundColor: "#c8c4bd", padding: 25 }}
            >
              items in cart
            </li>
            <br />
            <li
              className="list-group-item"
              style={{ backgroundColor: "#c8c4bd", padding: 25 }}
            >
              delete account
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
export default Sidebar;
