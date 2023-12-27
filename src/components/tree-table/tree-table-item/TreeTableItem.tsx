import { Fragment } from "react";
import { TableRow } from "../../table-row/TableRow.tsx";
import { TableCell } from "../../table-cell/TableCell.tsx";

interface ITreeTableItemProps {
  treeTableItems: any;
  parentIndex: number;
}

export const TreeTableItem = ({
  treeTableItems,
  parentIndex = 0,
}: ITreeTableItemProps) => {
  return (
    <>
      {treeTableItems.map(
        ({
          id,
          salary,
          rowName,
          child,
          equipmentCosts,
          estimatedProfit,
          mainCosts,
        }) => (
          <Fragment key={id}>
            <TableRow rowId={id}>
              {Object.entries({
                id,
                rowName,
                salary,
                equipmentCosts,
                estimatedProfit,
                mainCosts,
              }).map(([key, value]) => {
                return (
                  <TableCell
                    id={id}
                    parentIndex={parentIndex}
                    level={key === "id"}
                    key={key}
                    item={value}
                  />
                );
              })}
            </TableRow>
            {!!child.length && (
              <TreeTableItem
                treeTableItems={child}
                parentIndex={parentIndex + 1}
              />
            )}
          </Fragment>
        ),
      )}
    </>
  );
};
