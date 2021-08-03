import lmDevLogoImg from "./images/lmDevLogo.png";

const Footer = () => {
  return (
    <div className="container-fluid" id="lineHte">
      <div
        className="row"
        style={{ marginTop: -45, backgroundColor: "#c8c4bd" }}
      >
        <div className="col">
          <h1 className="capstone" style={{ paddingTop: 25 }}>
            CAPSTONE
            <br />
          </h1>
          <h2 id="capstone">Creas Crave eCommerce Portfolio</h2>
          <center>
            <h6
              className="col-4"
              id="capstoneBlurb"
              style={{
                textAlign: "justify",
                color: "#545454",
                paddingBottom: 25,
              }}
            >
              Create a portfolio-style eCommerce website titled 'CREAS CRAVE'.
              Fully wired. Fully operational. Offering original, high-quality
              b-roll videos in the left column. In the right columnn, offering
              original high-quality b-roll videos - modestly edited to
              illustrate possibilities. All video captured at immersion visit in
              Costa Rica.
              <br />
              <br /> Each video ideal to serve as complementary footage if/when
              used in others' video projects.
              <br />
              <br />
              Essentially, my goal is to showcase my creative and design skills
              from content to website produced.
            </h6>
          </center>
          <br />
        </div>
      </div>

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
          </div>
        </div>
      </div>

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
                  ©2019-2021 La'Tonia Mertica 'Communications & Creatives
                  Specialist'
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
  );
};
export default Footer;
