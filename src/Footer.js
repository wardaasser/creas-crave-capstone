import lmDevLogoImg from "./images/lmDevLogo.png";

const Footer = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <img
            className="mx-auto d-block img-responsive"
            id="lmdev-logo"
            src={lmDevLogoImg}
            style={{ width: "40%" }}
            alt="La'Tonia Mertica dot dev logo"
          />

          <div className="container-fluid" id="lineHte">
            <div className="row">
              <div className="col">
                <h1 className="capstone">
                  CAPSTONE
                  <br />
                </h1>
                <p id="capstone">Creas Crave eCommerce Portfolio</p>
                <br />
                <br />

                <div className="container-fluid">
                  <div className="row" id="footer-details">
                    <div className="col">
                      <h2>
                        <span className="notbold">
                          <p>La'Tonia Mertica</p>

                          <div>
                            <p>
                              (
                              <span className="pronunciation">
                                luh tone yuh merr treece
                              </span>
                              )
                            </p>
                          </div>

                          <p id="lmTitle">Founder & Executive Officer</p>
                          <br />

                          <p>PUBLICLY ANONYMOUS, LLC</p>
                          <p>
                            ©2019-2021 La'Tonia Mertica 'Communications &
                            Creatives Specialist'
                          </p>
                          <p>All Rights Reserved</p>
                          <br />

                          <p>2200 South Salina Street #684</p>
                          <p>Syracuse, New York 13205</p>
                          <p>
                            <a
                              href={"mailto: designs@latoniamertica.com"}
                              target="_blank"
                              rel="noreferrer"
                              id="emailLink"
                              className="emailHover"
                            >
                              designs@latoniamertica.com
                            </a>
                          </p>
                          <br />
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
