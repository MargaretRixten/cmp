import { useState } from "react";
import styles from "./TableCell.module.scss";
import DescriptionIcon from "@mui/icons-material/Description";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector } from "react-redux";
import { tableSelector } from "../../store/selectors/table.ts";

interface ITableCell {
  id: number;
  item: any;
  level?: boolean;
  parentIndex: any;
}

export const TableCell = ({
  item,
  level = false,
  parentIndex,
  id,
}: ITableCell) => {
  const [value, setValue] = useState(item);
  const isDisabled = useSelector(tableSelector);

  return (
    <div className={styles.table_cell}>
      {level ? (
        <div
          style={{ marginLeft: `${parentIndex * 15}px` }}
          className={styles.icons}
        >
          <DescriptionIcon />
          <div className={styles.trash}>
            <DeleteIcon />
          </div>
        </div>
      ) : (
        <input
          disabled={isDisabled !== id}
          value={value}
          onChange={({ target }) => setValue(target.value)}
          type="text"
          className={styles.input}
        />
      )}
    </div>
  );
};
