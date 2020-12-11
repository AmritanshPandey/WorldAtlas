import Head from 'next/head'
import Layout from '../components/Layout/Layout'
import styles from "../styles/Home.module.css";
import SearchInput from "../components/SearchInput/SearchInput";
import CountriesTable from "../components/CountriesTable/CountriesTable";


export default function Home({ countries }) {

  return (
    <Layout>
      <div className={styles.counts}>Found {countries.length} Countries </div>
      <SearchInput placeholder="Search By Name, Region or Sub-region" />

      <CountriesTable countries={countries} />
    </Layout>
  );
  
}


export const getStaticProps = async () => {
  const res = await fetch("https://restcountries.eu/rest/v2/all");
  const countries = await res.json();


  return {
    props: {
      countries,
    },
  };
};
