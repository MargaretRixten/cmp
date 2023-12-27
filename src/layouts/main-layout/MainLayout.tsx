import { PropsWithChildren } from "react";
import Header from "./components/header/Header.tsx";
import DeleteIcon from "@mui/icons-material/Delete";
import DescriptionIcon from "@mui/icons-material/Description";
import { Sidebar } from "./components/sidebar/Sidebar.tsx";
import styles from "./MainLayout.module.scss";

interface IMainLayoutProps extends PropsWithChildren {}

export const MainLayout = ({ children }: IMainLayoutProps) => {
  return (
    <>
      <Header />
      {/*<DeleteIcon />*/}
      {/*<DescriptionIcon />*/}
      <div className={styles.wrapper}>
        <Sidebar />
        <section className={styles.section}>{children}</section>
      </div>
    </>
  );
};
