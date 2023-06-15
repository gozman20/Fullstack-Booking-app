"use client";
import React from "react";
import Image from "next/image";

interface AvatarProps {
  src: string | null | undefined;
}

const Avatar: React.FC<AvatarProps> = ({ src }) => {
  return (
    <div>
      <Image
        src={src || "/images/placeholder.jpg"}
        alt="Avatar"
        height="30"
        width="30"
        className="rounded-full"
      />
    </div>
  );
};

export default Avatar;
