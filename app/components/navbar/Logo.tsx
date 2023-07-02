"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div onClick={() => router.push("/")}>
      <Image
        alt="logo"
        src="/images/logo.jpg"
        height="100"
        width="100"
        className="hidden md:block cursor-pointer"
      />
    </div>
  );
};

export default Logo;
