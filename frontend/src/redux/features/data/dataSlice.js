import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import dataService from './dataService'

const initialState = {
    datas: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""

}


// create new Goal

export const createData = createAsyncThunk('data/create', async (userListData, thunkAPI) => {
    try {
        if(thunkAPI.getState().auth.user){
            //console.log("dataslice: ", userListData);
            //console.log("Data Slice: ", thunkAPI.getState().auth.user.access_token);
            const token = thunkAPI.getState().auth.user.access_token
            //console.log("In Data Slice: Token is ", token);
            return await dataService.createData(userListData, token)

        }
        else{
            console.log("User Gone createData")
        }
      } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
      }
} )


// get user goals

export const getData = createAsyncThunk('data/getAll', async(_, thunkAPI) => {
    try {
        if(thunkAPI.getState().auth.user){
            const token = thunkAPI.getState().auth.user.access_token
            return await dataService.getData(token)
        }
        else{
            console.log("User Gone during getData")
        }
      } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
      }
})



// put update data

export const updateData = createAsyncThunk('data/update', async (payload, thunkAPI) => {
    // since we cannot send multiple arguments to createAsynThunk, we create a single object
    const { id, userListData } = payload;
    try {
        if(thunkAPI.getState().auth.user){
            const token = thunkAPI.getState().auth.user.access_token

            return await dataService.updateData(id,userListData, token);
        }
        else{
            console.log("User Gone during update data")
        }
      } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
      }
})


// delete goalGoal

export const deleteData = createAsyncThunk('data/delete', async (id , thunkAPI) => {
    try {
        if(thunkAPI.getState().auth.user){
            const token = thunkAPI.getState().auth.user.access_token
            return await dataService.deleteData(id, token)

        }
        else{
            toast.error("User Gone deleteData")
        }
      } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
      }
} )



export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        reset: (state) => initialState,
        /* reset: (state) => {
            state.goals = [],
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = 'error '
          } */
    
    },
    extraReducers:(builder) => {
        builder
            .addCase(createData.pending, (state) => {
                state.isLoading = true
            })
            .addCase(createData.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.datas.push(action.payload)
            })
            .addCase(createData.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })


            .addCase(getData.pending, (state) => {
                state.isLoading = true
            })
            .addCase(getData.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.datas = action.payload
            })
            .addCase(getData.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })

            .addCase(updateData.pending, (state) => {
                state.isLoading = true
            })
            .addCase(updateData.fulfilled, (state, action) => {
              state.isLoading = false;
              state.isSuccess = true;
              //state.datas.push(action.payload)

              // Find the index of the item to be updated
              const index = state.datas.findIndex(
                (data) => data._id === action.payload._id
              );

              if (index !== -1) {
                // Replace the old data with the updated data
                state.datas[index] = action.payload;
              }
            })
            .addCase(updateData.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })


            .addCase(deleteData.pending, (state) => {
                state.isLoading = true
            })
            .addCase(deleteData.fulfilled, (state, action) => {
                state.isLoading = false
                state.isSuccess = true
                state.datas = state.datas.filter((data) => data._id !== action.payload.id) 
            })
            .addCase(deleteData.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }

})


export const { reset } = dataSlice.actions
export default dataSlice.reducer