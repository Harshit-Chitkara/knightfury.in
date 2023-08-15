import Link from "next/link";
import React from "react";

interface LinkProps {
  href: string;
  children: any;
}

const SocialLink: React.FC<LinkProps> = ({ href, children }) => (
  <Link href={href}>
    <a
      target="_blank"
      rel="noreferrer"
      className="underline underline-offset-8 decoration-1"
    >
      {children}
    </a>
  </Link>
);

const Footer: React.FC = () => (
  <footer className="flex gap-14 items-center justify-center bg-black text-white p-12">
    <div className="wrapper">
      <a href="https://instagram.com/knightfury.in" target="_instagram">
        <div className="bg">
          <div className="inner">
            <i className="fa fa-instagram fa-4x"></i>
          </div>
        </div>
      </a>
    </div>
    <a href="https://twitter.com/knightfury_in" target="_twitter">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <i className="fa fa-twitter fa-4x"></i>
    </a>
    <a href="https://www.facebook.com/knightfuryindia/" target="_facebook">
      <link
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        rel="stylesheet"
      />
      <i className="fa fa-facebook-square fa-4x"></i>
    </a>
  </footer>
);
export default Footer;
