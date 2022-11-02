import React from "react";
import Member from "./member";

const AboutUs: React.FC = () => {
  return (
    <section className="flex flex-col bg-white py-20 text-3xl md:text-4xl">
      <div className="container mx-auto px-11 text-center text-black">
        <h2 className="text-4xl mb-8">Our Team</h2>
        <span className="text-2xl xl:text-3xl">
          &ldquo;Great things in business are never done by one person. They are
          done by a team of people&rdquo;
        </span>
        <div className="mt-14 grid grid-cols md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-20">
          <Member id="dhanika" name="Dhanika Bhayana" post="Team Manager" />
          <Member
            id="harshit"
            name="Harshit Chitkara"
            post="Sponsorship Manager"
          />
          <Member id="aarav" name="Aarav Khattar" post="Design Engineer" />
          <Member
            id="harshil"
            name="Harshil Chitkara"
            post="Graphic Designer"
          />
          <Member
            id="prabuddh"
            name="Prabuddh A. Sinha"
            post="Manufacturing Enginner"
          />
          <Member id="arjanvir" name="Arjanvir Singh" post="Resource Manager" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
