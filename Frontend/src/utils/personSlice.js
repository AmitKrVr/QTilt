import { createSlice } from "@reduxjs/toolkit";

const personSlice = createSlice({
    name: "person",
    initialState: {
        personData: {},
    },
    reducers: {
        addPersonData: (state, action) => {
            const { personId, data } = action.payload;
            state.personData[personId] = data;
        },
    },
});

export const { addPersonData } = personSlice.actions;

export default personSlice.reducer;
