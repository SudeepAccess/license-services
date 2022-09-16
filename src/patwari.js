import React, { useState } from "react";
import { TableRow, TableHead,  TableCell, TableBody, Table} from '@material-ui/core';
import { Form } from "react-bootstrap";
import { Card, Row, Col } from "react-bootstrap";

const Patwari = () => {
    const handleChange = (e) => {
        this.setState({ isRadioSelected: true });

    }
    const [showhide, setShowhide] = useState("No");
    const [showhide0,setShowhide0]=useState("No");
    const [showhide1, setShowhide1] = useState("No");
    const [showhide2, setShowhide2] = useState("No");
    const [showhide3, setShowhide3] = useState("No");
    const [showhide4, setShowhide4] = useState("No");
    const handleshow = e => {
        const getshow = e.target.value;
        setShowhide(getshow);
    }
    const handleshow0 = e => {
        const getshow = e.target.value;
        setShowhide0(getshow);
    }
    const handleshow1 = e => {
        const getshow = e.target.value;
        setShowhide1(getshow);
    }
    const handleshow2 = e => {
        const getshow = e.target.value;
        setShowhide2(getshow);
    }
    const handleshow3 = e => {
        const getshow = e.target.value;
        setShowhide3(getshow);
    }
    const handleshow4 = e => {
        const getshow = e.target.value;
        setShowhide4(getshow);
    }
    return (
        <Form style={{width:1000,marginLeft:218}} autoComplete="off">
             <Form.Group className="justify-content-center" controlId="formBasicEmail">
                <Row className="ml-auto" style={{ marginBottom: 5 }}>
            <div class="px-2">
                <h5 className="text-black" > 1. &nbsp;Applicants and their
                    ownership:-</h5>
                <div className="applt" style={{ overflow: "auto" }}>
                    <Table className="table table-bordered table-responsive col col-12 ">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name of individual land owner/ land owning company/firm/LLP etc.</TableCell>
                                <TableCell >Name of Revenue estate</TableCell>
                                <TableCell >Rectangle No.</TableCell>
                                <TableCell >Killa No</TableCell>
                                <TableCell >Type of land (chahi/nehri. Gair Mumkins/others)	</TableCell>
                                <TableCell >Area(opt1 option)<hr></hr>
                                    <TableRow>
                                        <TableHead>
                                            (a)Kanal-Marla-sarsai

                                        </TableHead>
                                        <TableHead> (b)Bigha-biswa-biswansi </TableHead>
                                    </TableRow><hr></hr>
                                    <TableRow>
                                        <TableHead>


                                        </TableHead>
                                        <TableHead> (a)Kanal-Marla-sarsai<br /><br />
                                            (ii) Pucca(1-12-0 =1 acre)

                                        </TableHead>
                                    </TableRow>
                                </TableCell>
                                <TableCell >Whether in collaboration (Yes/No)	</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row">
                                    <input type="text" className="form-control" />
                                </TableCell>
                                <TableCell component="th" scope="row">
                                    <input type="text" className="form-control" />
                                </TableCell>

                                <TableCell align="right">  <input type="number" className="form-control" /></TableCell>
                                <TableCell align="right">  <input type="number" className="form-control" /></TableCell>
                                <TableCell align="right">  <input type="number" className="form-control" /></TableCell>
                                <TableCell component="th" scope="row">
                                    <label />Calculate Total Area(in acres)
                                </TableCell>
                                <TableCell class="text-center"> <input type="radio" value="Yes" id="Yes"
                                    onChange={handleChange} name="Yes" onClick={handleshow0} />
                                    <label for="Yes">Yes</label>

                                    <input type="radio" value="No" id="No"
                                        onChange={handleChange} name="Yes" onClick={handleshow0} />
                                    <label for="No">No</label>
                                    {
                        showhide0 === "No" && (
                            <div className="row " >
                                <div className="col col-6">
                                    <label className="font-weight-bold">Collaboration No.</label>
                                    <input type="text" className="form-control" />
                                </div>
                                <div className="col col-6">
                                    <label className="font-weight-bold">Collaboration Date</label>
                                    <input type="date" className="form-control" />
                                </div>
                            </div>

                        )
                    }
                                    </TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </div>
                {/* <table class="table table-bordered table-responsive">
                        <thead>
                            <tr>
                                <th>Name of individual land owner/ land owning company/firm/LLP etc.
                                </th>
                                <th>Name of Revenue estate </th>
                                <th>Rectangle No.</th>
                                <th>Killa No. </th>
                                <th>Type of land (chahi/nehri. Gair Mumkins/others)</th>

                                <th style={{padding:0}}>
                                    <p style="text-align:center">Area(opt1 option) </p>
                                    </th>
                                    </tr>
                            <tr>
                                <th>
                                    (a)Kanal-Marla-sarsai

                                </th>
                                <th> (b)Bigha-biswa-biswansi</th>
                            </tr>
                            <tr>
                               
                                <th> (a)Kanal-Marla-sarsai<br><br>
                                    (ii) Pucca(1-12-0 =1 acre)
                                    </br></br>
                                    </th>
                           
                          
                            <th>Whether in collaboration (Yes/No)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td></td>
                                <td> </td>
                                <td> </td>
                                <td> </td>

                                <td>
                                    <label class="text-black font-weight-bold"></label>
                                    <select class="custom-select col-8">

                                        <option></option>
                                    </select>
                                </td>
                                <td style={{padding:0}}>

                                    Calculate total area (in acres)

                                </td>

                                <td>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="collaborationPlan" value="Y"
                                            name="collaborationPlan"
                                            class="custom-control-input"/>
                                        <label class="custom-control-label" for="collaborationPlan">YES</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                        <input type="radio" id="collaborationPlanN" value="N"
                                            name="collaborationPlan"
                                            class="custom-control-input"/>
                                        <label class="custom-control-label" for="collaborationPlanN">NO</label>
                                    </div>
                                    <div  class="col-md-8 px-0 my-2">
                                        <label class="text-black font-weight-bold">Collaboration
                                            No.</label>
                                        <input type="text" class="form-control my-2" id=""/>
                                        <label class="text-black font-weight-bold">Collaboration
                                            Date</label>
                                        <input type="date" class="form-control my-2" id=""/>
                                    </div>
                                    
                                </td>
                            </tr>


                        </tbody>
                    </table> */}


            </div>

            <h5 className="text-black">2. Shahjra Plan</h5>
            <div className="row">
                <div className="col col-6">

                    <h6  >(i)As per applied land (Yes/No)</h6>
                    <input type="radio" value="Yes" id="Yes"
                        onChange1={handleChange} name="Yes" onClick={handleshow} />
                    <label for="Yes">Yes</label>

                    <input type="radio" value="No" id="No"
                        onChange1={handleChange} name="Yes" onClick={handleshow} />
                    <label for="No">No</label>
                    {
                        showhide === "No" && (
                            <div className="row " >
                                <div className="col col-6">
                                    <label className="font-weight-bold">Remarks</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                        )
                    }
                </div>

                <div className="col col-6 ">

                    <h6>(ii) If any revenue rasta abuts to the applied site (Yes/No)</h6>
                    <input type="radio" value="Yes" id="Yes"
                        onChange1={handleChange} name="Yes" onClick={handleshow1} />
                    <label for="Yes">Yes</label>

                    <input type="radio" value="No" id="No"
                        onChange1={handleChange} name="Yes" onClick={handleshow1} />
                    <label for="No">No</label>
                    {
                        showhide1 === "Yes" && (
                            <div className="row " >
                                <div className="col col-6">
                                    <label className="font-weight-bold">Width of Revenue rasta</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                        )
                    }
                </div>

            </div>

            <div className="row">
                <div className="col col-6">

                    <h6  >(iii)If any water course abuts/passes through the applied site (Yes/No)</h6>
                    <input type="radio" value="Yes" id="Yes"
                        onChange1={handleChange} name="Yes" onClick={handleshow2} />
                    <label for="Yes">Yes</label>

                    <input type="radio" value="No" id="No"
                        onChange1={handleChange} name="Yes" onClick={handleshow2} />
                    <label for="No">No</label>
                    {
                        showhide2 === "Yes" && (
                            <div className="row " >
                                <div className="col col-6">
                                    <label className="font-weight-bold">Width </label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                        )
                    }
                </div>

                <div className="col col-6 ">

                    <h6>(iv) Whether in Compact Block (Yes/No)</h6>
                    <input type="radio" value="Yes" id="Yes"
                        onChange1={handleChange} name="Yes" />
                    <label for="Yes">Yes</label>

                    <input type="radio" value="No" id="No"
                        onChange1={handleChange} name="Yes" />
                    <label for="No">No</label>

                </div>

            </div>


            <div className="row">
                <div className="col col-6">

                    <h6  >(v)If any other owners' land sandwiched within applied land (Yes/No)</h6>
                    <input type="radio" value="Yes" id="Yes"
                        onChange1={handleChange} name="Yes" onClick={handleshow3} />
                    <label for="Yes">Yes</label>

                    <input type="radio" value="No" id="No"
                        onChange1={handleChange} name="Yes" onClick={handleshow3} />
                    <label for="No">No</label>
                    {
                        showhide3 === "Yes" && (
                            <div className="row " >
                                <div className="col col-6">
                                    <label className="font-weight-bold">Remarks </label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                        )
                    }
                </div>



            </div>

            <hr></hr>

            <div className="row">
                <div className="col col-3">

                    <h6  >(i)Acquisition status (Yes/No)</h6>
                    <input type="radio" value="Yes" id="Yes"
                        onChange1={handleChange} name="Yes" onClick={handleshow4} />
                    <label for="Yes">Yes</label>

                    <input type="radio" value="No" id="No"
                        onChange1={handleChange} name="Yes" onClick={handleshow4} />
                    <label for="No">No</label>
                    {
                        showhide4 === "Yes" && (
                            <div className="row " >
                                <div className="col col-6">
                                    <label className="font-weight-bold">Details to be filled</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                        )
                    }
                </div>

                <div className="col col-3 ">

                    <h6>(ii)  Section 4 notification</h6>
                    <input type="text" className="form-control" />

                </div>
                <div className="col col-3 ">

                    <h6>(iii)  Section 6 notification</h6>
                    <input type="text" className="form-control" />

                </div>
                <div className="col col-3 ">

                    <h6>(iv) Date of Award</h6>
                    <input type="date" className="form-control" />

                </div>

            </div>
</Row>
</Form.Group>

        </Form>
    )

}
export default Patwari;