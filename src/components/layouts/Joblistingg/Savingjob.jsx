import Tab from ".//../../core-ui/Joblisting/Tab";
import Avatar from ".//../../core-ui/Joblisting/Avatar";
import { TiMediaRecord } from "react-icons/ti";
import { render } from "@testing-library/react";
const Savingjob = ({ data }) => {
  return (
    <div className="saving-descrpition">
      <div className="savingdesc">
        <div className="image">
          <Avatar imagejob={data === undefined ? "" : data.image}></Avatar>
        </div>
        <div className="tab">
          <Tab
            location={data === undefined ? "" : data.location}
            salaryjob={data === undefined ? "" : data.salaryjob}
          ></Tab>
          <h3>{data === undefined ? "" : data.timepostjob}</h3>
        </div>
        <div className="save">
          <button> Save </button>
        </div>
        <div className="apply">
          <button> Apply</button>
        </div>
      </div>
      <hr></hr>
      <div className="jobdescription">
        <h1>Job description</h1>
        <p>{data === undefined ? "" : data.detailjob}</p>
      </div>
      <div className="reference-needs">
        <table className="table-des">
          <thead className="title-requir">
            <tr>
              <th>Skills needed</th>
              <th>Industry</th>
              <th>Imployment type</th>
            </tr>
          </thead>
          <tbody>
            <tr className="name-requir">
              <td className="icon-pur">
                <span>
                  <TiMediaRecord></TiMediaRecord>
                </span>
                HTML
              </td>
              <td className="icon-pur">
                <span>
                  <TiMediaRecord></TiMediaRecord>
                </span>
                Infor
              </td>
              <td className="icon-pur">
                <span>
                  <TiMediaRecord></TiMediaRecord>
                </span>
                Full
              </td>
            </tr>
            <tr className="name-requir">
              <td className="icon-pur">
                <span>
                  <TiMediaRecord></TiMediaRecord>
                </span>
                HTML
              </td>
              <td className="icon-pur">
                <span>
                  <TiMediaRecord></TiMediaRecord>
                </span>
                Full
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Savingjob;
