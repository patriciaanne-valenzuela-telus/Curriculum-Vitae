import React from "react";
import Charac from "../assets/charac.png";
import Telus from "../assets/telus.jpg";
import IICS from "../assets/cics.png";
import "../body.css";

//Contains Character References Information
class CharacterReferences extends React.Component {
  render() {
    return (
      <div className="initialDiv">
        <br />

        <h1 className="titleHeader">
          <img src={Charac} alt="charac" width="55" height="55" /> &nbsp;
          Character References
        </h1>

        <hr className="hrClassName"></hr>

        <table>
          <tr>
            <td>
              <img src={Telus} alt="telus" width="45" height="62" />
            </td>{" "}
            &nbsp;
            <td className="titleDescription">
              Mr. Dickenson Culala
              <br />
              <span className="subtitleDescription">
                Supervisor at TELUS International Philippines Internship{" "}
              </span>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <img src={IICS} alt="iics" width="48" height="56" />
            </td>{" "}
            &nbsp;
            <td className="titleDescription">
              Assoc. Prof. Noel Estrella, DIT
              <br />
              <span className="subtitleDescription">
                Professor at UST College of Information and Computing Sciences
              </span>
            </td>
          </tr>
          <br />
          <tr>
            <td>
              <img src={IICS} alt="iics" width="48" height="56" />
            </td>{" "}
            &nbsp;
            <td className="titleDescription">
              Asst. Prof. Jerralyn Padua, MSCS
              <br />
              <span className="subtitleDescription">
                Organizational Adviser at UST Cisco Networking Academy Gateway
              </span>{" "}
              <br />
              <span className="subtitleDescription">
                Dean at the UST College of Information and Computing Sciences
              </span>
            </td>
          </tr>

          <br></br>
          <br></br>
        </table>
      </div>
    );
  }
}
export default CharacterReferences;
