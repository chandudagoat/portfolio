import { Card } from "./ui/card";

interface Props {
  title: string;
  date: string;
  href: string;
}

export default function BlogPost(props: Props) {
  return (
    <a href={props.href}>
      <Card className="w-[500px] mb-2 p-4 flex items-center transition ease-in justify-between hover:bg-gray-900">
        <p>{props.title}</p>
        <p>{props.date}</p>
      </Card>
    </a>
  );
}
