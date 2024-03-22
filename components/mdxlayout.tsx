import Navbar from "./navbar";

interface Props {
  title: string;
  subtitle: string;
  children: any;
}

export default function MdxLayout(props: Props) {
  // Create any shared layout or styles here
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-5xl p-4">{props.title}</h1>
        <p className="text-gray-400 p-4">{props.subtitle}</p>
        <p className="w-1/2">{props.children}</p>
      </div>
    </div>
  );
}
