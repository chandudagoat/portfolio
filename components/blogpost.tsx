"use client";
import { Card } from "./ui/card";
import { useTheme } from "next-themes";

interface Props {
  title: string;
  date: string;
  href: string;
}

export default function BlogPost(props: Props) {
  const { theme } = useTheme();
  return (
    <a href={props.href}>
      <Card
        className={`w-[500px] mb-2 p-4 flex items-center transition ease-in justify-between hover:${
          theme == "dark" ? "bg-gray-900" : "bg-gray-200"
        }`}
      >
        <p>{props.title}</p>
        <p>{props.date}</p>
      </Card>
    </a>
  );
}
