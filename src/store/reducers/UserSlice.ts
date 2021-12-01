import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { useAppSelector } from '../hooks';

// Define a type for the slice state
interface UserState {
    authed:boolean,
    api_key:string,
    name:string,
    darkMode:boolean,
}

// Define the initial state using that type
const initialState: UserState = {
    authed:false,
    api_key:'',
    name:'defaltt man',
    darkMode:false,
}

export const userSlice = createSlice({
  name: 'User',
  initialState,
  reducers: {
    auth: (state,action:PayloadAction<boolean>) => {
        state.authed=action.payload;
    },
    updateAPIKey: (state, action: PayloadAction<string>) => {
      state.api_key = action.payload;
    }
  }
})

export const { auth, updateAPIKey } = userSlice.actions

export default userSlice.reducer;
