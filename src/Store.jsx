import { configureStore } from '@reduxjs/toolkit'
import DataSlice from './DataSlice'


const Store = configureStore({
    reducer : {
        datastore : DataSlice
    }
})

export default Store
