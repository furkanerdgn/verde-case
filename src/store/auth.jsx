import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const initialState = {
    userId: 1,
    data: [],
    selectedBlog: null,

};

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        //for login
        setUserId(state, action) {
            state.userId = action.payload;
        }
    }
});

const data = createSlice({
    name: "data",
    initialState,
    reducers: {
        //for posts
        setData(state, action) {
            state.data = action.payload;
        },
        setSelectedBlog(state, action) {
            state.selectedBlog = action.payload;
        },
        setAddData(state, action) {
            state.data.push(action.payload);
        },
        setDeleteData(state, action) {
            state.data = state.data.filter((item) => item.id !== action.payload);
        },
        setUpdateData(state, action) {
            state.data = state.data.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload;
                }
                return item;
            });
        }


    }
});

export const { setData,setSelectedBlog,setAddData,setDeleteData,setUpdateData } = data.actions;
export const { setUserId } = auth.actions;
//login actions
 const authReducer = auth.reducer;
 const dataReducer = data.reducer;

const reducer = combineReducers({
    auth: authReducer,
    data: dataReducer,
});

export default reducer;