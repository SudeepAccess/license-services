import React from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";

import "../Developer/Add1.css";

function DeveloperCard() {
  return (
    <>
      <div className="container my-5">
        <div className=" col-12 m-auto">
          
            <div className="card">
            <h5 className="card-h">Developer</h5>
            <div className="row">
              <div className="col col-4">
                <div className="card-body">
                  <div className="card-button">
                    <h5 className="card-hd"><Link to="/developercapacity">Technical Capacity</Link></h5>
                  </div>
                </div>
              </div>
              <div className="col col-4">
                <div className="card-body">
                  <div className="card-button">
                    <h5 className="card-hd"><Link to="/capacity">Financial Capacity</Link></h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeveloperCard;
