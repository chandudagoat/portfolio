import Image from "next/image";
import { ModeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Button>Click me</Button>
      <ModeToggle />
    </div>
  );
}
