import type { NextPage } from "next";
import Head from "next/head";
import useSWR from "swr";
import AboutUs from "../components/team";
import ContactUs from "../components/contactus";
import Masthead from "../components/masthead";
import Skills from "../components/team_history";
import Sponsors from "../components/sponsors";
import Works from "../components/team_members";
import Footer from "../components/footer";

const fetcher = (input: any, init?: any) =>
  fetch(input, init).then((res) => res.json());

const Home: NextPage = () => {
  const { data } = useSWR("/api/stats", fetcher);
  return (
    <div>
      <Head>
        <title>Knight Fury | F1 in Schools 2022</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Masthead />
      <AboutUs />
      <Skills />
      <Works />
      <Sponsors />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
