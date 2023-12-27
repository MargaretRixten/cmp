import { ETableActions } from "../../types/enums/table.enum.ts";
import { IIsDisabledAction } from "../../types/interfaces/table.ts";

export const setIsDisabledAction = (
  payload: number | null,
): IIsDisabledAction => ({
  payload,
  type: ETableActions.SetIsDisabled,
});
