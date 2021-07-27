const Sidebar = ({ links }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div
          className="col"
          style={{
            fontSize: "small",
            marginLeft: 22,
            minWidth: "18%",
            maxWidth: "20%",
            textAlign: "center",
          }}
        >
          <ul className="list-group" style={{ paddingTop: 87 }}>
            {links.map((link) => {
              return (
                <>
                  <li
                    className="list-group-item"
                    style={{ backgroundColor: "#c8c4bd", padding: 37 }}
                  >
                    {link}
                  </li>
                  <br />
                </>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
