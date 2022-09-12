import React from 'react';
import Form from 'react-bootstrap/Form';
import Table from 'react-bootstrap/Table';
import "../Developer/AddInfo.css";

function UploadDocuments() {
  return (
    <>
    <div className="container my-5">
      <div className="row mt-4">
     
          
            <div className="card">
              <div>
                <h5 className="card-h"> Developer</h5>
              </div>
              {/* <div className="card shadow"> */}
                

                <div className="card-body">
                  <h5 className="card-h">Upload Documents:</h5>
      {/* <Form.Group className="mb-3">
        <Form.Label>Disabled input</Form.Label>
        <Form.Control placeholder="Disabled input" disabled />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Disabled select menu</Form.Label>
        <Form.Select disabled>
          <option>Disabled select</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Check type="checkbox" label="Can't check this" disabled />
      </Form.Group> */}
      <Table className="table table-bordered" size="sm">
      <thead>
        {/* <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          
        </tr> */}
      </thead>
      <tbody>
        <tr>
          <td> 1 &nbsp;&nbsp;</td>
          <td>Copy of SPA/GPA/Board Resolution</td>
          <td><input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  class="form-control"
                                /></td>
          
        </tr>
        <tr>
          <td> 2&nbsp;&nbsp; </td>
          <td>Copy of memorandum/Articles of Association/ any other document of developer (if other than individual)*</td>
          <td><input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  class="form-control"
                                /></td>
          
        </tr>
        <tr>
          <td> 3 &nbsp;&nbsp;</td>
          {/* <td colSpan={2}>Larry the Bird</td> */}
          <td>In case of firm/LLP, copy of registered irrevocable partnership deed</td>
          <td><input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  class="form-control"
                                /></td>
        </tr>
        <tr>
          <td> 4&nbsp;&nbsp; </td>
          <td>In case of HUF, copy of affidavit and copy of PAN card</td>
          <td><input
                                  type="file"
                                  name="upload"
                                  placeholder=""
                                  class="form-control"
                                /></td>
          
        </tr>
      </tbody>
    </Table>
      </div>
      <div className="form-group col-md2 mt-4">
                        <button  className="btn btn-success" style={{ float: "right" }}>Submit
                        </button>
                      </div>
      </div>
      </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default UploadDocuments;