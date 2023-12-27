import { ITableState, TTableActions } from "../../types/interfaces/table.ts";
import { ETableActions } from "../../types/enums/table.enum.ts";

const initState: ITableState = {
  selectedIdRow: null,
};

const initialState = { ...initState };

export const tableReducer = (state = initialState, action: TTableActions) => {
  switch (action.type) {
    case ETableActions.SetIsDisabled:
      return { ...state, isDisabled: action.payload };
    default:
      return { ...state };
  }
};
