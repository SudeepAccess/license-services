import { createSlice } from "@reduxjs/toolkit";



const InitialStateAddinfo=
    {
            cin_Number: null,
            companyName: null,
            dateOfCorporation: null,
            registeredAddress: null,
            email: null,
            mobileNumber:null,
            gst_Number: null,
            directorsInformation: null,
            shareHoldingPatterens:null,
            addRemoveAuthoizedUsers:null,
            capacityDevelopAColony:null
            
    }



const AddinfoSlicer = createSlice({
    name:"addinfo",
    initialState:InitialStateAddinfo,
    reducers:{
        setAddinfoData:(state,action)=>{
            state.cin_Number = action.payload.cin_Number;
            state.companyName = action.payload.companyName;
            state.dateOfCorporation = action.payload.dateOfCorporation;
            state.registeredAddress = action.payload.registeredAddress;
            state.email = action.payload.email;
            state.mobileNumber = action.payload.mobileNumber;
            state.gst_Number = action.payload.gst_Number;
            state.directorsInformation = action.payload.directorsInformation;
            state.shareHoldingPatterens = action.payload.shareHoldingPatterens;
            state.financialCapacity = action.payload.financialCapacity;
        },
        setAddAuthUserData:(state,action)=>{
            state.addRemoveAuthoizedUsers = action.payload.addRemoveAuthoizedUsers;
        },
        setTechnicalData:(state,action)=>{
            state.capacityDevelopAColony = action.payload.capacityDevelopAColony;
        }

    }


});



export const {setAddinfoData,setAddAuthUserData,setTechnicalData} = AddinfoSlicer.actions;

export const selectCinNumber=(state)=>state.addinfo.cin_Number;
export const selectCompanayNAme=(state)=>state.addinfo.companyName;
export const selectDateOfCorporation=(state)=>state.addinfo.dateOfCorporation;
export const selectRegisteredAddress=(state)=>state.addinfo.registeredAddress;
export const selectEmail=(state)=>state.addinfo.email;
export const selectMobileNumber=(state)=>state.addinfo.mobileNumber;
export const selectGst_Number=(state)=>state.addinfo.gst_Number;
export const selectDirectorsInformation=(state)=>state.addinfo.directorsInformation;
export const selectShareHoldingPatterens=(state)=>state.addinfo.shareHoldingPatterens;
export const selectFinancialCapacity=(state)=>state.addinfo.financialCapacity;
export const selectmodalAuthUserValuesArray=(state)=>state.addinfo.addRemoveAuthoizedUsers;
export const selectTechnicalValuesArray=(state)=>state.addinfo.capacityDevelopAColony;



export default AddinfoSlicer.reducer;






 






