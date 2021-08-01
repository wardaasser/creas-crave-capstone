import { useState } from "react";

//CODE FOR FN PAIRED WITH CODE IN MYSTORY BELOW TO JEST TEST
// export const handleBodyLinks = (bodyLinks) => {
//   if (bodyLinks === "myStory") {
//     return "myStory";
//   } else {
//     return "false";
//   }
// };

const BodyLinks = () => {
  const [underBodyLinks, setUnderBodyLinks] = useState();
  return (
    <div className="container-fluid">
      <div
        className="row"
        id="bodyLinks"
        style={{
          background: underBodyLinks ? "#360836" : "#545454",
        }}
      >
        <span
          className="col bodyLinks bodyLinkSubscribe"
          id="toSubscribe"
          onClick={() => {
            if (underBodyLinks === "subscribe") {
              setUnderBodyLinks("");
            } else {
              setUnderBodyLinks("subscribe");
            }
          }}
          style={{
            textDecoration:
              underBodyLinks === "subscribe" ? "underline" : "none",
          }}
        >
          SUBSCRIBE
        </span>

        <span
          className="col bodyLinks bodyLinkConnect"
          id="toConnect"
          onClick={() => {
            if (underBodyLinks === "connect") {
              setUnderBodyLinks("");
            } else {
              setUnderBodyLinks("connect");
            }
          }}
          style={{
            textDecoration: underBodyLinks === "connect" ? "underline" : "none",
          }}
        >
          CONNECT
        </span>

        <span
          className="col bodyLinks bodyLinkMyStory"
          id="toMyStory"
          onClick={() => {
            //CODE TO TEST MYSTORY PAIRED WITH FN COMMENTED OUT ABOVE
            // const links = handleBodyLinks(underBodyLinks);
            // setUnderBodyLinks(links);
            if (underBodyLinks === "myStory") {
              setUnderBodyLinks("");
            } else {
              setUnderBodyLinks("myStory");
            }
          }}
          style={{
            textDecoration: underBodyLinks === "myStory" ? "underline" : "none",
            zIndex: 3,
          }}
        >
          MY STORY
        </span>

        <span
          className="col bodyLinks bodyLinkPricing"
          id="toPricing"
          onClick={() => {
            if (underBodyLinks === "pricing") {
              setUnderBodyLinks("");
            } else {
              setUnderBodyLinks("pricing");
            }
          }}
          style={{
            textDecoration: underBodyLinks === "pricing" ? "underline" : "none",
          }}
        >
          PRICING
        </span>

        <span
          className="col bodyLinks bodyLinkUnsubscribe"
          id="toUnsubscribe"
          onClick={() => {
            if (underBodyLinks === "unsubscribe") {
              setUnderBodyLinks("");
            } else {
              setUnderBodyLinks("unsubscribe");
            }
          }}
          style={{
            textDecoration:
              underBodyLinks === "unsubscribe" ? "underline" : "none",
          }}
        >
          UNSUBSCRIBE
        </span>

        <div className="row" id="underBodyLinks">
          {underBodyLinks === "subscribe" ? (
            <div className="col" id="bodyLinkSubscribe">
              <div
                className="row"
                style={{ marginTop: underBodyLinks === "" ? 0 : 37 }}
              >
                <span className="row" id="toSubscribe">
                  <form>
                    <div className="input-group" id="input-groupForm">
                      <input
                        type="text"
                        className="form-control"
                        id="emailInput"
                        placeholder="enter email to subscribe"
                        aria-label="your email"
                        aria-describedby="submit"
                      />
                      <button
                        className="btn btn-dark"
                        type="button"
                        id="toInputInSubscribe"
                        style={{
                          backgroundColor: "#360836",
                          borderColor: "#5ce1e6",
                        }}
                      >
                        submit
                      </button>
                    </div>
                  </form>
                </span>
              </div>
            </div>
          ) : null}
          {underBodyLinks === "connect" ? (
            <div
              className="col"
              id="bodyLinkConnect"
              style={{
                marginTop: underBodyLinks === "" ? 0 : 15,
                marginBottom: -20,
              }}
            >
              <div className="row">
                <span className="row" id="toConnect">
                  <a
                    href="https://www.latoniamertica.dev"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p id="gatewayText">
                      digital{" "}
                      <span id="portfolioText">
                        <span id="curlyBraces">&#123;</span>
                        &nbsp;portfolio&nbsp;
                        <span id="curlyBraces">&#125;</span>
                      </span>{" "}
                      gateway
                    </p>
                  </a>
                </span>
              </div>
            </div>
          ) : null}

          {underBodyLinks === "myStory" ? (
            <div className="col" id="bodyLinkMyStory">
              <div
                className="row"
                style={{
                  marginTop: underBodyLinks === "" ? 0 : 27,
                  marginBottom: -17,
                }}
              >
                <span className="row" id="toMyStory">
                  <p className="centerStoryText">
                    words and writing inspire me to communicate exceptionally
                    <br />
                    <span id="dashSign">- </span>without lack of appreciation
                    for effort required<span id="dashSign"> -</span> <br />
                    <span id="mostChallengingCommitment">
                      code/web dev is my most challenging commitment to
                      exceptional communication
                    </span>
                  </p>
                </span>
              </div>
            </div>
          ) : null}
          {underBodyLinks === "pricing" ? (
            <div className="col" id="bodyLinkPricing">
              <div
                className="row"
                style={{
                  marginTop: underBodyLinks === "" ? 0 : 25,
                  marginBottom: -35,
                  zIndex: 2,
                }}
              >
                <div>
                  <span className="row" id="toPricing">
                    <p className="pricingText justify-content-center">
                      <sup id="dollarSign">$</sup>

                      <span id="fortyFour">44</span>

                      <span id="perVideo">per video</span>
                    </p>
                  </span>
                </div>
              </div>
            </div>
          ) : null}
          {underBodyLinks === "unsubscribe" ? (
            <div className="col" id="bodyLinkUnsubscribe">
              <div
                className="row"
                style={{ marginTop: underBodyLinks === "" ? 0 : 37 }}
              >
                <span className="row" id="toUnsubscribe">
                  <form>
                    <div className="input-group" id="input-groupForm">
                      <input
                        type="text"
                        className="form-control"
                        id="emailInput"
                        placeholder="unsubscribe your email"
                        aria-label="your email"
                        aria-describedby="submit"
                      />
                      <button
                        className="btn btn-dark"
                        type="button"
                        id="toInputInUnsubscribe"
                        style={{
                          backgroundColor: "#360836",
                          borderColor: "#5ce1e6",
                        }}
                      >
                        submit
                      </button>
                    </div>
                  </form>
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default BodyLinks;
