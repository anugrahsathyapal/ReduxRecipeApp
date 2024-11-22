import { configureStore } from "@reduxjs/toolkit";
import recipeSlice from "./slices/recipeSlice";

const Store = configureStore({
    reducer : {
        recipeReducer : recipeSlice

    }
})

export default Store