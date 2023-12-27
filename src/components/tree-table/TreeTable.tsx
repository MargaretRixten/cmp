import { TreeTableItem } from "./tree-table-item/TreeTableItem.tsx";

interface ITreeTableProps {
  treeTableItems: any;
}

export const TreeTable = ({ treeTableItems }: ITreeTableProps) => {
  return (
    <table className="folders">
      <thead>
        <tr>
          <td>Уровень</td>
          <td>Наименование работ</td>
          <td>Основная з/п</td>
          <td>Оборудование</td>
          <td>Накладные расходы</td>
          <td>Сметная прибыль</td>
        </tr>
      </thead>
      <tbody>
        <TreeTableItem treeTableItems={treeTableItems} parentIndex={0} />
      </tbody>
    </table>
  );
};
