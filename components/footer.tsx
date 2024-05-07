import Image from "next/image";
import logo from "@/app/logo.png";

export default function Footer() {
  return (
    <div className="w-full flex flex-col items-center justify-center mb-8">
      <Image src={logo} alt="logo" className="w-12" />
      <span>
        Copyright © {new Date().getFullYear()} hclanka. All rights reserved.
      </span>
    </div>
  );
}
