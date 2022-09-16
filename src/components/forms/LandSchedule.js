import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";

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

    return (
        <Form onSubmit={landScheduleFormSubmitHandler}>
       
           

       <Form.Group className="justify-content-center" controlId="formBasicEmail">
                <Row className="ml-auto" style={{marginBottom:5}}>
                <Col col-12>
                  
                       
                           
                            <h5 className="text-black">1. Details of applied land:</h5>
                            <div className="row">
                            <div className="col col-6 ">
                              
                                        <h6 onChange={(e)=>setLicenseApplied(e.target.value)} value={licenseApplied} ><b>(i)Whether licence applied for additional area ?</b></h6>
                                        <input type="radio" value="Yes" id="Yes"  
                                                onChange1={handleChange} name="Yes" onClick={handleshow} />
                                                <label for="Yes">Yes</label>&nbsp;&nbsp;

                                                <input type="radio" value="No" id="No"
                                                onChange1={handleChange} name="Yes" onClick={handleshow}/>
                                                <label for="No">No</label>
                                                {
                                            showhide==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-6">
                                                            <label for="parentLicense" className="font-weight-bold">License No. of Parent License </label>
                                                           <input type="number" className="form-control"/>
                                                        </div>
                                                    </div> 

                                            )
                                        }
                             </div>
                            
                             <div className="col col-6 ">
                              
                                        <h6 onChange={(e)=>setMigrationLic(e.target.value)} value={migrationLic}><b>(ii)Whether licence applied under Migration policy?</b></h6>
                                        <input type="radio" value="Yes"  id="Yes"
                                                onChange1={handleChange} name="Yes" />
                                                <label for="Yes">Yes</label>&nbsp;&nbsp;

                                                <input type="radio" value="No" id="No"
                                                onChange1={handleChange} name="Yes"/>
                                                <label for="No">No</label>
                             </div>
                             </div>
                             <hr/>
                           
                                <div className="row">
                                    <div className="col col-3">
                                        <div className="form-group">
                                            <label htmlFor="potential"><b>Potential Zone:</b></label>
                                            <select className="form-control" id="potential"
                                                name="potential" onChange={(e)=>setPotential(e.target.value)} value={potential}
                                            >
                                                <option value="" >
                                                </option>
                                                <option value="K.Mishra">Hyper</option>
                                                <option value="potential 1">High 1</option>
                                                <option value="potential 2">High 2</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                {errors?.potential?.message}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-3">
                                        <div className="form-group">
                                            <label htmlFor="locPurpose"><b>Site Location Purpose:</b></label>
                                            <select className="form-control" id="locPurpose"
                                                name="locPurpose" onChange={(e)=>setSiteLoc(e.target.value)} value={siteLoc}
                                            >
                                                <option value="" >
                                                </option>
                                                <option value="K.Mishra">Purpose 1</option>
                                                <option value="potential 1">Purpose 2</option>
                                                <option value="potential 2">Purpose 3</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                {errors?.locPurpose?.message}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-3">
                                        <div className="form-group">
                                            <label htmlFor="approach"><b>Approach Type (type of Policy):</b></label>
                                            <select className="form-control" id="approach"
                                                name="approach" onChange={(e)=>setapproach(e.target.value)} value={approach}
                                            >
                                                <option value="" >
                                                </option>
                                                <option value="K.Mishra"></option>
                                                <option value="potential 1"></option>
                                                <option value="potential 2"></option>
                                            </select>
                                            <div className="invalid-feedback">
                                                {errors?.approach?.message}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-3">
                                        <div className="form-group ">
                                            <label htmlFor="roadwidth"><b>Approach Road Width:</b> </label>
                                            <input
                                                type="number"
                                                name="roadwidth"
                                                className={`form-control ${errors.roadwidth ? "is-invalid" : ""
                                                    } `}
                                             
                                                {...register("roadwidth", {
                                                    required: "roadwidth is required",
                                                   
                                                    minLength: {
                                                        value: 10,
                                                        message: "roadwidth must be atleast 10 characters",
                                                    },
                                                    maxLength: {
                                                        value: 20,
                                                        
                                                    },
                                                })}
                                            />
                                            <div className="invalid-feedback">
                                                {errors?.roadwidth?.message}
                                            </div>
                                        </div>
                                    </div>
                                  
                                </div><br></br>
                                <div className="row">
                                <div className="col col-3">
                                        <div className="form-group ">
                                            <label htmlFor="specify"><b>Specify Others:</b></label>
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
                                            <label htmlFor="existingcase"><b>Existing Case No.: </b></label>
                                            <select className="form-control" id="existingcase"
                                                name="existingcase" onChange={(e)=>setExistingCase(e.target.value)} value={existingCase}
                                            >
                                                <option value="" >
                                                </option>
                                                <option ></option>
                                                <option ></option>
                                                <option ></option>
                                            </select>
                                            <div className="invalid-feedback">
                                                {errors?.existingcase?.message}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-3">
                                        <div className="form-group ">
                                            <label htmlFor="typeland"><b>Type of land :</b> </label>
                                            <select className="form-control" id="typeland"
                                                name="typeland" onChange={(e)=>setTypeLand(e.target.value)} value={typeLand}>
                                           
                                                <option value="" >chahi/nehri
                                                </option>
                                                <option >Gair Mumkins</option>
                                                <option >others</option>
                                                <option ></option>
                                            </select>
                                            <div className="invalid-feedback">
                                                {errors?.typeland?.message}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-3 ">
                              
                             
                              <label htmlFor="typeland" onChange={(e)=>setThirdParty(e.target.value)} value={thirdParty}><b>Third-party right created :</b> </label>
                              <div>
                              <input type="radio" value="Yes" id="Yes"
                                      onChange1={handleChange} name="Yes"  />
                                      <label for="Yes">Yes</label>&nbsp;&nbsp;

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"/>
                                      <label for="No">No</label>
                              </div>
                            
                                    </div>
                                </div>
                           
                            
                   <hr/>
                   <h5 className="text-black"><b>2. Applied Area details</b></h5>
                   <p>Note: The term “Collaboration agreement" shall include all Development agreements/ Joint Venture agreements/ Joint Development agreements/ Memorandum of Understanding etc. and similar agreements registered with competent authority.</p>
                  <h6><b>(i) Any encumbrance with respect to following :</b></h6><br></br>
                  <div className="row">
                  <div className="col col-3 ">
                              
                              <h6 onChange={(e)=>setRehan(e.target.value)} value={rehan}><b>(a)Rehan / Mortgage</b> </h6>
                              <input type="radio" value="Yes" id="Yes"
                                      onChange1={handleChange} name="Yes"  />
                                      <label for="Yes">Yes</label>&nbsp;&nbsp;

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"/>
                                      <label for="No">No</label>
                   </div>
                   <div className="col col-3 ">
                              
                              <h6 onChange={(e)=>setPatta(e.target.value)} value={patta}><b>(b)Patta/Lease</b> </h6>
                              <input type="radio" value="Yes" id="Yes"
                                      onChange1={handleChange} name="Yes"  />
                                      <label for="Yes">Yes</label>&nbsp;&nbsp;

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"/>
                                      <label for="No">No</label>
                   </div>
                   <div className="col col-3 ">
                              
                              <h6 onChange={(e)=>setGair(e.target.value)} value={gair}><b>(c)GairMarusi</b>  </h6>
                              <input type="radio" value="Yes" id="Yes"
                                      onChange1={handleChange} name="Yes"  />
                                      <label for="Yes">Yes</label>&nbsp;&nbsp;

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"/>
                                      <label for="No">No</label>
                   </div>
                   <div className="col col-3 ">
                              
                              <h6 onChange={(e)=>setAny(e.target.value)} value={any}><b>(d)Any other, please specify</b>  </h6>
                              <input type="radio" value="Yes" id="Yes"
                                      onChange1={handleChange} name="Yes"  />
                                      <label for="Yes">Yes</label>&nbsp;&nbsp;

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"/>
                                      <label for="No">No</label>
                   </div>
                                  
                    </div>
                    <hr/>
                    <h6 onChange={(e)=>setLitigation(e.target.value)} value={litigation}><b>(ii) Existing litigation, if any, concerning applied land including co-sharers   and collaborator :</b></h6>
                  <div className="row">
                  <div className="col col-3 ">
                              
                           
                              <input type="radio" value="Yes" id="Yes"
                                      onChange1={handleChange} name="Yes"  />
                                      <label for="Yes">Yes</label>&nbsp;&nbsp;

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"/>
                                      <label for="No">No</label>
                   </div>
                   </div>
                   <hr/>
                    <h6 onChange={(e)=>setCourt(e.target.value)} value={court}><b>(iii) Court orders, if any, affecting applied land :</b></h6>
                  <div className="row">
                  <div className="col col-3 ">
                              
                           
                              <input type="radio" value="Yes" id="Yes"
                                      onChange1={handleChange} name="Yes"  />
                                      <label for="Yes">Yes</label>&nbsp;&nbsp;

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"/>
                                      <label for="No">No</label>
                   </div>
                   </div>
                   <hr/>
                    <h6 ><b>(iv) Any insolvency/liquidation proceedings against the land owner(s)/ collaborating developed :</b></h6>
                  <div className="row">
                  <div className="col col-3 ">
                              
                           
                              <input type="radio" value="Yes" id="Yes"
                                      onChange1={handleChange} name="Yes"  />
                                      <label for="Yes">Yes</label>&nbsp;&nbsp;

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"/>
                                      <label for="No">No</label>
                   </div>
                   </div>
                   <hr/>
                   <h5 className="text-black"><b>3.Shajra Plan</b></h5>
                   <div className="row">
                        <div className="col col-3 ">
                                    
                                    <h6 onChange={(e)=>setAppliedLand(e.target.value)} value={appliedLand}><b>(a)As per applied land (Yes/No)</b> </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"  />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"/>
                                            <label for="No">No</label>
                        </div>
                        <div className="col col-3 ">
                                    
                                    <h6 onChange={(e)=>setRevenuerasta(e.target.value)} value={revenuerasta}><b>(b)If any revenue rasta abuts to the applied site (Yes/No)</b> </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"onClick={handleshow1}  />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes" onClick={handleshow1}/>
                                            <label for="No">No</label>
                                            {
                                            showhide1==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-6">
                                                            <label for="parentLicense" className="font-weight-bold"> Width of revenue rasta </label>
                                                            <input type="number" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                        <div className="col col-3 ">
                                    
                                    <h6 onChange={(e)=>setWatercourse(e.target.value)} value={watercourse}><b>(c)Any watercourse abuts/passes through the applied site (Yes/No)</b> </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow2} />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes" onClick={handleshow2}/>
                                            <label for="No">No</label>
                                            {
                                            showhide2==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-6">
                                                            <label for="parentLicense" className="font-weight-bold"> Rev. rasta width </label>
                                                            <input type="number" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                        <div className="col col-3 ">
                                    
                                    <h6 onChange={(e)=>setCompactBlock(e.target.value)} value={compactBlock}><b>(d)Whether in Compact Block (Yes/No)</b>  </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"  />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"/>
                                            <label for="No">No</label>
                        </div>
                   </div><br></br>
                   <div className="row">
                        <div className="col col-3 ">
                                    
                                    <h6 onChange={(e)=>setsandwiched(e.target.value)} value={sandwiched}><b>(e)If any other owners' land is sandwiched within applied land (Yes/No)</b> </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"  />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"/>
                                            <label for="No">No</label>
                        </div>
                        <div className="col col-3 ">
                                    
                                    <h6 onChange={(e)=>setAcquistion(e.target.value)} value={acquistion}><b>(f)Acquisition status (Yes/No)</b> </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow3} />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes" onClick={handleshow3}/>
                                            <label for="No">No</label>
                                            {
                                            showhide3==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-6">
                                                            <label for="parentLicense" className="font-weight-bold">Remark</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                        <div className="col col-3 ">
                                    
                                    <h6 onChange={(e)=>setExclusion(e.target.value)} value={exclusion}><b>(g)Whether details/orders of release/exclusion of land uploaded</b> </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"  />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"/>
                                            <label for="No">No</label>
                        </div>
                        <div className="col col-3 ">
                                    
                                    <h6 onChange={(e)=>setCompensation(e.target.value)} value={compensation}><b>(h) Whether land compensation received</b></h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"  />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"/>
                                            <label for="No">No</label>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col col-3">
                                        <div className="form-group ">
                                            <label htmlFor="sectionfour"><b>Date of section 4 notification:</b> </label>
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
                                            <label htmlFor="sectionsix"><b>Date of section 6 notification: </b></label>
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
                         <div className="col col-3">
                                        <div className="form-group">
                                            <label htmlFor="releasestatus"><b>Status of release:</b></label>
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
                                            <label htmlFor="awarddate"><b>Date of Award: </b></label>
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
                    </div><br></br>
                    <div className="row">
                         <div className="col col-3">
                                        <div className="form-group ">
                                            <label htmlFor="releasedate"><b>Date of Release:</b> </label>
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
                                            <label htmlFor="sitedetails"><b>Site Details: </b></label>
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
                     <hr/>
                     <div className="row">
                        <div className="col col-12 ">
                                    
                                    <h6 onChange={(e)=>setApproachable(e.target.value)} value={approachable}><b>whether the applied site is approachable from the proposed 18/24 m internal sectoral plan road/sector dividing road. (yes/no)</b>
 </h6>
                                    <input type="radio" value="Yes" id="Yes"
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
                                            onChange1={handleChange} name="Yes"  />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"/>
                                            <label for="No">No</label>
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
                                                        <div className="col col-6">
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
                                                        <div className="col col-6">
                                                            <label for="parentLicense" className="font-weight-bold">HT Remarks</label>
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
                                                        <div className="col col-6">
                                                            <label for="parentLicense" className="font-weight-bold">IOC Remarks</label>
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
                                                        <div className="col col-6">
                                                            <label for="parentLicense" className="font-weight-bold">Nallah Remarks</label>
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
                                                        <div className="col col-6">
                                                            <label for="parentLicense" className="font-weight-bold">Width</label>
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
                                                        <div className="col col-6">
                                                            <label for="parentLicense" className="font-weight-bold">Remark</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
                        </div>
                        <div className="col col-3">
                                    
                                    <h6 onChange={(e)=>setLayoutPlan(e.target.value)} value={layoutPlan}><b>(h) Whether any utility line passing through the site is incorporated/adjusted in the layout plan (Yes/No)</b>

 </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow0} />
                                            <label for="Yes">Yes</label>&nbsp;&nbsp;

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes" onClick={handleshow0}/>
                                            <label for="No">No</label>
                                            {
                                            showhide0==="Yes" && (
                                                <div className="row " >
                                                        <div className="col col-6">
                                                            <label for="parentLicense" className="font-weight-bold">Width of row</label>
                                                            <input type="text" className="form-control"/>
                                                        </div>
                                                       
                                                    </div> 

                                            )
                                        }
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


