import { TableHead } from "../table-head/TableHead.tsx";
import { TreeTableItem } from "../tree-table/tree-table-item/TreeTableItem.tsx";
import { tableTitles } from "../../mock/tableTitles.ts";
import styles from "./Table.module.scss";

interface ITableProps {
  treeTableItems: any;
}

export const Table = ({ treeTableItems }: ITableProps) => {
  return (
    <div className={styles.table}>
      <TableHead tableTitles={tableTitles} />
      <div className={styles.table_body}>
        <TreeTableItem treeTableItems={treeTableItems} parentIndex={0} />
      </div>
    </div>
  );
};
