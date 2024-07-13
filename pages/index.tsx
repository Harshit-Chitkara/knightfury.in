import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Masthead from "../components/masthead";
import AboutUs from "../components/aboutus";
import TeamHistory from "../components/team_history";
import Sponsors from "../components/sponsors";
import WhyWorkWithUs from "../components/whyworkwithus";
import ContactUs from "@/components/contactus";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Knight Fury | F1 in Schools</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Analytics />
      <SpeedInsights />
      <Masthead />
      <AboutUs />
      <TeamHistory />
      <Sponsors />
      <WhyWorkWithUs />
      <ContactUs />
      <Footer />
    </div>
  );
}
