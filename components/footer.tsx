import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => (
  <footer className=" flex gap-12 lg:gap-28 items-center justify-center bg-black text-white p-20">
    <a href="https://www.facebook.com/knightfuryindia/" target="_facebook">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <i className="fa fa-facebook-square fa-4x"></i>
    </a>
    <div className="wrapper">
      <a href="https://instagram.com/knight_fury_india" target="_instagram">
        <div className="bg">
          <div className="inner">
            <i className="fa fa-instagram fa-4x"></i>
          </div>
        </div>
      </a>
    </div>
    <a href="https://twitter.com/Team_KnightFury" target="_twitter">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <i className="fa fa-twitter fa-4x"></i>
    </a>
  </footer>
);

export default Footer;
