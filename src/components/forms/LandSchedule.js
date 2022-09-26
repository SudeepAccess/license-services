import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";
import CalculateIcon from '@mui/icons-material/Calculate';
import InfoIcon from '@mui/icons-material/Info';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const LandScheduleForm=(props)=>{

    const[form,setForm]=useState([]);
    const [licenseApplied,setLicenseApplied]=useState('');
    const[migrationLic,setMigrationLic]=useState('');
    const[potential,setPotential]=useState('');
    const[siteLoc,setSiteLoc]=useState('');
    const[approach,setapproach]=useState('');
    const[specify,setSpecify]=useState('');
    const[existingCase,setExistingCase]=useState('');
    const[typeLand,setTypeLand]=useState('');
    const[thirdParty,setThirdParty]=useState('');
    const[rehan,setRehan]=useState('');
    const[patta,setPatta]=useState('');
    const[gair,setGair]=useState('');
    const[any,setAny]=useState('');
    const[litigation,setLitigation]=useState('');
    const[court,setCourt]=useState('');
    const[appliedLand,setAppliedLand]=useState('');
    const[revenuerasta,setRevenuerasta]=useState('');
    const[widthrevenuerasta,setWidthRevenuerasta]=useState('');
    const[watercourse,setWatercourse]=useState('');
    const[widthRev,setWidthRev]=useState('');
    const[compactBlock,setCompactBlock]=useState('');
    const[sandwiched,setsandwiched]=useState('');
    const[acquistion,setAcquistion]=useState('');
    const[exclusion,setExclusion]=useState('');
    const[compensation,setCompensation]=useState('');
    const[section4,setSection4]=useState('');
    const[section6,setSection6]=useState('');
    const[statusRelease,setStatusRelease]=useState('');
    const[award,setAward]=useState('');
    const[dateRelease,setDateRelease]=useState('');
    const[site,setSite]=useState('');
    const[approachable,setApproachable]=useState('');
    const[vacant,setVacant]=useState('');
    const[construction,setConstruction]=useState('');
    const[typeCons,setTypeCons]=useState('');
    const[ht,setHt]=useState('');
    const[htRemark,setHtRemark]=useState('');
    const[gas,setGas]=useState('');
    const[gasRemark,setGasRemark]=useState('');
    const[nallah,setNallah]=useState('');
    const[nallahRemark,setNallahremark]=useState('');
    const[road,setRoad]=useState('');
    const[roadWidth,setRoadwidth]=useState('');
    const[land,setLand]=useState('');
    const[landRemark,setLandRemark]=useState('');
    const[layoutPlan,setLayoutPlan]=useState('');
   

    const [LandFormSubmitted,SetLandFormSubmitted] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const formSubmit = (data) => {
        console.log("data", data);
    };
    const handleChange=(e)=>{
        this.setState({ isRadioSelected: true });
       
     }
    
     const landScheduleFormSubmitHandler=(e)=>{
        e.preventDefault();
        SetLandFormSubmitted(true);
        let forms={
            licenseApplied:licenseApplied,
            migrationLic:migrationLic,
            "step3Data1" :
                    {"potential":"",
                    "siteLoc":"",
                    "approach":"",
                    "specify":"",
                    "existingCase":"",
                    "typeLand":"",
                    "thirdParty":""},
            "step3Data2":{
                    "rehan":"",
                    "patta":"",
                    "gair":"",
                    "any":"",
                    "litigation":"",
                    "court":"",
                    "appliedLand":"",
                    "revenuerasta":"",
                  
                    "watercourse":"",
                   
                    "compactBlock":"",
                    "sandwiched":"",
                    "acquistion":"",
                    "exclusion":"",
                    "compensation":"",
                    "section4":"",
                    "section6":"",
                    "statusRelease":"",
                    "award":"",
                    "dateRelease":"",
                    "site":"",
                    "approachable":"",
                    "vacant":"",
                    "construction":"",
                   
                    "ht":"",
                    
                    "gas":"",
                    
                    "nallah":"",
                   
                    "road":"",
                    
                    "land":"",
                    
                    "layoutPlan":"",
                    }
        }
        console.log("FRMDATA",forms);
        localStorage.setItem('step3',JSON.stringify(forms))
        form.push(forms)
        let frmData = JSON.parse(localStorage.getItem('step3') || "[]")
    
    };
    useEffect(()=>{
        if (LandFormSubmitted) {
            props.landFormSubmit(true);
        }
    },[LandFormSubmitted]);
     const [showhide,setShowhide]=useState("No");
     const [showhide1,setShowhide1]=useState("No");
     const [showhide2,setShowhide2]=useState("No");
     const [showhide3,setShowhide3]=useState("No");
     const [showhide4,setShowhide4]=useState("No");
     const [showhide5,setShowhide5]=useState("No");
     const [showhide6,setShowhide6]=useState("No");
     const [showhide7,setShowhide7]=useState("No");
     const [showhide8,setShowhide8]=useState("No");
     const [showhide9,setShowhide9]=useState("No");
     const [showhide0,setShowhide0]=useState("No");
     const [showhide10,setShowhide10]=useState("No");
     const [showhide11,setShowhide11]=useState("No");
     const [showhide12,setShowhide12]=useState("No");
     const [showhide13,setShowhide13]=useState("No");
     const [showhide14,setShowhide14]=useState("No");
     const [showhide15,setShowhide15]=useState("No");
     const [showhide16,setShowhide16]=useState("No");
     const [showhide17,setShowhide17]=useState("No");
     const [showhide18,setShowhide18]=useState("No");
     const [showhide19,setShowhide19]=useState("No");
     const [showhide20,setShowhide20]=useState("No");
     const [showhide21,setShowhide21]=useState("No");
     const [showhide23,setShowhide23]=useState("No");
     const handleshow=e=>{
         const getshow=e.target.value;
         setShowhide(getshow);
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
    const handleshow0=e=>{
        const getshow=e.target.value;
        setShowhide0(getshow);
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
    const handleshow15=e=>{
        const getshow=e.target.value;
        setShowhide15(getshow);
    }
    const handleshow16=e=>{
        const getshow=e.target.value;
        setShowhide16(getshow);
    }
    const handleshow17=e=>{
        const getshow=e.target.value;
        setShowhide17(getshow);
    }
    const handleshow18=e=>{
        const getshow=e.target.value;
        setShowhide18(getshow);
    }
    const handleshow19=e=>{
        const getshow=e.target.value;
        setShowhide19(getshow);
    }
    const handleshow20=e=>{
        const getshow=e.target.value;
        setShowhide20(getshow);
    }
    const handleshow21=e=>{
        const getshow=e.target.value;
        setShowhide21(getshow);
    }
    const handleshow23=e=>{
        const getshow=e.target.value;
        setShowhide23(getshow);
    }
    return (
        <Form onSubmit={landScheduleFormSubmitHandler}>
       
           

       <Form.Group className="justify-content-center" controlId="formBasicEmail">
                <Row className="ml-auto" style={{marginBottom:5}}>
                <Col col-12>
                            {/* <h5 className="text-black">1. Details of applied land:</h5> */}
                            <div className="row">
                            <div className="col col-12 ">
                              
                                        <h6 onChange={(e)=>setLicenseApplied(e.target.value)} value={licenseApplied} ><b>(i)Whether licence applied for additional area ?</b>&nbsp;&nbsp;
                                        <input type="radio" value="Yes" id="Yes"  
                                                onChange1={handleChange} name="Yes" onClick={handleshow} />&nbsp;&nbsp;
                                                <label for="Yes"><h6>Yes</h6></label>&nbsp;&nbsp;

                                                <input type="radio" value="No" id="No"
                                                onChange1={handleChange} name="Yes" onClick={handleshow}/>&nbsp;&nbsp;
                                                <label for="No"><h6>No</h6></label></h6>
                                                {
                                            showhide==="Yes" && (
                                            <div className="row" >
                                                        <div className="col col-3">
                                                            <label for="parentLicense" className="font-weight-bold"><h6><b>License No. of Parent License</b></h6> </label>
                                                           <input type="number" className="form-control"/>
                                                        </div>
                                                <div className="col col-3">
                                                    <label htmlFor="potential"><h6><b>Potential Zone:</b></h6></label>
                                                    <select className="form-control" id="potential"
                                                        name="potential" onChange={(e)=>setPotential(e.target.value)} value={potential}
                                                    >
                                                        <option value="" >--Potential Zone--
                                                        </option>
                                                        <option value="K.Mishra">Hyper</option>
                                                        <option value="potential 1">High I</option>
                                                        <option value="potential 2">High II</option>
                                                        <option value="potential 2">Medium</option>
                                                        <option value="potential 2">Low I</option>
                                                        <option value="potential 2">Low II</option>
                                                    </select>
                                                
                                                </div>
                                                <div className="col col-3">
                                                            <label for="parentLicense" className="font-weight-bold"><h6><b>Site Location Purpose</b></h6> </label>
                                                           <input type="text" className="form-control" disabled/>
                                                 </div>
                                                 <div className="col col-3">
                                        <div className="form-group">
                                            <label htmlFor="approach"><h6><b>Approach Type (Type of Policy)</b></h6></label>
                                            <select className="form-control" id="approach"
                                                name="approach" onChange={(e)=>setapproach(e.target.value)} value={approach}
                                            >
                                                <option value="" >
                                                </option>
                                                <option value="K.Mishra"></option>
                                                <option value="potential 1"></option>
                                                <option value="potential 2"></option>
                                            </select>
                                          
                                        </div>
                                    </div>
                                    <div className="col col-3">
                                        <div className="form-group ">
                                            <label htmlFor="roadwidth"><h6><b>Approach Road Width</b>&nbsp;&nbsp;<CalculateIcon color="primary"/></h6> </label>
                                            <input
                                                type="number"
                                                name="roadwidth"
                                                className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col col-3">
                                        <div className="form-group ">
                                            <label htmlFor="specify"><h6><b>Specify Others</b></h6></label>
                                            <input
                                                type="number"
                                                name="specify" onChange={(e)=>setSpecify(e.target.value)} value={specify}
                                                className={`form-control ${errors.specify ? "is-invalid" : ""
                                                    } `}
                                             
                                               
                                            />
                                            <div className="invalid-feedback">
                                                {errors?.specify?.message}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-3">
                                        <div className="form-group ">
                                            <label htmlFor="typeland"><h6><b>Type of land</b></h6> </label>
                                            <select className="form-control" id="typeland"
                                                name="typeland" onChange={(e)=>setTypeLand(e.target.value)} value={typeLand}>
                                                 <option value="" >--Type of Land--
                                                </option>
                                                <option value="" >chahi/nehri
                                                </option>
                                                <option >Gair Mumkins</option>
                                                <option >others</option>
                                                <option ></option>
                                            </select>
                                            
                                        </div>
                                    </div>
                                    <div className="col col-3 ">
                              
                             
                              <label htmlFor="typeland" onChange={(e)=>setThirdParty(e.target.value)} value={thirdParty}><h6><b>Third-party right created</b> </h6></label><br></br>
                             
                              <input type="radio" value="Yes" id="Yes"
                                      onChange1={handleChange} name="Yes"  onClick={handleshow13}/>&nbsp;&nbsp;
                                      <label for="Yes"><h6>Yes</h6></label>&nbsp;&nbsp;

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"onClick={handleshow13}/>&nbsp;&nbsp;
                                      <label for="No"><h6>No</h6></label>
                                      {
                                            showhide13==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-12">
                                                            <label for="parentLicense" className="font-weight-bold"> Remark </label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                        <div className="col col-12">
                                                            <label for="parentLicense" className="font-weight-bold"> Document Upload </label>
                                                            <input type="file" className="form-control"/>
                                                        </div>
                                                    </div> 
                                            )
                                        }
                                         {
                                            showhide13==="No" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold"> Document Upload </label>
                                                            <input type="file" className="form-control"/>
                                                        </div>
                                                    </div> 
                                            )
                                        }
                                    </div>
                                            </div>

                                            )
                                                }
                                                </div>
                                            {
                                                showhide==="No" && (
                                                <div className="row" >
                                                            
                             <div className="col col-6 ">
                              
                              <h6 onChange={(e)=>setMigrationLic(e.target.value)} value={migrationLic}><b>(ii)Whether licence applied under Migration policy?</b>&nbsp;&nbsp;
                              <input type="radio" value="Yes"  id="Yes"
                                      onChange1={handleChange} name="Yes" onClick={handleshow23}/>&nbsp;&nbsp;
                                      <label for="Yes"><h6>Yes</h6></label>&nbsp;&nbsp;

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"onClick={handleshow23}/>&nbsp;&nbsp;
                                      <label for="No"><h6>No</h6></label></h6>
                                      {
                                            showhide23==="Yes" && (
                                      <div className="col col=12 ">
                                    
                                    <h6 ><b>Another Copy of Shahjra Plan</b> </h6>
                                  <input type="file" className="form-control"/>
                        </div>)}
                   </div>
                   </div>)}
                           </div>
                           <hr></hr>
                  <h5 className="text-black"><b>2. Any encumbrance with respect to following :</b><br></br><br></br>
                  <label htmlFor="gen">Rehan / Mortgage</label>&nbsp;&nbsp;
                  <input type="radio"  id="Yes" value="1"
                        onChange={handleChange} name="Yes"onClick={handleshow18} />&nbsp;&nbsp;
                    <label for="Yes"></label>&nbsp;&nbsp;&nbsp;&nbsp;
                    
                    <label htmlFor="npnl">Patta/Lease</label>&nbsp;&nbsp;
                    <input type="radio"  id="Yes" value="2"
                        onChange={handleChange} name="Yes" onClick={handleshow18}/>&nbsp;&nbsp;
                    <label for="Yes"></label>&nbsp;&nbsp;&nbsp;&nbsp;

                    <label htmlFor="npnl">Gair/Marusi</label>&nbsp;&nbsp;
                    <input type="radio"  id="Yes" value="2"
                        onChange={handleChange} name="Yes" onClick={handleshow18}/>&nbsp;&nbsp;
                    <label for="Yes"></label></h5>

                    <div className="row">
                        <div className="col col-4">
                    <label htmlFor="npnl"><h6><b>Any other, please specify</b></h6></label>
                    <input type="text" className="form-control"/></div>
                    </div>
                    
              
                  {/* <div className="row">
                        <div className="col col-3 ">
                                    <h6 onChange={(e)=>setRehan(e.target.value)} value={rehan}><b>(a)Rehan / Mortgage</b> </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow18}  />&nbsp;&nbsp;
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"onClick={handleshow18} />&nbsp;&nbsp;
                                            <label for="No">No</label>
                                            {
                                                    showhide18==="Yes" && (
                                                        <div className="row " >
                                                                <div className="col col-6">
                                                                    <label for="parentLicense" className="font-weight-bold"> Remark </label>
                                                                    <input type="text" className="form-control"/>
                                                                </div>
                                                            
                                                            
                                                            </div> 

                                                    )
                                                }
                        </div>
                        <div className="col col-3 ">
                                    
                                    <h6 onChange={(e)=>setPatta(e.target.value)} value={patta}><b>(b)Patta/Lease</b> </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow19}  />&nbsp;&nbsp;
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"onClick={handleshow19} />&nbsp;&nbsp;
                                            <label for="No">No</label>
                                            {
                                                    showhide19==="Yes" && (
                                                        <div className="row " >
                                                                <div className="col col-6">
                                                                    <label for="parentLicense" className="font-weight-bold"> Remark </label>
                                                                    <input type="text" className="form-control"/>
                                                                </div>
                                                            
                                                            </div> 

                                                    )
                                                }
                                                {
                                                    showhide19==="No" && (
                                                        <div className="row " >
                                                                <div className="col col-12">
                                                                    <label for="parentLicense" className="font-weight-bold">Details of Lease/Patta</label>
                                                                    <input type="file" className="form-control"/>
                                                                </div>
                                                            
                                                            </div> 

                                                    )
                                                }
                        </div>
                        <div className="col col-3 ">
                                    
                                    <h6 onChange={(e)=>setGair(e.target.value)} value={gair}><b>(c)GairMarusi</b>  </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow20} />&nbsp;&nbsp;
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes" onClick={handleshow20}/>&nbsp;&nbsp;
                                            <label for="No">No</label>
                                            {
                                                    showhide20==="Yes" && (
                                                        <div className="row " >
                                                                <div className="col col-6">
                                                                    <label for="parentLicense" className="font-weight-bold"> Remark </label>
                                                                    <input type="text" className="form-control"/>
                                                                </div>
                                                            
                                                            </div> 

                                                    )
                                                }
                        </div>
                        <div className="col col-3 ">
                                    
                                    <h6 onChange={(e)=>setAny(e.target.value)} value={any}><b>(d)Any other, please specify</b>  </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"onClick={handleshow21}  />&nbsp;&nbsp;
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"onClick={handleshow21}/>&nbsp;&nbsp;
                                            <label for="No">No</label>
                                            {
                                                    showhide21==="Yes" && (
                                                        <div className="row " >
                                                                <div className="col col-6">
                                                                    <label for="parentLicense" className="font-weight-bold"> Remark </label>
                                                                    <input type="text" className="form-control"/>
                                                                </div>
                                                            
                                                            </div> 

                                                    )
                                                }
                        </div>        
                    </div> */}
                    <hr/>
                    <h6 onChange={(e)=>setLitigation(e.target.value)} value={litigation}><b>(ii) Existing litigation, if any, concerning applied land including co-sharers   and collaborator :</b></h6>
                  <div className="row">
                  <div className="col col-12 ">
                              
                           
                              <input type="radio" value="Yes" id="Yes"
                                      onChange1={handleChange} name="Yes" onClick={handleshow10}   />&nbsp;&nbsp;
                                      <label for="Yes"><h6>Yes</h6></label>&nbsp;&nbsp;

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"onClick={handleshow10}  />&nbsp;&nbsp;
                                      <label for="No"><h6>No</h6></label>
                                      {
                                            showhide10==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-6">
                                                            <label for="parentLicense" className="font-weight-bold"> Remark </label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                        <div className="col col-6">
                                                            <label for="parentLicense" className="font-weight-bold"> Document Upload </label>
                                                            <input type="file" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 
                                            )
                                        }
                   </div>
                   </div>
                   <hr/>
                    <h6 onChange={(e)=>setCourt(e.target.value)} value={court}><b>(iii) Court orders, if any, affecting applied land :</b></h6>
                  <div className="row">
                  <div className="col col-12 ">
                              
                           
                              <input type="radio" value="Yes" id="Yes"
                                      onChange1={handleChange} name="Yes" onClick={handleshow11}  />&nbsp;&nbsp;
                                      <label for="Yes"><h6>Yes</h6></label>&nbsp;&nbsp;

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"onClick={handleshow11 }/>&nbsp;&nbsp;
                                      <label for="No"><h6>No</h6></label>
                                      {
                                            showhide11==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-6">
                                                            <label for="parentLicense" className="font-weight-bold"> Remark/Case No. </label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                        <div className="col col-6">
                                                            <label for="parentLicense" className="font-weight-bold"> Document Upload </label>
                                                            <input type="file" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                   </div>
                   </div>
                   <hr/>
                    <h6 ><b>(iv) Any insolvency/liquidation proceedings against the land owner(s)/ collaborating developed :</b></h6>
                  <div className="row">
                  <div className="col col-12 ">
                              
                           
                              <input type="radio" value="Yes" id="Yes"
                                      onChange1={handleChange} name="Yes" onClick={handleshow12} />&nbsp;&nbsp;
                                      <label for="Yes">Yes</label>&nbsp;&nbsp;

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"onClick={handleshow12}/>&nbsp;&nbsp;
                                      <label for="No">No</label>
                                      {
                                            showhide12==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-6">
                                                            <label for="parentLicense" className="font-weight-bold"> Remark </label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                        <div className="col col-6">
                                                            <label for="parentLicense" className="font-weight-bold"> Document Upload </label>
                                                            <input type="file" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                   </div>
                   </div>
                   <hr/>
                   <h5 className="text-black"><b>3.Shajra Plan</b></h5>
                   <div className="row">
                        <div className="col col-3 ">
                                    
                                    <h6 onChange={(e)=>setAppliedLand(e.target.value)} value={appliedLand}><b>(a)As per applied land (Yes/No)</b> </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"onClick={handleshow14}  />&nbsp;&nbsp;

                                            <label for="Yes"><h6>Yes</h6></label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"onClick={handleshow14}/>&nbsp;&nbsp;

                                            <label for="No"><h6>No</h6></label>
                                            {
                                            showhide14==="Yes" && (
                                                <div className="row " >
                                                        
                                                        <div className="col col-12">
                                                            <label for="parentLicense" className="font-weight-bold"> Document Upload </label>
                                                            <input type="file" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                     
                        <div className="col col-3 ">
                        <h6 onChange={(e)=>setRevenuerasta(e.target.value)} value={revenuerasta} data-toggle="tooltip" data-placement="top" title="If any revenue rasta abuts to the applied site ?"><b>(b)&nbsp;Revenue rasta&nbsp;<InfoIcon style={{color:"blue"}}/> </b>&nbsp;&nbsp;</h6>
                        <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"onClick={handleshow1}  />&nbsp;&nbsp;
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;
                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes" onClick={handleshow1}/>&nbsp;&nbsp;
                                            <label for="No">No</label>
                                            {
                                            showhide1==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold"> Width of revenue rasta </label>
                                                            <input type="number" className="form-control"/>
                                                        </div>
                                                    </div> 
                                            )
                                        }
                        </div>
                        <div className="col col-3 ">
                        <h6 onChange={(e)=>setRevenuerasta(e.target.value)} value={revenuerasta} data-toggle="tooltip" data-placement="top" title="Watercourse running along boundary through the applied site ?"><b>(c)&nbsp;Watercourse running&nbsp;<InfoIcon style={{color:"blue"}}/> </b>&nbsp;&nbsp;</h6>
                        <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow2} />&nbsp;&nbsp;
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;
                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes" onClick={handleshow2}/>&nbsp;&nbsp;
                                            <label for="No">No</label>
                                            {
                                            showhide2==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold"> Remark </label>
                                                            <input type="number" className="form-control"/>
                                                        </div>
                                                    </div>
                                            )
                                        }
                        </div>
                      
                        <div className="col col-3 ">
                                    
                                    <h6 onChange={(e)=>setCompactBlock(e.target.value)} value={compactBlock}><b>(d)Whether in Compact Block (Yes/No)</b>  </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow15} />&nbsp;&nbsp;

                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"onClick={handleshow15}/>&nbsp;&nbsp;

                                            <label for="No">No</label>
                                            {
                                            showhide15==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold"> Remark </label>
                                                            <input type="number" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                        </div>  <br></br>
                        <div className="row">
                        <div className="col col-3 ">
                        <h6 onChange={(e)=>setsandwiched(e.target.value)} value={sandwiched} data-toggle="tooltip" data-placement="top" title="If any other owners' land is sandwiched within applied land."><b>(e)&nbsp;Land Sandwiched&nbsp;<InfoIcon style={{color:"blue"}}/> </b>&nbsp;&nbsp;</h6>
                        <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow20}  />&nbsp;&nbsp;
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;
                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes" onClick={handleshow20} />&nbsp;&nbsp;
                                            <label for="No">No</label>
                                            {
                                            showhide20==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-12">
                                                            <label for="parentLicense" className="font-weight-bold">Remark</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                        <div className="col col-3 ">
                                    
                                    <h6 onChange={(e)=>setAcquistion(e.target.value)} value={acquistion}><b>(f)Acquisition status (Yes/No)</b> </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow3} />&nbsp;&nbsp;

                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes" onClick={handleshow3}/>&nbsp;&nbsp;

                                            <label for="No">No</label>
                                            {
                                            showhide3==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-12">
                                                            <label for="parentLicense" className="font-weight-bold">Remark</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                        <div className="col col-3">
                                        <div className="form-group ">
                                            <label htmlFor="sectionfour"><h6><b>Date of section 4 notification</b></h6> </label>
                                            <input
                                                type="date"
                                                name="sectionfour" onChange={(e)=>setSection4(e.target.value)} value={section4}
                                                className={`form-control ${errors.sectionfour ? "is-invalid" : ""
                                                    } `}
                                             
                                                {...register("sectionfour", {
                                                    required: "sectionfour is required",
                                                   
                                                   
                                                })}
                                            />
                                            <div className="invalid-feedback">
                                                {errors?.sectionfour?.message}
                                            </div>
                                        </div>
                         </div>
                         <div className="col col-3">
                                        <div className="form-group ">
                                            <label htmlFor="sectionsix"><h6><b>Date of section 6 notification</b></h6></label>
                                            <input
                                                type="date"
                                                name="sectionsix" onChange={(e)=>setSection6(e.target.value)} value={section6}
                                                className={`form-control ${errors.sectionsix ? "is-invalid" : ""
                                                    } `}
                                             
                                                {...register("sectionsix", {
                                                    required: "sectionsix is required",
                                                   
                                                   
                                                })}
                                            />
                                            <div className="invalid-feedback">
                                                {errors?.sectionsix?.message}
                                            </div>
                                        </div>
                         </div>
                         </div> <br></br>
                     <div className="row">
                        <div className="col col-12">
                        <h6 onChange={(e)=>setExclusion(e.target.value)} value={exclusion} data-toggle="tooltip" data-placement="top" title="Whether details/orders of release/exclusion of land uploaded."><b>(g)&nbsp;Orders Upload &nbsp;<InfoIcon style={{color:"blue"}}/> </b>&nbsp;&nbsp;</h6>
                        <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"  onClick={handleshow16}/>&nbsp;&nbsp;
                                            <label for="Yes"><h6>Yes</h6></label>&nbsp;&nbsp;
                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"onClick={handleshow16}/>&nbsp;&nbsp;
                                            <label for="No"><h6>No</h6></label>
                                            {
                                            showhide16==="Yes" && (
                                                <div className="row " >
                                                         <div className="col col-3 ">
                                    
                                    <h6 onChange={(e)=>setCompensation(e.target.value)} value={compensation}><b>(h) Whether land compensation received</b>&nbsp;&nbsp;
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"  />&nbsp;&nbsp;

                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"/>&nbsp;&nbsp;

                                            <label for="No">No</label></h6>
                        </div>
                        <div className="col col-3">
                                        <div className="form-group">
                                            <label htmlFor="releasestatus"><h6><b>Status of release</b></h6></label>
                                            <select className="form-control" id="releasestatus"
                                                name="releasestatus" onChange={(e)=>setStatusRelease(e.target.value)} value={statusRelease}
                                            >
                                                <option value="" >
                                                </option>
                                                <option ></option>
                                                <option ></option>
                                                <option ></option>
                                            </select>
                                            <div className="invalid-feedback">
                                                {errors?.releasestatus?.message}
                                            </div>
                                        </div>
                         </div>
                         <div className="col col-3">
                                        <div className="form-group ">
                                            <label htmlFor="awarddate"><h6><b>Date of Award</b></h6></label>
                                            <input
                                                type="date"
                                                name="awarddate" onChange={(e)=>setAward(e.target.value)} value={award}
                                                className={`form-control ${errors.awarddate ? "is-invalid" : ""
                                                    } `}
                                             
                                                {...register("awarddate", {
                                                    required: "awarddate is required",
                                                   
                                                   
                                                })}
                                            />
                                            <div className="invalid-feedback">
                                                {errors?.awarddate?.message}
                                            </div>
                                        </div>
                         </div> 
                         <div className="col col-3">
                                        <div className="form-group ">
                                            <label htmlFor="releasedate"><h6><b>Date of Release</b></h6> </label>
                                            <input
                                                type="date"
                                                name="releasedate" onChange={(e)=>setDateRelease(e.target.value)} value={dateRelease}
                                                className={`form-control ${errors.releasedate ? "is-invalid" : ""
                                                    } `}
                                             
                                                {...register("releasedate", {
                                                    required: "releasedate is required",
                                                   
                                                   
                                                })}
                                            />
                                            <div className="invalid-feedback">
                                                {errors?.releasedate?.message}
                                            </div>
                                        </div>
                         </div>
                         <div className="col col-3">
                                        <div className="form-group ">
                                            <label htmlFor="sitedetails"><h6><b>Site Details</b></h6></label>
                                            <input
                                                type="number"
                                                name="sitedetails" onChange={(e)=>setSite(e.target.value)} value={site}
                                                className={`form-control ${errors.sitedetails ? "is-invalid" : ""
                                                    } `}
                                             
                                                {...register("sitedetails", {
                                                    required: "sitedetails is required",
                                                   
                                                   
                                                })}
                                            />
                                            <div className="invalid-feedback">
                                                {errors?.sitedetails?.message}
                                            </div>
                                        </div>
                         </div>
                                                    </div> 

                                            )
                                        }
                        </div>
                        </div>
                        <div className="row">
                        <div className="col col-3">
                        <h6 onChange={(e)=>setApproachable(e.target.value)} value={approachable} data-toggle="tooltip" data-placement="top" title="whether the applied site is approachable from the proposed 18/24 m internal sectoral plan road/sector dividing road. (yes/no)
"><b>(h)&nbsp;Site Approachable Road &nbsp;<InfoIcon style={{color:"blue"}}/> </b></h6>
                        <input  type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"  />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;
                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"/>
                                            <label for="No">No</label> 
                        </div>
                     </div>
                    <hr/>
                    <h5 className="text-black"><b>4.Site condition</b></h5>
                    <div className="row">
                        <div className="col col-3">
                                    
                                    <h6 onChange={(e)=>setVacant(e.target.value)} value={vacant}><b>(a)vacant: (Yes/No)</b> </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow17}  />&nbsp;&nbsp;
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes" onClick={handleshow17}/>&nbsp;&nbsp;
                                            <label for="No">No</label>
                                            {
                                            showhide17==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold">Vacant Remark</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                        <div className="col col-3">
                                    
                                    <h6 onChange={(e)=>setConstruction(e.target.value)} value={construction}><b>(b)Construction: (Yes/No)</b>
 </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"  onClick={handleshow4} />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"  onClick={handleshow4}/>
                                            <label for="No">No</label>
                                            {
                                            showhide4==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold">Type of Construction</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                        <div className="col col-3">
                                    
                                    <h6 onChange={(e)=>setHt(e.target.value)} value={ht}><b>(c)HT line:(Yes/No)</b>
 </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow5}  />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes" onClick={handleshow5}/>
                                            <label for="No">No</label>
                                            {
                                            showhide5==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold">HT Remark</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                        <div className="col col-3">
                                    
                                    <h6 onChange={(e)=>setGas(e.target.value)} value={gas}><b>(d) IOC Gas Pipeline:(Yes/No)</b>
 </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"onClick={handleshow6}  />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"onClick={handleshow6}/>
                                            <label for="No">No</label>
                                            {
                                            showhide6==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold">IOC Remark</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                     </div><br></br>
                     <div className="row ">
                        <div className="col col-3">
                                    
                                    <h6 onChange={(e)=>setNallah(e.target.value)} value={nallah}><b>(e)Nallah:(Yes/No)</b> </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow7} />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes" onClick={handleshow7}/>
                                            <label for="No">No</label>
                                            {
                                            showhide7==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold">Nallah Remark</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                        <div className="col col-3">
                                    
                                    <h6 onChange={(e)=>setRoad(e.target.value)} value={road}><b>(f)Any revenue rasta/road:(Yes/No)</b>
 </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"onClick={handleshow8}  />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"onClick={handleshow8}/>
                                            <label for="No">No</label>
                                            {
                                            showhide8==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold">Width of Revenue rasta/road</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                        <div className="col col-3">
                                    
                                    <h6 onChange={(e)=>setLand(e.target.value)} value={land}><b>(g)Any marginal land:(Yes/No)</b>
</h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow9} />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"onClick={handleshow9}/>
                                            <label for="No">No</label>
                                            {
                                            showhide9==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold">Remark of Marginal Land</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                        <div className="col col-3">
                        <h6 onChange={(e)=>setLayoutPlan(e.target.value)} value={layoutPlan} data-toggle="tooltip" data-placement="top" title="Whether any utility line passing through the site is incorporated/adjusted in the layout plan (Yes/No)
"><b>(h)&nbsp;Utility Line &nbsp;<InfoIcon style={{color:"blue"}}/> </b></h6>
                                                                      
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow0} />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes" onClick={handleshow0}/>
                                            <label for="No">No</label>
                                            {
                                            showhide0==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col">
                                                            <label for="parentLicense" className="font-weight-bold">Width of row</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                     </div>
                     <hr></hr>
                     <h5 className="text-black"><b>5. Enclose the following documents as Annexures</b></h5>
                    <div className="row">
                        <div className="col col-3">
                                    <h6 ><b>Land schedule</b></h6>
                                  <input type="file" className="form-control">
                                    </input>
                        </div>
                        <div className="col col-3">
                                    <h6 ><b>Copy of Mutation</b></h6>
                                  <input type="file" className="form-control"></input>
                        </div>
                        <div className="col col-3">
                                    <h6 ><b>Copy of Jamabandi</b></h6>
                                  <input type="file" className="form-control"></input>
                        </div>
                        <div className="col col-3">
                                    <h6 ><b>Details of lease / patta, if any</b></h6>
                                  <input type="file" className="form-control"></input>
                        </div>
                      
                     </div><br></br>
                     <div className="row">
                        <div className="col col-3">
                                    <h6 ><b>Approved Layout of Plan/ Site plan for(GH)Showing Area(s)/Proposed migration </b></h6>
                                  <input type="file" className="form-control">
                                    </input>
                        </div>
                        <div className="col col-3">
                                    <h6 ><b>Proposed Layout of Plan /site plan for area applied for migration.</b></h6>
                                  <input type="file" className="form-control"></input>
                        </div>
                        <div className="col col-3">
                                    <h6 ><b>Revised Land Schedule</b></h6>
                                  <input type="file" className="form-control"></input>
                        </div>
                     </div>

                     <Button style={{alignSelf:"center", marginTop:20, marginright:867}} variant="primary" type="submit">
                Save as Draft
            </Button>
            <Button style={{alignSelf:"center", marginTop:-42,marginLeft:980}} variant="primary" type="submit">
               Continue
            </Button>
                        </Col>
                        </Row>
                      
                        </Form.Group>
                        </Form>
    )
};
export default LandScheduleForm;


