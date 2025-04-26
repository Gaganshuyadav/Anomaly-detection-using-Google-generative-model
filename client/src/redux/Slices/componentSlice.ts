import { createSlice} from "@reduxjs/toolkit";



export interface RowData{
    Text: string,
    Classification: number,
    Score: number,
    Explanation: string,
    Anomalous: boolean
}


export type ComponentStateType = {
    isLoading: boolean,
    analyzedData: RowData[] | [],  
    resultDialog: boolean,
}


const initialState:ComponentStateType = {
    isLoading: false,
    analyzedData: [], 
    resultDialog: false,
}

const componentSlice = createSlice({
    name:"component",
    initialState, 
    reducers:{
        setLoading: ( state, action)=>{
            state.isLoading = action.payload;
        },
        setAnalyzedData: ( state, action)=>{
            state.analyzedData = action.payload;
        },
        setResultDialog: ( state, action)=>{
            state.resultDialog = action.payload;
        },
    }
})

export const { setAnalyzedData, setResultDialog, setLoading} = componentSlice.actions;

export default componentSlice.reducer;