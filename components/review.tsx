import React from "react";

interface Props {
  by: string;
  children: any;
}

const Review: React.FC<Props> = ({ children, by }) => (
  <div className="flex flex-col justify-center text-center px-5 md:px-10 lg:px-20">
    <div className="text-xl md:text-2xl lg:leading-[2.6rem] tracking-light">
      &ldquo;{children}&rdquo;
    </div>
    <div className="mt-6">&mdash; {by}</div>
  </div>
);

export default Review;
