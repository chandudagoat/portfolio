"use client";

import { ModeToggle } from "@/components/theme-toggle";
import { FaTwitter, FaGithub, FaDiscord } from "react-icons/fa";
import { Button } from "./ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function Navbar() {
  return (
    <nav className="w-full h-32 flex items-center justify-center">
      <div className="mr-64">
        <h1 className="font-semibold">hclanka</h1>
        <span>
          <a
            href="https://contra.com/hclankacreates"
            className="underline decoration"
            target="_blank"
          >
            freelancer
          </a>{" "}
          by day, founder by night.
        </span>
      </div>
      <div className="">
        <a href="https://github.com/chandudagoat" target="_blank">
          <Button variant="ghost">
            <FaGithub className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </a>

        <a href="https://twitter.com/hclanka" target="_blank">
          <Button variant="ghost">
            <FaTwitter className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </a>

        <AlertDialog>
          <AlertDialogTrigger>
            <Button
              variant="ghost"
              onClick={() => navigator.clipboard.writeText("urbrownkid#0594")}
            >
              <FaDiscord className="h-[1.2rem] w-[1.2rem]" />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Copied to clipboard!</AlertDialogTitle>
              <AlertDialogDescription>
                Copied hclanka's discord username and id. Please do inquire him
                questions via discord if needed.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction>Ok</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <ModeToggle />
      </div>
    </nav>
  );
}
