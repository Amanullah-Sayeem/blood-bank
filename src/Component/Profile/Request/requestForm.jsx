import "./requestForm.css";
import { useState } from "react";

const RequestForm = () => {
  const [relation, setRelation] = useState(0);
  const [bloodGroup, setBloodGroup] = useState(0);
  return (
    <div className="requestContainer">
      <div className="container">
        <div>
          <label htmlFor="city">Area or City</label> <br />
          <div className="customInput">
            <input type="text" placeholder="New York" id="city" />
          </div>
        </div>
        <div className="my-3 row">
          <div className="col-6">
            <label htmlFor="bloodGroup">Boold Group</label> <br />
            <div className="customInput">
              <select
                onChange={(e) => setBloodGroup(e.value)}
                value={bloodGroup}
                id="bloodGroup"
              >
                <option value="0">O+</option>
                <option value="1">O-</option>

                <option value="2">A+</option>
                <option value="3">A-</option>

                <option value="4">B+</option>
                <option value="5">B-</option>
                <option value="6">AB+</option>
                <option value="7">AB-</option>
              </select>
            </div>
          </div>
          <div className="col-6">
            <label htmlFor="relation">I am his/her</label> <br />
            <div className="customInput">
              <select
                onChange={(e) => setRelation(e.value)}
                value={relation}
                placeholder=""
                id="relation"
              >
                <option value="0">Brother</option>
                <option value="1">Neighbour</option>
                <option value="2">Cusin</option>
                <option value="3">Others</option>
              </select>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-between">
          <div>
            <input
              style={{ cursor: "pointer" }}
              className=" form-check-input"
              type="checkbox"
              value=""
              id="urgent"
            />
            <label class="ms-2 form-check-label" for="urgent">
              Urgent
            </label>
          </div>
          <div className="schedule">Schedule</div>
        </div>
        <div className="text-center">
          <button
            onClick={() => window.alert("Submit Success")}
            className="customButton"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};

export default RequestForm;
