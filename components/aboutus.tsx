import React from "react";
import Member from "./member";
import Link from "next/link";
import Image from "next/image";

const AboutUs: React.FC = () => {
  return (
    <section className="text-black flex flex-col bg-white py-20 text-3xl md:text-4xl">
      <div className="flex justify-center items-center mb-4">
        <a href="https://f1inschools.com" target="_f1inschools">
          <Image
            src="/assets/f1inschools_logo.svg"
            alt="F1 in Schools"
            width={350}
            height={60}
          />
        </a>
      </div>
      <div className="container mx-auto px-11">
        <p className="leading-tight max-w-5xl mx-auto text-3xl tracking-tight">
          <strong>
            <Link legacyBehavior href="https://f1inschools.com">
              <a
                target="_blank"
                className="underline underline-offset-4 decoration-2"
              >
                F1 in Schools
              </a>
            </Link>{" "}
            is the world&apos;s largest STEM (Science, Technology, Engineering &
            Mathematics) Competition
          </strong>{" "}
          for school children between the age of 9 and 19 wherein groups of 3-6
          students are supposed to design, manufacture a miniature car out of
          the official F1 Model Block using CAD (Computer-Aided Design) / CAM
          (Computer-Aided Manufacturing) design tools and 3D-Printing.
        </p>
      </div>
      <div className="container mx-auto px-11 text-center mt-16">
        <h2 className="text-4xl mb-8 font-extrabold">Our Team</h2>
        <span className="text-2xl xl:text-3xl">
          &ldquo;Great things in business are never done by one person. They are
          done by a team of people&rdquo;<strong> ~ Steve Jobs </strong>
        </span>
        <div className="mt-14 grid grid-cols md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-20">
          <Member id="kshitij" name="Kshitij Jadwani" post="Team Manager" />
          <Member id="aarav" name="Aarav Khattar" post="Design Engineer" />
          <Member
            id="harshit"
            name="Harshit Chitkara"
            post="Sponsorship Manager"
          />
          <Member
            id="harshil"
            name="Harshil Chitkara"
            post="Graphic Designer"
          />
          <Member
            id="pulkit"
            name="Pulkit Malhotra"
            post="Manufacturing Enginner"
          />
          <Member id="arjanvir" name="Arjanvir Singh" post="Resource Manager" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
