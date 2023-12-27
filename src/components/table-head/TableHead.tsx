import styles from "./TableHead.module.scss";

interface ITableHeadProps {
  tableTitles: any;
}

export const TableHead = ({ tableTitles }: ITableHeadProps) => {
  return (
    <div className={styles.table_head}>
      {tableTitles.map((item) => (
        <div key={item.id} className={styles.head_item}>
          {item.name}
        </div>
      ))}
    </div>
  );
};
