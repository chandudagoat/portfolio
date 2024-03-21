import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import portrait from "@/app/portrait.png";
import tsmake from "@/app/TSMake.png";

import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiTailwindcss, SiTypescript } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

export default function Projects() {
  return (
    <div className="w-full flex items-center justify-center my-10">
      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          <CarouselItem>
            <Card>
              <CardHeader>
                <CardTitle>Portrait</CardTitle>
                <CardDescription>link in bio with islands</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://github.com/chandudagoat/portrait"
                  target="_blank"
                >
                  <img src={portrait.src} className="w-96" alt="portrait" />
                </a>
              </CardContent>
              <CardFooter className="flex flex-col items-start justify-center">
                <p className="text-gray-400 mb-2 text-sm">&quot;stack&quot;</p>
                <div className="icons flex">
                  <TbBrandNextjs className="text-3xl mr-2" />
                  <SiTailwindcss className="text-3xl mr-2" />
                  <SiMongodb className="text-3xl mr-2" />
                  <FaGolang className="text-4xl mr-4" />
                  <SiTypescript className="text-3xl" />
                </div>
              </CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardHeader>
                <CardTitle>tsmake</CardTitle>
                <CardDescription>
                  ts and js templates in a jiffy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href="https://github.com/chandudagoat/tsmake"
                  target="_blank"
                >
                  <img src={tsmake.src} className="w-96" alt="portrait" />
                </a>
              </CardContent>
              <CardFooter className="flex flex-col items-start justify-center">
                <p className="text-gray-400 mb-2 text-sm">&quot;stack&quot;</p>
                <div className="icons flex">
                  <SiTypescript className="text-3xl" />
                </div>
              </CardFooter>
            </Card>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
