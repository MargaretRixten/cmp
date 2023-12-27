import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer.ts";

const state = ({ table }: RootState) => table;

export const tableSelector = createSelector(
  state,
  ({ isDisabled }) => isDisabled,
);
