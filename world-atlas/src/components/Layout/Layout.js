import Head from "next/head";
import styles from "./Layout.module.css";



const Layout = ({children, title = "World Atlas"}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


     <header className={styles.header}>
      <span className={styles.logo}>WORLD ATLAS</span>
     </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
      Copyright &copy; Amritansh Pandey
      </footer>
    </div>
  );
};


export default Layout;