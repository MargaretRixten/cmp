import { MainLayout } from "../../layouts/main-layout/MainLayout.tsx";
import { useParams } from "react-router-dom";
import { projectsListMock } from "../../mock/projects.ts";
import styles from "./ProjectPage.module.scss";
import { TreeTable } from "../../components/tree-table/TreeTable.tsx";
import { test } from "../../mock/test.ts";
import { Table } from "../../components/table/Table.tsx";

export const ProjectPage = () => {
  const { projectId } = useParams();
  const { name } =
    projectsListMock.find(({ id }) => id.toString() === projectId) || {};
  return (
    <MainLayout>
      <div className={styles.top}>
        <h1 className={styles.title}>{name}</h1>
      </div>
      <Table treeTableItems={test} />
    </MainLayout>
  );
};
