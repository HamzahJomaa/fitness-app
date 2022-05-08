import {createSlice} from '@reduxjs/toolkit';

let initialState = {
  id: null,
  token: null
};

const profileReducer = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setProfile: (state, action) => action.payload,
    addNewFollower: (state, action) => {
      state.following.push(action.payload);
      return state;
    },
    removeFollow: (state, action) => {
      const indexApple = state.following.indexOf(action.payload);
      state.following.splice(indexApple, 1);
      return state;
    },
    updateLang: (state, action) => {
      state.lang = action.payload;
      return state;
    },
  },
});

export const {setProfile, addNewFollower, removeFollow, updateLang} =
  profileReducer.actions;
export default profileReducer.reducer;
