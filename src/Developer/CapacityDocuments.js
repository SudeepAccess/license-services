
import React from "react";
import Table from "react-bootstrap/Table";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { Container } from "react-bootstrap";

class Showhide extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }
  onchange = (e) => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;

    return (
      <React.Fragment>
        <Container>
          {/* <div className="container my-5">
            <div className="row mt-4"> */}
            <div className="bigCard">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">
                    (i) Details of following documents
                  </h5>
                  <div className="row">
                    <div className="col-sm-12">
                      {/* <h4 className='mt-3 text-center mb-3'>Output  </h4> */}

                      {/* <div className="form-group row">
                                <label className="col-sm-3 col-form-label">Name</label>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" id="inputPassword" placeholder="Enter Name" />
                                </div>
                            </div> */}

                      <div className="form-group row">
                        {/* <label className="col-sm-3 col-form-label">Full Address</label> */}
                        <div className="col-sm-3 mt-4">
                          Individual
                          <input
                            type="radio"
                            className="mx-2"
                            name="isyes"
                            value="1"
                            onChange={this.onchange}
                          />
                        </div>
                        <div className="col-sm-3 mt-4">
                          Company
                          <input
                            type="radio"
                            className="mx-2 mt-1"
                            name="isyes"
                            value="0"
                            onChange={this.onchange}
                          />
                        </div>
                        <div className="col-sm-3 mt-4">
                          LLP
                          <input
                            type="radio"
                            className="mx-2 mt-1"
                            name="isyes"
                            value="2"
                            onChange={this.onchange}
                          />
                        </div>
                      </div>

                      {value === "1" && (
                        <div className="form-group row mb-12">
                          {/* <label className="col-sm-3 col-form-label">Individual</label> */}
                          <div className="col-sm-12">
                            {/* <textarea type="text" className="form-control" id="details" placeholder="Enter Details" /> */}
                            <Table className="table table-bordered" size="sm">
                              <thead>
                                <tr>
                                  <th>S.No.</th>
                                  <th>Particulars of document</th>
                                  <th>Details </th>
                                  <th>Annexure </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td> 1 </td>
                                  <td>
                                    Net Worth in case of individual certified by
                                    CA
                                  </td>
                                  <td>
                                    <input
                                      type="file"
                                      name="upload"
                                      placeholder=""
                                      class="form-control"
                                    />
                                  </td>
                                  <td align="center" size="large">
                                    <FileUploadIcon />
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      )}

                      {value === "0" && (
                        <div className="form-group row">
                          {/* <label className="col-sm-3 col-form-label">Company</label> */}
                          <div className="col-sm-12">
                            {/* <input type="text" className="form-control" id="Email" placeholder="Enter Email" /> */}
                            <Table className="table table-bordered" size="sm">
                              <thead>
                                <tr>
                                  <th>S.No.</th>
                                  <th>Particulars of document</th>
                                  <th>Details </th>
                                  <th>Annexure </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td> 1 </td>
                                  <td>Balance sheet of last 3 years </td>
                                  <td>
                                    <input
                                      type="file"
                                      name="upload"
                                      placeholder=""
                                      class="form-control"
                                    />
                                  </td>
                                  <td align="center" size="large">
                                    <FileUploadIcon />
                                  </td>
                                </tr>
                                <tr>
                                  <td> 2 </td>
                                  <td>Ps-3(Representing Paid-UP capital)</td>
                                  <td>
                                    <input
                                      type="file"
                                      name="upload"
                                      placeholder=""
                                      class="form-control"
                                    />
                                  </td>
                                  <td align="center" size="large">
                                    <FileUploadIcon />
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      )}
                      {value === "2" && (
                        <div className="form-group row">
                          {/* <label className="col-sm-3 col-form-label">LLP</label> */}
                          <div className="col-sm-12">
                            {/* <input type="text" className="form-control" id="llp" placeholder="Enter Email" /> */}
                            <Table className="table table-bordered" size="sm">
                              <thead>
                                <tr>
                                  <th>S.No.</th>
                                  <th>Particulars of document</th>
                                  <th>Details </th>
                                  <th>Annexure </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td> 1 </td>
                                  <td>Networth of partners </td>
                                  <td>
                                    <input
                                      type="file"
                                      name="upload"
                                      placeholder=""
                                      class="form-control"
                                    />
                                  </td>
                                  <td align="center" size="large">
                                    <FileUploadIcon />
                                  </td>
                                </tr>
                                <tr>
                                  <td> 2 </td>
                                  <td>Net worth of firm</td>
                                  <td>
                                    <input
                                      type="file"
                                      name="upload"
                                      placeholder=""
                                      class="form-control"
                                    />
                                  </td>
                                  <td align="center" size="large">
                                    <FileUploadIcon />
                                  </td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      )}

                      <div className="form-group row mt-5 text-center">
                        <label className="col-sm-2 col-form-label"></label>
                        <div className="col-sm-6 mt-2">
                          <button
                            name="button"
                            className="btn btn-primary btn-lg"
                          >
                            {" "}
                            Submit{" "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
            {/* </div>
          </div> */}
        </Container>
      </React.Fragment>
    );
  }
}
export default Showhide;
