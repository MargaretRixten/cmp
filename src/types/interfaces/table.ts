import { ETableActions } from "../enums/table.enum.ts";

export interface ITableState {
  selectedIdRow: number | null;
}

export interface IIsDisabledAction {
  type: ETableActions.SetIsDisabled;
  payload: number | null;
}

export type TTableActions = IIsDisabledAction;
