import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../redux/store";
import { fetchIssues } from "./issuesAPI";
import { initialState } from "./state";
import { IssuesPayload } from "./types";

export const loadIssuesAsync = createAsyncThunk(
  "issues/fetchIssues",
  async (payload: IssuesPayload) => await fetchIssues(payload)
);

export const issuesSlice = createSlice({
  name: "issues",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadIssuesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(loadIssuesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.value = action.payload;
      })
      .addCase(loadIssuesAsync.rejected, (state) => {
        state.status = "failed";
      });
  },
});

const { reducer, actions } = issuesSlice;
export const issuesReducer = reducer;
export const isssuesActionCreators = actions;

export const getIssuesStateSelector = (state: RootState) => state.issues;
