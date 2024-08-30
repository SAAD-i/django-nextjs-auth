import { createSlice } from "@reduxjs/toolkit";

const isLocalStorage = typeof window !== 'undefined' && window.localStorage
const data = isLocalStorage ? JSON.parse(localStorage.getItem('user')) : null

const defaultUser = {
    name:'None',
    email:'None',
    password:'None',
    is_active:false
}

const initialState = {
    user : data === null?defaultUser:data
}

const Slice = createSlice({
    name:'User',
    initialState,
    reducers : {
        addUser : (state, action)=>{
            console.log('Reducer Called addUser')
        }
    }

})

export const {addUser} = Slice.actions

export default Slice.reducer