import React from "react";
import Image from "next/image";

interface Props {
  id: string;
  name: string;
  post: string;
}

const Member: React.FC<Props> = ({ id, name, post }) => {
  return (
    <div className="text-black">
      <Image
        src={`/assets/team/knightfury_faces_${id}.svg`}
        alt={id}
        width="1366"
        height="900"
      />
      <div className="text-2xl xl:text-3xl">{name}</div>
      <div className="text-xl">{post}</div>
    </div>
  );
};

export default Member;
