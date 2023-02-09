import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  value: [{password: 'hello', name: 'test'}],
}

export const passwordsSlice = createSlice({
  name: 'passwords',
  initialState,
  reducers: {
		addPassword: (state, action) => {
			state.value.push(action.payload)
		}
  }
})


export const {addPassword} = passwordsSlice.actions
export const passwordsReducer = passwordsSlice.reducer

// export const passwordsReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_PASSWORD:
//       return [...state, {password: action.payload.password, name: action.payload.name}]
//     default:
//       return state;
//   }
// }

export const ADD_PASSWORD = 'ADD_PASSWORD'

// export const addPassword = (password, name) => {
//   return {
//     type: ADD_PASSWORD,
//     payload: {password, name}
//   }
// };
