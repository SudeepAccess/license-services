import React from "react";
import Form from "react-bootstrap/Form";
import Table from "react-bootstrap/Table";
import "../Developer/AddInfo.css";

function UploadDocuments() {
  return (
    <>
     
     <div className="bigCard">
          <div className="card">
            <div>
              <h5 className="card-h"> Developer</h5>
            </div>
            {/* <div className="card shadow"> */}

            <div className="card-body">
              <h5 className="card-h">Upload Documents:</h5>
           
              <Table className="table table-bordered" size="sm">
                <thead>
             
                </thead>
                <tbody>
                  <tr>
                    <td> 1 &nbsp;&nbsp;</td>
                    <td>Copy of SPA/GPA/Board Resolution</td>
                    <td>
                      <input
                        type="file"
                        name="upload"
                        placeholder=""
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td> 2&nbsp;&nbsp; </td>
                    <td>
                      Copy of memorandum/Articles of Association/ any other
                      document of developer (if other than individual)*
                    </td>
                    <td>
                      <input
                        type="file"
                        name="upload"
                        placeholder=""
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td> 3 &nbsp;&nbsp;</td>
                 
                    <td>
                      In case of firm/LLP, copy of registered irrevocable
                      partnership deed
                    </td>
                    <td>
                      <input
                        type="file"
                        name="upload"
                        placeholder=""
                        class="form-control"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td> 4&nbsp;&nbsp; </td>
                    <td>
                      In case of HUF, copy of affidavit and copy of PAN card
                    </td>
                    <td>
                      <input
                        type="file"
                        name="upload"
                        placeholder=""
                        class="form-control"
                      />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="form-group col-md2 mt-4">
              <button className="btn btn-success" style={{ float: "right" }}>
                Submit
              </button>
            </div>
          </div>
          </div>
        
    </>
  );
}

export default UploadDocuments;
