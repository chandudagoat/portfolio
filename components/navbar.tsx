import { ModeToggle } from "@/components/theme-toggle";
import { GithubIcon, TwitterIcon } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <nav className="w-full h-32 flex items-center justify-around">
      <div>
        <h1 className="font-semibold">hclanka</h1>
        <span>
          <a
            href="https://contra.com/hclankacreates"
            className="underline decoration"
          >
            freelancer
          </a>{" "}
          by day, founder by night.
        </span>
      </div>
      <div>
        <a href="https://github.com/chandudagoat" target="_blank">
          <Button variant="ghost">
            <GithubIcon />
          </Button>
        </a>
        <a href="https://twitter.com/hclanka" target="_blank">
          <Button variant="ghost">
            <TwitterIcon />
          </Button>
        </a>
        <ModeToggle />
      </div>
    </nav>
  );
}
