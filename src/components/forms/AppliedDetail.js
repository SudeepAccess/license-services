import React, { useState,useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from "react-hook-form";
import { TableRow, TableHead, TableContainer, TableCell, TableBody, Table, Paper } from '@material-ui/core';
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";
import CalculateIcon from '@mui/icons-material/Calculate';
import DDJAYForm from "./DDJAY";
import NilpForm from "./Nilp";
import CommercialPlottedForm from "./CommercialPlotted";
import IndustrialPlottedForm from "./IndustrialPlotted";
import ResidentialPlottedForm from "./ResidentialPlotted";
import { useSelector } from "react-redux";
import { selectDdjayFormShowDisplay } from "../../Redux/Slicer/Slicer";



const AppliedDetailForm =(props)=> {
  const[form,setForm]=useState([]);
  const [dgps,setDgps]=useState('');
  const [resplotno,setResPlotno]=useState('');
  const[reslengthmtr,setResLengthmtr]=useState('');
  const[reswidthmtr,setResWidthmtr]=useState('');
  const[resareasq,setResAreasq]=useState('');
  const [complotno,setComPlotno]=useState('');
  const[comlengthmtr,setComLengthmtr]=useState('');
  const[comwidthmtr,setComWidthmtr]=useState('');
  const[comareasq,setComAreasq]=useState('');
  const [siteplotno,setSitePlotno]=useState('');
  const[sitelengthmtr,setSiteLengthmtr]=useState('');
  const[sitewidthmtr,setSiteWidthmtr]=useState('');
  const[siteareasq,setSiteAreasq]=useState('');
  const [parkplotno,setParkPlotno]=useState('');
  const[parklengthmtr,setParkLengthmtr]=useState('');
  const[parkwidthmtr,setParkWidthmtr]=useState('');
  const[parkareasq,setParkAreasq]=useState('');
  const [publicplotno,setPublicPlotno]=useState('');
  const[publiclengthmtr,setPublicLengthmtr]=useState('');
  const[publicwidthmtr,setPublicWidthmtr]=useState('');
  const[publicareasq,setPublicAreasq]=useState('');
  const[irPlotDimen,setIrPlotDimen]=useState('');
  const[irPlotArea,setIrPlotArea]=useState('');
  const[irSizeDimen,setIrSizeDimen]=useState('');
  const[irSizeArea,setIrSizeArea]=useState('');
  const[pocketDimen,setPocketDimen]=useState('');
  const[pocketArea,setPocketArea]=useState('');
  const[surrenderDimen,setSurrenderDimen]=useState('');
  const[surrenderArea,setSurrenderArea]=useState('');
  const[npnlNo,setNpnlNo]=useState('');
  const[npnlArea,setNpnlArea]=useState('');
  const[ewsNo,setEwsNo]=useState('');
  const[ewsArea,setEwsArea]=useState('');
  const[frozenNo,setFrozenNo]=useState('');
  const[frozenArea,setFrozenArea]=useState('');
  const[organizeNo,setorganizeNo]=useState('');
  const[organizeArea,setorganizeArea]=useState('');
  const[colonyNo,setColonyNo]=useState('');
  const[colonyArea,setColonyArea]=useState('');
  const[fiftyNo,setFiftyNo]=useState('');
  const[fiftyArea,setFiftyArea]=useState('');
  const[twoNo,setTwoNo]=useState('');
  const[twoArea,setTwoArea]=useState('');
  const[resiNo,setResiNo]=useState('');
  const[resiArea,setResiArea]=useState('');
  const[commerNo,setCommerNo]=useState('');
  const[commerArea,setCommerArea]=useState('');
  const[labourNo,setLabourNo]=useState('');
  const[labourArea,setLabourArea]=useState('');
  const[permissible,setPermissible]=useState('');
  const[perPlot,setPerPlot]=useState('');
  const[perLength,setPerLength]=useState('');
  const[perWidth,setPerWidth]=useState('');
  const[perArea,setPerArea]=useState('');
  const[commPlotted,setCommPlotted]=useState('');
  const[far,setFar]=useState('');
  const [scono,setScono]=useState('');
  const[scolengthmtr,setScoLengthmtr]=useState('');
  const[scowidthmtr,setScoWidthmtr]=useState('');
  const[scoareasq,setScoAreasq]=useState('');
  const [boothplotno,setBoothPlotno]=useState('');
  const[boothlengthmtr,setBoothLengthmtr]=useState('');
  const[boothwidthmtr,setBoothWidthmtr]=useState('');
  const[boothareasq,setBoothAreasq]=useState('');
  const[ewsnpnlPlot,setEwsNpnlPlot]=useState('');
  const[areaewsnpnlPlot,setAreaEwsNpnlPlot]=useState('');
  const[collectorRate,setCollectorRate]=useState('');
  const[areaCollectorRate,setAreaCollectorRate]=useState('');
  const[anyotherroad,setAnyOtherRoad]=useState('');
  const[widthanyotherroad,setWidthAnyOtherRoad]=useState('');
  const[licValid,setLicValid]=useState('');
  const[licvalidity,setLicvalidity]=useState('');
  const[appliedrenewal,setAplliedRenewal]=useState('');
  const[scrutinyFee,setscrutinyFee]=useState('');
  const[transactionScrutiny,setTransactionscrutiny]=useState('');
  const[reasonRevision,setReasonRevision]=useState('');
  const[uploadapprovedLayout,setUploadApprovedLayout]=useState('');
  const[proposedLayout,setProposedLayout]=useState('');
  const[undertakingChange,setUndertakingChange]=useState('');
  const[phasingSite,setPhasingsite]=useState('');
  const[reraUpload,setReraUpload]=useState('');
  const[newspaperpublic,setNewspaperPublic]=useState('');
  const[dateNews,setDateNews]=useState('');
  const[namenewspaper,setNameNewspaper]=useState('');
  const[intimatedAllotes,setIntimatedAllotes]=useState('');
  const[attachintimate,setAttachIntimate]=useState('');
  const[hostedapprovedWebsite,setHostedApprovedwebsite]=useState('');
  const[objectionUpload,setObjectionUpload]=useState('');
  const[replySubmittedUpload,setReplySubmittedUpload]=useState('');
  const[bookingPlotUpload,setBookingPlotUpload]=useState('');
  const[anyFeature,setAnyFeature]=useState('');
  const[sitenczdevelop,setSiteNczDevelop]=useState('');
  const[sitenczregional,setSiteNczRegional]=useState('');
  const[nczTruthingReport,setNczTruthingReport]=useState('');
  const[dlscRecommend,setDlscRecommend]=useState('');
  const[exemption,setExemption]=useState('');
  const DdjayFormDisplay=useSelector(selectDdjayFormShowDisplay)


    
    const { register, handleSubmit, formState: { errors } } = useForm([{XLongitude:'',YLatitude:''}]);
    const formSubmit = (data) => {
        console.log("data", data);
    };
    useEffect(()=>{
      console.log("dff",DdjayFormDisplay)

    },[DdjayFormDisplay])
    
    const [AppliedDetailFormSubmitted,SetAppliedDetailFormSubmitted] = useState(false);
    const AppliedDetailFormSubmitHandler=(e)=>{
        e.preventDefault();
        SetAppliedDetailFormSubmitted(true);
        let forms={
               dgps:dgps,
               "step4Data1":
                      {
                      resplotno:resplotno,
                      reslengthmtr:reslengthmtr,
                      reswidthmtr:reswidthmtr,
                      resareasq:resareasq,
                      complotno:complotno,
                      comlengthmtr:comlengthmtr,
                      comwidthmtr:comwidthmtr,
                      comareasq:comareasq,
                      siteplotno:siteplotno,
                      sitelengthmtr:sitelengthmtr,
                      sitewidthmtr:sitewidthmtr,
                      siteareasq:siteareasq,
                      parkplotno:parkplotno,
                      parklengthmtr:parklengthmtr,
                      parkwidthmtr:parkwidthmtr,
                      parkareasq:parkareasq,
                      publicplotno:publicplotno,
                      publiclengthmtr:publiclengthmtr,
                      publicwidthmtr:publicwidthmtr,
                      publicareasq:publicareasq,},
                 "step4Data2":
                      {
                        irPlotDimen:irPlotDimen,
                        irPlotArea:irPlotArea,
                        irSizeDimen:irSizeDimen,
                        irSizeArea:irSizeArea,
                        pocketDimen:pocketDimen,
                        pocketArea:pocketArea,
                        surrenderDimen:surrenderDimen,
                        surrenderArea:surrenderArea,},
                 "step4Data3":
                          {
                        npnlNo:npnlNo,
                        npnlArea:npnlArea,
                        ewsNo:ewsNo,
                        ewsArea:ewsArea,},
                 "step4Data4":
                          {
                        frozenNo:frozenNo,
                        frozenArea:frozenArea,
                        organizeNo:organizeNo,
                        organizeArea:organizeArea,},
                  "step4Data5":
                            {
                        colonyNo:colonyNo,
                        colonyArea:colonyArea,
                        fiftyNo:fiftyNo,
                        fiftyArea:fiftyArea,
                        twoNo:twoNo,
                        twoArea:twoArea,
                        resiNo:resiNo,
                        resiArea:resiArea,
                        commerNo:commerNo,
                        commerArea:commerArea,
                        labourNo:labourNo,
                        labourArea:labourArea,},
                  "step4Data6":
                          {
                      permissible:permissible,
                      perPlot:perPlot,
                      perLength:perLength,
                      perWidth:perWidth,
                      perArea:perArea,
                      commPlotted:commPlotted,
                      far:far,},
               "step4Data7":
                        {
                        scono:scono,
                        scolengthmtr:scolengthmtr,
                        scowidthmtr:scowidthmtr,
                        scoareasq:scoareasq,
                        boothplotno:boothplotno,
                        boothlengthmtr:boothlengthmtr,
                        boothwidthmtr:boothwidthmtr,
                        boothareasq:boothareasq,},
               "step4Data8":
                          {
                          ewsnpnlPlot:ewsnpnlPlot,
                          areaewsnpnlPlot:areaewsnpnlPlot,
                          collectorRate:collectorRate,
                          areaCollectorRate:areaCollectorRate,
                          anyotherroad:anyotherroad,
                          widthanyotherroad:widthanyotherroad,
                          licValid:licValid,
                          licvalidity:licvalidity,
                          appliedrenewal:appliedrenewal,
                          scrutinyFee:scrutinyFee,
                          transactionScrutiny:transactionScrutiny,
                          reasonRevision:reasonRevision,
                          uploadapprovedLayout:uploadapprovedLayout,
                          proposedLayout:proposedLayout,
                          undertakingChange:undertakingChange,
                          phasingSite:phasingSite,
                          reraUpload:reraUpload,
                          newspaperpublic:newspaperpublic,
                          dateNews:dateNews,
                          namenewspaper:namenewspaper,
                          intimatedAllotes:intimatedAllotes,
                          attachintimate:attachintimate,
                          hostedapprovedWebsite:hostedapprovedWebsite,
                          objectionUpload:objectionUpload,
                          replySubmittedUpload:replySubmittedUpload,
                          bookingPlotUpload:bookingPlotUpload,
                          anyFeature:anyFeature,
                          sitenczdevelop:sitenczdevelop,
                          sitenczregional:sitenczregional,
                          nczTruthingReport:nczTruthingReport,
                          dlscRecommend:dlscRecommend,
                          exemption:exemption},

        } 
         console.log("FRMDATA",forms);
        localStorage.setItem('step4',JSON.stringify(forms))
        form.push(forms)
        let frmData = JSON.parse(localStorage.getItem('step4') || "[]")
    
    };
    useEffect(()=>{
        if (AppliedDetailFormSubmitted) {
            props.AppliedDetailsFormSubmit(true);
        }
    },[AppliedDetailFormSubmitted]);
    const [showhide,setShowhide]=useState("No");
    const [showhide1,setShowhide1]=useState("No");
    const [showhide0,setShowhide0]=useState("No");
    const [showhide2,setShowhide2]=useState("No");
    const [showhide3,setShowhide3]=useState("No");
    const [showhide4,setShowhide4]=useState("No");
    const [showhide5,setShowhide5]=useState("No");
    const [showhide6,setShowhide6]=useState("No");
    const [showhide7,setShowhide7]=useState("No");
    const [showhide8,setShowhide8]=useState("No");
    const [showhide9,setShowhide9]=useState("No");
    const [showhide10,setShowhide10]=useState("No");
    const [showhide11,setShowhide11]=useState("No");
    const [showhide12,setShowhide12]=useState("No");
    const [showhide13,setShowhide13]=useState("No");
    const [showhide14,setShowhide14]=useState("No");
    const [showhide18,setShowhide18]=useState("2");

    const handleshow=e=>{
        const getshow=e.target.value;
        setShowhide(getshow);
    }
    const handleshow0=e=>{
      const getshow=e.target.value;
      setShowhide0(getshow);
  }
  const handleshow1=e=>{
    const getshow=e.target.value;
    setShowhide1(getshow);
}
const handleshow2=e=>{
  const getshow=e.target.value;
  setShowhide2(getshow);
}
const handleshow3=e=>{
  const getshow=e.target.value;
  setShowhide3(getshow);
}
const handleshow4=e=>{
  const getshow=e.target.value;
  setShowhide4(getshow);
}
const handleshow5=e=>{
  const getshow=e.target.value;
  setShowhide5(getshow);
}
const handleshow6=e=>{
  const getshow=e.target.value;
  setShowhide6(getshow);
}
const handleshow7=e=>{
  const getshow=e.target.value;
  setShowhide7(getshow);
}
const handleshow8=e=>{
  const getshow=e.target.value;
  setShowhide8(getshow);
}
const handleshow9=e=>{
  const getshow=e.target.value;
  setShowhide9(getshow);
}
const handleshow10=e=>{
  const getshow=e.target.value;
  setShowhide10(getshow);
}
const handleshow11=e=>{
  const getshow=e.target.value;
  setShowhide11(getshow);
}
const handleshow12=e=>{
  const getshow=e.target.value;
  setShowhide12(getshow);
}
const handleshow13=e=>{
  const getshow=e.target.value;
  setShowhide13(getshow);
}
const handleshow14=e=>{
  const getshow=e.target.value;
  setShowhide14(getshow);
}
const handleshow18=e=>{
  const getshow=e.target.value;
  setShowhide18(getshow);
}
onchange = e => {
  this.setState({ value: e.target.value });

}
    
   
    const handleChange=(e)=>{
        this.setState({ isRadioSelected: true });
       
     }
     const[noOfRows,setNoOfRows]=useState(1);
     const[noOfRow,setNoOfRow]=useState(1);
     const[noOfRow1,setNoOfRow1]=useState(1);
     
     
     return (
        <Form onSubmit={AppliedDetailFormSubmitHandler}>
         <Form.Group className="justify-content-center" controlId="formBasicEmail">
                <Row className="ml-auto" style={{marginBottom:5}}>
                <Col col-12>
                   
                            <h5 className="text-black" onChange={(e)=>setDgps(e.target.value)} value={dgps}>1. DGPS points <span className="text-primary"> (Click here for instructions to capture DGPS points)</span></h5>
{/*                            
                                    <div className="col col-4">
                                        <label for="pitentialZone" className="font-weight-bold"><b>Number of DGPS point</b></label>
                                        <input type="number" className="form-control"
                                        onChange={(e)=>setDgps(e.target.value)} value={dgps} />
                                    </div> */}
                                    <div className="px-2">
                                        <div className="text-black">(i)Add point 1 &nbsp;
                                        <div className="row ">
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">X:Longitude</label>
                                                <input type="number" name="XLongitude"className="form-control" />

                                            </div>
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">Y:Latitude</label>
                                                <input type="number" name="YLatitude" className="form-control"/>

                                            </div>
                                            

                                        </div>
                                        {/* <button type="button" style={{ float: 'right'}} className="btn btn-primary" onClick={()=>setNoOfRows(noOfRows-1)}> <DeleteIcon/></button>&nbsp;&nbsp;&nbsp;
                                             <button type="button" style={{ float: 'right'}} className="btn btn-primary" onClick={()=>setNoOfRows(noOfRows+1)}> <AddIcon/></button> */}
                                            
                                            
                                        </div>
                                        {/* {[...Array(noOfRows)].map((elementInArray,index)=>{
                                       return(
                                        <div className="row ">
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">X:Longiude</label>
                                                <input type="number" name="XLongitude"className="form-control" />

                                            </div>
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">Y:Latitude</label>
                                                <input type="number" name="YLatitude" className="form-control"/>

                                            </div>
                                            

                                        </div>);
                                    })}
                                         */}
                                    </div>
                                    <div className="px-2">
                                        <div className="text-black">(ii)Add point 2 &nbsp;
                                        <div className="row ">
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">X:Longitude</label>
                                                <input type="number" name="XLongitude"className="form-control" />

                                            </div>
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">Y:Latitude</label>
                                                <input type="number" name="YLatitude" className="form-control"/>

                                            </div>
                                            

                                        </div>
                                             {/* {[...Array(noOfRow)].map((elementInArray,index)=>{
                                       return(
                                        <div className="row">
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">X:Longiude</label>
                                                <input type="number" name="Xlongitude" className="form-control"/>

                                            </div>
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">Y:Latitude</label>
                                                <input type="number" name="Ylatitude" className="form-control"/>

                                            </div>

                                        </div>);
                                })}
                                         */}
                                    </div>
                                    </div>
                                   
                                    <div className="px-2">
                                        <div className="text-black">(iii)Add point 3 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                        <div className="row ">
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">X:Longitude</label>
                                                <input type="number" name="XLongitude"className="form-control" />

                                            </div>
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">Y:Latitude</label>
                                                <input type="number" name="YLatitude" className="form-control"/>

                                            </div>
                                            

                                        </div>
                                    </div>
                                    </div>
                                    <div className="px-2">
                                        <div className="text-black">(iv)Add point 4 &nbsp;
                                        <div className="row ">
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">X:Longitude</label>
                                                <input type="number" name="XLongitude"className="form-control" />

                                            </div>
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">Y:Latitude</label>
                                                <input type="number" name="YLatitude" className="form-control"/>

                                            </div>
                                            

                                        </div>
                                         <button type="button" style={{ float: 'right'}} className="btn btn-primary" onClick={()=>setNoOfRows(noOfRows-1)}> <DeleteIcon/></button>&nbsp;&nbsp;&nbsp;
                                             <button type="button" style={{ float: 'right',marginRight:15}} className="btn btn-primary" onClick={()=>setNoOfRows(noOfRows+1)}> <AddIcon/></button> 
                                            
                                            
                                        </div>
                                        {[...Array(noOfRows)].map((elementInArray,index)=>{
                                       return(
                                        <div className="row ">
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">X:Longiude</label>
                                                <input type="number" name="XLongitude"className="form-control" />

                                            </div>
                                            <div className="col col-4">
                                                <label htmlFor="pitentialZone" className="font-weight-bold">Y:Latitude</label>
                                                <input type="number" name="YLatitude" className="form-control"/>

                                            </div>
                                            

                                        </div>);
                                    })}
                                        
                                    </div>

                                    <hr/>
                                    <h5 className="text-black"><b>2.Details of Plots</b>&nbsp;&nbsp;
                                   
                                                                <input type="radio"  id="Yes" value="1"
                                                                    onChange={handleChange} name="Yes"onClick={handleshow18} />&nbsp;&nbsp;
                                                                <label for="Yes"></label>
                                                                <label htmlFor="gen">Regular</label>&nbsp;&nbsp;
                                                           
                                                                <input type="radio"  id="Yes" value="2"
                                                                    onChange={handleChange} name="Yes" onClick={handleshow18}/>&nbsp;&nbsp;
                                                                <label for="Yes"></label>
                                                                <label htmlFor="npnl">Irregular</label></h5>
                                                                {
                                            showhide18==="1" && (
                                                           
                                                                      
                                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive">
        <TableHead>
          <TableRow>
            <TableCell><b>Type of plots</b></TableCell>
            <TableCell ><b>Plot No.</b></TableCell>
            <TableCell ><b>Length in mtr</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
            <TableCell ><b>Width in mtr</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
            <TableCell ><b>Area in sqmtr</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell >
                            <div className="px-2">
                                 <p className="mb-2" onChange={(e)=>setResPlotno(e.target.value)} value={resplotno}><b>Residential
                                                            </b></p>
                                                            {/* <div className="row">
                                                                <div className="col col-3">
                                                                <input type="radio" value="Yes" id="Yes"
                                                                    onChange={handleChange} name="Yes" />
                                                                <label for="Yes"></label>
                                                                <label htmlFor="gen">Gen</label>
                                                            </div>
                                                            <div className="col col-3">
                                                                <input type="radio" value="Yes" id="Yes"
                                                                    onChange={handleChange} name="Yes" />
                                                                <label for="Yes"></label>
                                                                <label htmlFor="npnl">NPNL</label>
                                                            </div>
                                                            
                                                            <div className="col col-3">
                                                                <input type="radio" value="Yes" id="Yes"
                                                                    onChange={handleChange} name="Yes" />
                                                                <label for="Yes"></label>
                                                                <label htmlFor="gen">EWS</label>
                                                            </div>
                                                            </div> */}
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>Gen
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>NPNL
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>EWS
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setComPlotno(e.target.value)} value={complotno}><b>Commercial
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setSitePlotno(e.target.value)} value={siteplotno}><b>Community Sites

                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setParkPlotno(e.target.value)} value={parkplotno}><b>Parks

                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setPublicPlotno(e.target.value)} value={publicplotno}><b>Public Utilities
                                                            </b></p>
                                                              
                                                         
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>STP
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>ETP
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>WTP
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>UGT
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>Milk Booth
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>GSS
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
             
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
             
            </TableRow>
        </TableBody>
      </Table>
                                     </TableContainer>)}
                                     {
                                            showhide18==="2" && (
                                    // <div></div><h5 className="text-black"><b>Irregular Plots</b></h5>
                                   
                                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive ">
        <TableHead>
          <TableRow>
          <TableCell><b>Details of Plot</b></TableCell>
            <TableCell><b>Dimensions (in mtr)</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
            <TableCell ><b>Entered Area</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setIrPlotDimen(e.target.value)} value={irPlotDimen}><b>Residential
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              </TableRow>
              <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setIrSizeDimen(e.target.value)} value={irSizeDimen}><b>Commercial
                                                            </b></p>
                                                        </div>
                </TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              </TableRow>
             
        </TableBody>
      </Table>
      <h5 className="text-black"><b>Area Under</b></h5>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive">
        <TableHead>
          <TableRow>
            <TableCell><b>Detail of plots</b></TableCell>
            <TableCell ><b> Plot No.</b></TableCell>
            <TableCell ><b>Length (in mtr)</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
            <TableCell ><b>Dimension (in mtr)</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
            <TableCell ><b>Entered Area</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"onChange={(e)=>setNpnlNo(e.target.value)} value={npnlNo}><b>Sectoral Plan Road
                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setEwsNo(e.target.value)} value={ewsNo}><b>Green Belt

                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setEwsNo(e.target.value)} value={ewsNo}><b>24/18 mtr wide internal circulation Plan road

                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setEwsNo(e.target.value)} value={ewsNo}><b>Other Roads

                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setEwsNo(e.target.value)} value={ewsNo}><b>Undetermined use(UD)

                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
            </TableRow>
        </TableBody>
      </Table>
                                     </TableContainer> )}
                                  
                                    {/* <h5 className="text-black"><b>3.Depending on Purpose</b></h5> */}
                                    <h6 className="text-black"><b>Residential Plotted</b></h6>
                                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive">
        <TableHead>
          <TableRow>
            <TableCell><b>Detail of plots</b></TableCell>
            <TableCell ><b>No.</b></TableCell>
            <TableCell ><b>Area</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"onChange={(e)=>setNpnlNo(e.target.value)} value={npnlNo}><b>NPNL
                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setEwsNo(e.target.value)} value={ewsNo}><b>EWS

                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="text" className="form-control"/>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
                                     </TableContainer>
                                     <hr/>
                                     <h5 className="text-black"><b>3.Deen Dayal Jan Awas Yojna (DDJAY):-</b></h5>
                                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive">
        <TableHead>
          <TableRow>
            <TableCell><b>Detail of plots</b></TableCell>
            <TableCell ><b>No.</b></TableCell>
            <TableCell ><b>Area</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setFrozenNo(e.target.value)} value={frozenNo}><b>Details of frozen plots (50%) 
                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            </TableBody>
      </Table>
                                     </TableContainer>
                                     <br></br>
          
              <div className="row">
                <div className="col col-12">
            <h6 onChange={(e)=>setorganizeNo(e.target.value)} value={organizeNo}><b> Whether one organizes open space/pocket of min area 0.3 acre proposed in the layout plan (Yes/No)</b>&nbsp;&nbsp;


                                   <input type="radio" value="Yes" id="Yes"
                                           onChange1={handleChange} name="Yes" onClick={handleshow12} />&nbsp;&nbsp;
                                           <label for="Yes">Yes</label>&nbsp;&nbsp;

                                           <input type="radio" value="No" id="No"
                                           onChange1={handleChange} name="Yes" onClick={handleshow12}/>&nbsp;&nbsp;
                                           <label for="No">No</label></h6>
                                           {
                                           showhide12==="Yes" && (
                                               <div className="row " >
                                                       <div className="col col-6">
                                                           <label for="parentLicense" className="font-weight-bold">Area of such Pocket (in acres)</label>
                                                           <input type="text" className="form-control"/>
                                                       </div>
                                                      
                                                   </div> 

                                           )
                                       }
                                       </div>
              </div>
                                  
            {/* <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setorganizeNo(e.target.value)} value={organizeNo}><b> Whether one organizes open space/pocket of min area 0.3 acre proposed in the layout plan (Yes/No) </b></p>
                                                            <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes"  />
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"/>
                                                <label for="No">No</label>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow> */}
        
                                     <h5 className="text-black"><b>Industrial Plotted Colony </b></h5>
                                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive">
        <TableHead>
          <TableRow>
            <TableCell><b>Detail of plots</b></TableCell>
            <TableCell ><b>No.</b></TableCell>
            <TableCell ><b>Area in Acres</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"onChange={(e)=>setColonyNo(e.target.value)} value={colonyNo}><b>Area of the colony, Up to 50 acres
                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setFiftyNo(e.target.value)} value={fiftyNo}><b>More than 50 to 200 acres </b></p>
                                                           
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setTwoNo(e.target.value)} value={twoNo}><b>More than 200 acres </b></p>
                                                           
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"onChange={(e)=>setResiNo(e.target.value)} value={resiNo}><b>Proposed plots under residential component DDJAY  </b></p>
                                                           
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"onChange={(e)=>setCommerNo(e.target.value)} value={commerNo}><b>Proposed plots under community facilities in DDJAY Area  </b></p>
                                                           
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setLabourNo(e.target.value)} value={labourNo}><b>Details of plots for Labour dormitories from affordable Industries Housing component  </b></p>
                                                           
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
                                     </TableContainer>
                                     <hr/>
                                     <h5 className="text-black"><b>Commercial Plotted</b>&nbsp;&nbsp;</h5>
                                     {/* <div className="row">
                                        <div className="col col-12">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setPermissible(e.target.value)} value={permissible}><b>4.Whether you want to avail permissible commercial components </b>
(Yes/No):</h6>
                                                <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes" checked={showhide==='No'}onClick={handleshow}/>
                                                <label for="No">No</label>
         
                                            </div>
                                           
                                        </div>
                                        {
                                            showhide==="Yes" && (
                                                <div className="row " >
                                                      <h6 className="text-black">Detail of plots </h6>
                                                    <TableContainer component={Paper}>
      <Table  className="table table-bordered table-responsive">
        <TableHead>
          <TableRow>
            <TableCell>Plot No.</TableCell>
            <TableCell >Length in mtr</TableCell>
            <TableCell >Width in mtr</TableCell>
            <TableCell >  Area in sqm</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
            <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
        </TableBody>
      </Table>
                                     </TableContainer>
                                                        <div className="col col-4">
                                                            <label for="parentLicense" className="font-weight-bold">Commercial Plotted colony </label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div> 
                                            )
                                        }
                                     </div>
                                     <hr/> */}
                                     <div className="row">
                                        <div className="col col-6">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setFar(e.target.value)} value={far}><b>Total FAR has been availed 

</b>&nbsp;&nbsp;
<input type="radio" value="Yes" id="Yes"
                                                                    onChange={handleChange} name="Yes" />&nbsp;&nbsp;
                                                                <label for="Yes"></label>
                                                                <label htmlFor="gen">150%</label>&nbsp;&nbsp;
                                                           
                                                                <input type="radio" value="Yes" id="Yes"
                                                                    onChange={handleChange} name="Yes" />&nbsp;&nbsp;
                                                                <label for="Yes"></label>
                                                                <label htmlFor="npnl">175%</label>
                                                                </h6>
</div>
                                           
                                        </div>
                                        
                                     </div>
                                    
                                     <h5 className="text-black"><b>Number of Plots/SCOs (saleable area) :-</b></h5>
                                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive">
        <TableHead>
          <TableRow>
            <TableCell><b>Types of plots</b></TableCell>
            <TableCell ><b>Plot No.</b></TableCell>
            <TableCell ><b>Length in mtr</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
            <TableCell ><b>Width in mtr</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
            <TableCell ><b>Area in sqm</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"onChange={(e)=>setScono(e.target.value)} value={scono}><b>SCOs
                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setBoothPlotno(e.target.value)} value={boothplotno}><b>Booths

                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>Public utilities

                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>STP

                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>WTP

                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>UGT

                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>Milk Booth

                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" ><b>GSS

                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
            </TableRow>
         
           
        </TableBody>
      </Table>
                                     </TableContainer>
                                    
                                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive">
        <TableHead>
          <TableRow>
            <TableCell><b>Types of plots</b></TableCell>
            <TableCell ><b>Dimension(in mtr)</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></TableCell>
            <TableCell ><b>Entered Area</b></TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2"onChange={(e)=>setScono(e.target.value)} value={scono}><b>Irregular Size SCOs
                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
             
            </TableRow>
            <TableRow>
                <TableCell >
                                                        <div className="px-2">
                                                            <p className="mb-2" onChange={(e)=>setBoothPlotno(e.target.value)} value={boothplotno}><b> SCOs,Booths etc.

                                                            </b></p>
                                                        </div>
                </TableCell>
                <TableCell align="right">  <input type="number" className="form-control"/></TableCell>
              <TableCell component="th" scope="row">
                <input type="number" className="form-control"/>
              </TableCell>
             
            </TableRow>
        </TableBody>
      </Table>
                                     </TableContainer>
                                     <hr/>
                                     <h5 className="text-black"><b>NILP :-</b></h5>
                                      
                                    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} className="table table-bordered table-responsive">
        <TableHead>
          <TableRow>
            <TableCell><b>S.No.</b></TableCell>
            <TableCell ><b>NLP Details</b></TableCell>
            <TableCell ><b>Yes/No</b></TableCell>
         
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
                <TableCell >1. </TableCell>
                <TableCell > Whether you want to surrender the 10% area of license colony to Govt. the instead of providing 10% under EWS and NPNL plots  </TableCell>
                 <TableCell component="th" scope="row">
                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow0}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes" onClick={handleshow0}/>
                                                <label for="No">No</label>
                                                 {
                                            showhide0==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-12">
                                                            <label for="areaAcre" className="font-weight-bold">Area in Acres </label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div> 
                                            )
                                        } 
         
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >2. </TableCell>
                <TableCell >Whether any pocket proposed to be transferred less than 1 acre </TableCell>
                 <TableCell component="th" scope="row">
                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow13}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes" onClick={handleshow13}/>
                                                <label for="No">No</label>
                                                 {
                                            showhide13==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-6">
                                                            <label for="areaAcre" className="font-weight-bold"> Dimension (in mtr) </label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                        <div className="col col-6">
                                                            <label for="areaAcre" className="font-weight-bold"> Entered Area </label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div> 
                                            )
                                        } 
         
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >3. </TableCell>
                <TableCell >Whether you want to deposit an amount @ of 3 times of collector rate instead of the surrender 10% land to Govt. </TableCell>
                 <TableCell component="th" scope="row">
                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow1}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow1}/>
                                                <label for="No">No</label>
                                                {
                                            showhide1==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-12">
                                                            <label for="areaAcre" className="font-weight-bold">Area in Acres </label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div> 
                                            )
                                        } 
         
              </TableCell>
            </TableRow>
            <TableRow>
                <TableCell >4. </TableCell>
                <TableCell >Whether the surrendered area is having a minimum of 18 mtr independent access   </TableCell>
                 <TableCell component="th" scope="row">
                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow14}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow14}/>
                                                <label for="No">No</label>
                                                {
                                            showhide14==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-12">
                                                            <label for="areaAcre" className="font-weight-bold">Dimension(in mtr)</label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                        <div className="col col-12">
                                                            <label for="areaAcre" className="font-weight-bold">Entered Area</label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div> 
                                            )
                                        } 
         
              </TableCell>
            </TableRow>
           
        </TableBody>
      </Table>
    </TableContainer>
                                     <hr/>
                                     <div className="row">
                                        <div className="col col-12">
                                            <div className="form-group" >
                                                <h6 ><b>Upload Layout Plan <span className="text-primary"> (Click here for instructions to capture DGPS points)</span></b>
                                                   <input type="file" className="form-control"/></h6>
                                            </div>
                                        </div>
                                     </div>
                                     <hr/>
                                     <h5 className="text-black"><b>Mandatory Documents</b></h5>
                    <div className="row">
                        <div className="col col-3">
                                    <h6 ><b>Site plan.</b></h6>
                                  <input type="file" className="form-control">
                                    </input>
                        </div>
                        <div className="col col-3">
                                    <h6 ><b>Democratic Plan.</b></h6>
                                  <input type="file" className="form-control"></input>
                        </div>
                        <div className="col col-3">
                                    <h6 ><b>Sectoral Plan/Layout Plan.</b></h6>
                                  <input type="file" className="form-control"></input>
                        </div>
                        <div className="col col-3">
                                    <h6 ><b>Development Plan. </b></h6>
                                  <input type="file" className="form-control"></input>
                        </div>
                      
                     </div>
                                    
                                     {/* <div className="row">
                                        <div className="col col-12">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setAnyOtherRoad(e.target.value)} value={anyotherroad}><b>9.Any other Road



(Yes/No):</b></h6>
<input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow2}/>
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow2}/>
                                                <label for="No">No</label>
                                                {
                                            showhide2==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-4">
                                                            <label for="areaAcre" className="font-weight-bold">Width of the road in mtrs </label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div> 
                                            )
                                        } 
         
         
                                            </div>
                                           
                                        </div>
                                       
                                     </div>
                                     <hr/>
                                     <h5 className="text-black"><b>10.Revision of Layout plan (For in principle approval) :-</b></h5>
                                     <div className="row">
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setLicValid(e.target.value)} value={licValid}><b>(a)Whether the license is valid (Yes /No):</b></h6>
                                                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow3}/>
                                                <label for="Yes">Yes</label>&nbsp;&nbsp;

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow3}/>
                                                <label for="No">No</label>
                                                {
                                            showhide3==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-6">
                                                            <label for="areaAcre" className="font-weight-bold">Validity of the License </label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div> 
                                            )
                                        } 
                                         {
                                            showhide3==="No" && (
                                                <div className="row " >
                                                        <div className="col col-12">
                                                            <label for="areaAcre" className="font-weight-bold">Whether Applied for renewal?(Yes/No) </label>
                                                            
                                                            <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" />
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"/>
                                                <label for="No">No</label>
                                                        </div>
                                                    </div> 
                                            )
                                        } 
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setscrutinyFee(e.target.value)} value={scrutinyFee}><b>(b)Scrutiny fees deposited as per policy dated 11.03.2021 (Yes /No):</b></h6>
                                                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes"onClick={handleshow4} />
                                                <label for="Yes">Yes</label>&nbsp;&nbsp;

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow4}/>
                                                <label for="No">No</label>
                                                {
                                            showhide4==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-6">
                                                            <label for="areaAcre" className="font-weight-bold">Transaction number </label>
                                                            
                                                            <input type="number" className="form-control" />
                                                        </div>
                                                    </div> 
                                            )
                                        } 
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setReasonRevision(e.target.value)} value={reasonRevision}><b>(c)Mention the reasons for revision in the layout plan (in case of revision):</b></h6>
                                                 <input type="text" className="form-control"/>
                                            </div>
                                        </div>
                                       
                                     </div><br></br>
                                     <div className="row">
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setUploadApprovedLayout(e.target.value)} value={uploadapprovedLayout}><b>(d)Upload the copy of the earlier approved layout plan (in case of revision):</b></h6>
                                                 <input type="file" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setProposedLayout(e.target.value)} value={proposedLayout}><b>(e)Copy of proposed layout plan indicating the changes from approved layout plan (in case of revision):</b></h6>
                                                 <input type="file" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setUndertakingChange(e.target.value)} value={undertakingChange}><b>(f)Undertaking that no change has been made in the phasing (If applicable) (upload document)s:</b></h6>
                                                 <input type="file" className="form-control"/>
                                            </div>
                                        </div>
                                       
                                     </div><br></br>
                                     <div className="row">
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setPhasingsite(e.target.value)} value={phasingSite}><b>(g)Phasing as disclosed with layout plan/site plan (If applicable)(Yes /No):</b></h6>
                                                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" checked={true}/>
                                                <label for="Yes">Yes</label>&nbsp;&nbsp;

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"/>
                                                <label for="No">No</label>
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setReraUpload(e.target.value)} value={reraUpload}><b>(h)Consent of RERA if there is any change in the phasing (If applicable) (in case of revision):</b></h6>
                                                 <input type="file" className="form-control"/>
                                            </div>
                                        </div>
                                     </div>
                                     <hr/>
                                     <h5 className="text-black"><b>11.Revision of Layout plan (For final approval) :-</b></h5>
                                     <div className="row">
                                        <div className="col col-12">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setNewspaperPublic(e.target.value)} value={newspaperpublic}><b>(a)Whether the advertisement is given in 3 local newspapers (1 Hindi+ 2English) having a wider publication in the area(Yes/No)</b></h6>
                                                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow5}/>
                                                <label for="Yes">Yes</label>&nbsp;&nbsp;

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow5}/>
                                                <label for="No">No</label>
                                                {
                                            showhide5==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-4">
                                                            <label for="areaAcre" className="font-weight-bold">Date of Publication </label>
                                                            
                                                            <input type="date" className="form-control" />
                                                        </div>
                                                        <div className="col col-4">
                                                            <label for="areaAcre" className="font-weight-bold">Name of Newspaper </label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                    </div> 
                                            )
                                        } 
                                            </div>
                                        </div>
                                      </div><br></br>
                                      <div className="row">
                                        <div className="col col-12">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setIntimatedAllotes(e.target.value)} value={intimatedAllotes}><b>(b)Whether intimated each of the allottees through registered post regarding the proposed changes in the layout plan (Yes/No)</b></h6>
                                                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow6}/>
                                                <label for="Yes">Yes</label>&nbsp;&nbsp;

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow6}/>
                                                <label for="No">No</label>
                                                {
                                            showhide6==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-4">
                                                            <label for="areaAcre" className="font-weight-bold">Attached Proof</label>
                                                            
                                                            <input type="file" className="form-control" />
                                                        </div>
                                                      
                                                    </div> 
                                            )
                                        } 
                                            </div>
                                        </div>
                                      </div><br></br>
                                      <div className="row">
                                        <div className="col col-12">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setHostedApprovedwebsite(e.target.value)} value={hostedapprovedWebsite}><b>(c)Whether you hosted the existing approved layout plan & in-principle approved layout on the website of your company/organization (Yes/No)</b></h6>
                                                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" checked={true}/>
                                                <label for="Yes">Yes</label>&nbsp;&nbsp;

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"/>
                                                <label for="No">No</label>
                                            </div>
                                        </div>
                                      </div><br></br>
                                      <div className="row">
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setObjectionUpload(e.target.value)} value={objectionUpload}><b>(d)Report any objection from any of the allottees (Upload document):</b></h6>
                                                 <input type="file" className="form-control"/>
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setReplySubmittedUpload(e.target.value)} value={replySubmittedUpload}><b>(e)Whether reply submitted in O/o STP, concerned (Yes/No)(Upload document):</b></h6>
                                                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" checked={true}/>
                                                <label for="Yes">Yes</label>&nbsp;&nbsp;

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"/>
                                                <label for="No">No</label>
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setBookingPlotUpload(e.target.value)} value={bookingPlotUpload}><b>(f)Have you given an advertisement for booking/sale of plots as per the in-principle layout plan? (Yes/No) (Upload document):</b></h6>
                                                <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" checked={true}/>
                                                <label for="Yes">Yes</label>&nbsp;&nbsp;

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"/>
                                                <label for="No">No</label>
                                            </div>
                                        </div>
                                       
                                     </div><br></br>
                                     <div className="row">
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setAnyFeature(e.target.value)} value={anyFeature}><b>(g)Any other feature:(Yes/No):</b></h6>
                                                <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" checked={true}/>
                                                <label for="Yes">Yes</label>&nbsp;&nbsp;

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"/>
                                                <label for="No">No</label>
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setSiteNczDevelop(e.target.value)} value={sitenczdevelop}><b>(h) Whether the sites fall under NCZ as per Development Plan (Yes/No) :</b></h6>
                                                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow7}/>
                                                <label for="Yes">Yes</label>&nbsp;&nbsp;

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow7}/>
                                                <label for="No">No</label>
                                                {
                                            showhide7==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-4">
                                                            <label for="areaAcre" className="font-weight-bold">Remarks</label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                      
                                                    </div> 
                                            )
                                        } 
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setSiteNczRegional(e.target.value)} value={setSiteNczRegional}><b>(i)Whether the sites fall under NCZ as per Sub Regional Plan NCR 2021(Yes/No):</b></h6>
                                                <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes"onClick={handleshow8}/>
                                                <label for="Yes">Yes</label>&nbsp;&nbsp;

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow8}/>
                                                <label for="No">No</label>
                                                {
                                            showhide8==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-4">
                                                            <label for="areaAcre" className="font-weight-bold">Remarks</label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                      
                                                    </div> 
                                            )
                                        } 
                                            </div>
                                        </div>
                                       
                                     </div><br></br>
                                     <div className="row">
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setNczTruthingReport(e.target.value)} value={nczTruthingReport}><b>(j)Whether the sites fall under NCZ as per the ground truthing report of DLSC(Yes/No):</b></h6>
                                                <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow9}/>
                                                <label for="Yes">Yes</label>&nbsp;&nbsp;

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow9}/>
                                                <label for="No">No</label>
                                                {
                                            showhide9==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-4">
                                                            <label for="areaAcre" className="font-weight-bold">Remarks</label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                      
                                                    </div> 
                                            )
                                        } 
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setDlscRecommend(e.target.value)} value={dlscRecommend}><b>(k) Whether the recommendation of DLSC is approved by SLC (Yes/No) :</b></h6>
                                                 <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes" onClick={handleshow10}/>
                                                <label for="Yes">Yes</label>&nbsp;&nbsp;

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow10}/>
                                                <label for="No">No</label>
                                                {
                                            showhide10==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-4">
                                                            <label for="areaAcre" className="font-weight-bold">Remarks</label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                      
                                                    </div> 
                                            )
                                        } 
                                            </div>
                                        </div>
                                        <div className="col col-4">
                                            <div className="form-group" >
                                                <h6 onChange={(e)=>setExemption(e.target.value)} value={exemption}><b>(l)If exemption from any amenity(s)(Yes/No):</b></h6>
                                                <input type="radio" value="Yes" id="Yes"
                                                onChange={handleChange} name="Yes"onClick={handleshow11}/>
                                                <label for="Yes">Yes</label>&nbsp;&nbsp;

                                                <input type="radio" value="No" id="No"
                                                onChange={handleChange} name="Yes"onClick={handleshow11}/>
                                                <label for="No">No</label>
                                                {
                                            showhide11==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-6">
                                                            <label for="areaAcre" className="font-weight-bold">Name of Amenity</label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                        <div className="col col-6">
                                                            <label for="areaAcre" className="font-weight-bold">Explanation of Amenity</label>
                                                            
                                                            <input type="text" className="form-control" />
                                                        </div>
                                                      
                                                    </div> 
                                            )
                                        } 
                                            </div>
                                        </div>
                                       
                                     </div> */}
                                     <Button style={{alignSelf:"center", marginTop:20, marginright:867}} variant="primary" type="submit">
                Save as Draft
            </Button>
            <Button style={{alignSelf:"center", marginTop:-51,marginLeft:967}} variant="primary" type="submit">
               Continue
            </Button>
                         
                </Col>
            </Row>
         </Form.Group>
         </Form>)
};
export default AppliedDetailForm;