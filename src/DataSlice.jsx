import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState ={
    datas : []
}

const DataSlice = createSlice({
    name : 'datastore',
    initialState,
    reducers : {
        setdatas : (state,actions)=>{
            state.datas = actions.payload
        }
    }

})


export const {setdatas}  = DataSlice.actions
export default DataSlice.reducer
