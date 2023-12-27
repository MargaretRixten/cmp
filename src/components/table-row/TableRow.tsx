import { PropsWithChildren } from "react";
import styles from "./TableRow.module.scss";
import { useAppDispatch } from "../../store/hooks.ts";
import { setIsDisabledAction } from "../../store/actions/table.ts";
import { useSelector } from "react-redux";
import { tableSelector } from "../../store/selectors/table.ts";

interface ITableRow extends PropsWithChildren {
  rowId: number;
}

export const TableRow = ({ children, rowId }: ITableRow) => {
  const dispatch = useAppDispatch();

  const handleDoubleClick = () => {
    dispatch(setIsDisabledAction(rowId));
  };
  return (
    <form onDoubleClick={handleDoubleClick} className={styles.table_row}>
      {children}
    </form>
  );
};
