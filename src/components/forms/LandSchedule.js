import React,{useState,useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import { Card, Row, Col} from "react-bootstrap";

const LandScheduleForm=(props)=>{

    const[form,setForm]=useState([]);
    const [licenseApplied,setLicenseApplied]=useState('');
    const [licenseNo,setLicenseNo]=useState('');
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
    const[rowWidth,setRowWidth]=useState('');

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
            licenseNo:licenseNo,
            migrationLic:migrationLic,
            potential:potential,
            siteLoc:siteLoc,
            approach:approach,
            specify:specify,
            existingCase:existingCase,
            typeLand:typeLand,
            thirdParty:thirdParty,
            rehan:rehan,
            patta:patta,
            gair:gair,
            any:any,
            litigation:litigation,
            court:court,
            appliedLand:appliedLand,
            revenuerasta:revenuerasta,
            widthrevenuerasta:widthrevenuerasta,
            watercourse:watercourse,
            widthRev:widthRev,
            compactBlock:compactBlock,
            sandwiched:sandwiched,
            acquistion:acquistion,
            compensation:compensation,
            section4:section4,
            section6:section6,
            statusRelease:statusRelease,
            award:award,
            dateRelease:dateRelease,
            site:site,
            approachable:approachable,
            vacant:vacant,
            construction:construction,
            typeCons:typeCons,
            ht:ht,
            htRemark:htRemark,
            gas:gas,
            gasRemark:gasRemark,
            nallah:nallah,
            nallahRemark:nallahRemark,
            road:road,
            roadWidth:roadWidth,
            land:land,
            landRemark:landRemark,
            layoutPlan:layoutPlan,
            rowWidth:rowWidth,
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
                              
                                        <h6 onChange={(e)=>setLicenseApplied(e.target.value)} value={licenseApplied} >(i)Whether licence applied for additional area ?</h6>
                                        <input type="radio" value="Yes" id="Yes"  
                                                onChange1={handleChange} name="Yes" onClick={handleshow} />
                                                <label for="Yes">Yes</label>

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
                              
                                        <h6>(ii)Whether licence applied under Migration policy?</h6>
                                        <input type="radio" value="Yes" id="Yes"
                                                onChange1={handleChange} name="Yes" />
                                                <label for="Yes">Yes</label>

                                                <input type="radio" value="No" id="No"
                                                onChange1={handleChange} name="Yes"/>
                                                <label for="No">No</label>
                             </div>
                             </div>
                             <hr/>
                           
                                <div className="row">
                                    <div className="col col-3">
                                        <div className="form-group">
                                            <label htmlFor="potential">Potential Zone:</label>
                                            <select className="form-control" id="potential"
                                                name="potential"
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
                                            <label htmlFor="locPurpose">Site Location Purpose:</label>
                                            <select className="form-control" id="locPurpose"
                                                name="locPurpose"
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
                                            <label htmlFor="approach">Approach Type (type of Policy):</label>
                                            <select className="form-control" id="approach"
                                                name="approach"
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
                                            <label htmlFor="roadwidth">Approach Road Width: </label>
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
                                  
                                </div>
                                <div className="row">
                                <div className="col col-3">
                                        <div className="form-group ">
                                            <label htmlFor="specify">Specify Others:</label>
                                            <input
                                                type="number"
                                                name="specify"
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
                                            <label htmlFor="existingcase">Existing Case No.: </label>
                                            <select className="form-control" id="existingcase"
                                                name="existingcase"
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
                                            <label htmlFor="typeland">Type of land : </label>
                                            <select className="form-control" id="typeland"
                                                name="typeland">
                                           
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
                              
                             
                              <label htmlFor="typeland">Third-party right created : </label>
                              <div>
                              <input type="radio" value="Yes" id="Yes"
                                      onChange1={handleChange} name="Yes"  />
                                      <label for="Yes">Yes</label>

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"/>
                                      <label for="No">No</label>
                              </div>
                            
                                    </div>
                                </div>
                           
                            
                   <hr/>
                   <h5 className="text-black">2. Applied Area details</h5>
                   <p>Note: The term “Collaboration agreement" shall include all Development agreements/ Joint Venture agreements/ Joint Development agreements/ Memorandum of Understanding etc. and similar agreements registered with competent authority.</p>
                  <h6>(i) Any encumbrance with respect to following :</h6>
                  <div className="row">
                  <div className="col col-3 ">
                              
                              <h6>(a)Rehan / Mortgage </h6>
                              <input type="radio" value="Yes" id="Yes"
                                      onChange1={handleChange} name="Yes"  />
                                      <label for="Yes">Yes</label>

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"/>
                                      <label for="No">No</label>
                   </div>
                   <div className="col col-3 ">
                              
                              <h6>(b)Patta/Lease </h6>
                              <input type="radio" value="Yes" id="Yes"
                                      onChange1={handleChange} name="Yes"  />
                                      <label for="Yes">Yes</label>

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"/>
                                      <label for="No">No</label>
                   </div>
                   <div className="col col-3 ">
                              
                              <h6>(c)GairMarusi  </h6>
                              <input type="radio" value="Yes" id="Yes"
                                      onChange1={handleChange} name="Yes"  />
                                      <label for="Yes">Yes</label>

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"/>
                                      <label for="No">No</label>
                   </div>
                   <div className="col col-3 ">
                              
                              <h6>(d)Any other, please specify  </h6>
                              <input type="radio" value="Yes" id="Yes"
                                      onChange1={handleChange} name="Yes"  />
                                      <label for="Yes">Yes</label>

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"/>
                                      <label for="No">No</label>
                   </div>
                                  
                    </div>
                    <hr/>
                    <h6>(ii) Existing litigation, if any, concerning applied land including co-sharers   and collaborator :</h6>
                  <div className="row">
                  <div className="col col-3 ">
                              
                           
                              <input type="radio" value="Yes" id="Yes"
                                      onChange1={handleChange} name="Yes"  />
                                      <label for="Yes">Yes</label>

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"/>
                                      <label for="No">No</label>
                   </div>
                   </div>
                   <hr/>
                    <h6>(iii) Court orders, if any, affecting applied land :</h6>
                  <div className="row">
                  <div className="col col-3 ">
                              
                           
                              <input type="radio" value="Yes" id="Yes"
                                      onChange1={handleChange} name="Yes"  />
                                      <label for="Yes">Yes</label>

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"/>
                                      <label for="No">No</label>
                   </div>
                   </div>
                   <hr/>
                    <h6>(iv) Any insolvency/liquidation proceedings against the land owner(s)/ collaborating developed :</h6>
                  <div className="row">
                  <div className="col col-3 ">
                              
                           
                              <input type="radio" value="Yes" id="Yes"
                                      onChange1={handleChange} name="Yes"  />
                                      <label for="Yes">Yes</label>

                                      <input type="radio" value="No" id="No"
                                      onChange1={handleChange} name="Yes"/>
                                      <label for="No">No</label>
                   </div>
                   </div>
                   <hr/>
                   <h5 className="text-black">3.Shajra Plan</h5>
                   <div className="row">
                        <div className="col col-3 ">
                                    
                                    <h6>(a)As per applied land (Yes/No) </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"  />
                                            <label for="Yes">Yes</label>

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"/>
                                            <label for="No">No</label>
                        </div>
                        <div className="col col-3 ">
                                    
                                    <h6>(b)If any revenue rasta abuts to the applied site (Yes/No) </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"onClick={handleshow1}  />
                                            <label for="Yes">Yes</label>

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
                                    
                                    <h6>(c)Any watercourse abuts/passes through the applied site (Yes/No) </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow2} />
                                            <label for="Yes">Yes</label>

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
                                    
                                    <h6>(d)Whether in Compact Block (Yes/No)  </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"  />
                                            <label for="Yes">Yes</label>

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"/>
                                            <label for="No">No</label>
                        </div>
                   </div>
                   <div className="row">
                        <div className="col col-3 ">
                                    
                                    <h6>(e)If any other owners' land is sandwiched within applied land (Yes/No) </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"  />
                                            <label for="Yes">Yes</label>

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"/>
                                            <label for="No">No</label>
                        </div>
                        <div className="col col-3 ">
                                    
                                    <h6>(f)Acquisition status (Yes/No) </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow3} />
                                            <label for="Yes">Yes</label>

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
                                    
                                    <h6>(g)Whether details/orders of release/exclusion of land uploaded </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"  />
                                            <label for="Yes">Yes</label>

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"/>
                                            <label for="No">No</label>
                        </div>
                        <div className="col col-3 ">
                                    
                                    <h6>(h) Whether land compensation received</h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"  />
                                            <label for="Yes">Yes</label>

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"/>
                                            <label for="No">No</label>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col col-3">
                                        <div className="form-group ">
                                            <label htmlFor="sectionfour">Date of section 4 notification: </label>
                                            <input
                                                type="date"
                                                name="sectionfour"
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
                                            <label htmlFor="sectionsix">Date of section 6 notification: </label>
                                            <input
                                                type="date"
                                                name="sectionsix"
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
                                            <label htmlFor="releasestatus">Status of release:</label>
                                            <select className="form-control" id="releasestatus"
                                                name="releasestatus"
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
                                            <label htmlFor="awarddate">Date of Award: </label>
                                            <input
                                                type="date"
                                                name="awarddate"
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
                    </div>
                    <div className="row">
                         <div className="col col-3">
                                        <div className="form-group ">
                                            <label htmlFor="releasedate">Date of Release: </label>
                                            <input
                                                type="date"
                                                name="releasedate"
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
                                            <label htmlFor="sitedetails">Site Details: </label>
                                            <input
                                                type="number"
                                                name="sitedetails"
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
                                    
                                    <h6>whether the applied site is approachable from the proposed 18/24 m internal sectoral plan road/sector dividing road. (yes/no)
 </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"  />
                                            <label for="Yes">Yes</label>

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"/>
                                            <label for="No">No</label>
                        </div>
                     </div>
                    <hr/>
                    <h5 className="text-black">4.Site condition</h5>
                    <div className="row">
                        <div className="col col-3">
                                    
                                    <h6>(a)vacant: (Yes/No) </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"  />
                                            <label for="Yes">Yes</label>

                                            <input type="radio" value="No" id="No"
                                            onChange1={handleChange} name="Yes"/>
                                            <label for="No">No</label>
                        </div>
                        <div className="col col-3">
                                    
                                    <h6>(b)Construction: (Yes/No)
 </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"  onClick={handleshow4} />
                                            <label for="Yes">Yes</label>

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
                                    
                                    <h6>(c)HT line:(Yes/No)
 </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow5}  />
                                            <label for="Yes">Yes</label>

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
                                    
                                    <h6>(d) IOC Gas Pipeline:(Yes/No)
 </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"onClick={handleshow6}  />
                                            <label for="Yes">Yes</label>

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
                     </div>
                     <div className="row">
                        <div className="col col-3">
                                    
                                    <h6>(e)Nallah:(Yes/No) </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow7} />
                                            <label for="Yes">Yes</label>

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
                                    
                                    <h6>(f)Any revenue rasta/road:(Yes/No)
 </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes"onClick={handleshow8}  />
                                            <label for="Yes">Yes</label>

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
                                    
                                    <h6>(g)Any marginal land:(Yes/No)
</h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow9} />
                                            <label for="Yes">Yes</label>

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
                                    
                                    <h6>(h) Whether any utility line passing through the site is incorporated/adjusted in the layout plan (Yes/No)

 </h6>
                                    <input type="radio" value="Yes" id="Yes"
                                            onChange1={handleChange} name="Yes" onClick={handleshow0} />
                                            <label for="Yes">Yes</label>

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
            <Button style={{alignSelf:"center", marginTop:20,marginLeft:867}} variant="primary" type="submit">
               Continue
            </Button>

                       
                       
                        </Col>
                        </Row>
                      
                        </Form.Group>
                        </Form>
    )
};
export default LandScheduleForm;


