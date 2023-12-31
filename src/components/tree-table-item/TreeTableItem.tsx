import { Fragment } from "react";
import { TableRow } from "../table-row/TableRow.tsx";
import { IOutlay } from "../../types/interfaces/entities/outlay.ts";
import cn from "classnames";

interface ITreeTableItemProps {
  tableRows: IOutlay[] | null;
  parentIndex: number;
  className?: string;
}

export const TreeTableItem = ({ tableRows, parentIndex = 0, className }: ITreeTableItemProps) => {
  return (
    <>
      {tableRows?.map((item) => (
        <Fragment key={item.id}>
          <TableRow
            className={cn(className, { "not-parent": !item.child.length })}
            parentIndex={parentIndex}
            row={item}
          />
          {!!item.child.length && (
            <TreeTableItem tableRows={item.child} className="child" parentIndex={parentIndex + 1} />
          )}
        </Fragment>
      ))}
    </>
  );
};
