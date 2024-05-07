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

import chelr from "@/app/chelr.png";
import looksmaxx from "@/app/looksmaxx.png";
import foodsense from "@/app/foodsense.png";

import { TbBrandNextjs } from "react-icons/tb";
import {
  SiTailwindcss,
  SiTypescript,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";

export default function Projects() {
  return (
    <div className="w-full flex items-center justify-center my-10">
      <Carousel className="w-full max-w-sm">
        <CarouselContent>
          <CarouselItem>
            <Card>
              <CardHeader>
                <CardTitle>Chelr Pay</CardTitle>
                <CardDescription>
                  payment integration with crypto into ur dapps
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://chelr.vercel.app" target="_blank">
                  <img src={chelr.src} className="w-96" alt="chelr" />
                </a>
              </CardContent>
              <CardFooter className="flex flex-col items-start justify-center">
                <p className="text-gray-400 mb-2 text-sm">&quot;stack&quot;</p>
                <div className="icons flex">
                  <TbBrandNextjs className="text-3xl mr-2" />
                  <SiTailwindcss className="text-3xl mr-2" />
                  <SiPostgresql className="text-3xl mr-2" />
                  <SiTypescript className="text-3xl" />
                </div>
              </CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardHeader>
                <CardTitle>Looksmaxx.me</CardTitle>
                <CardDescription>
                  best looksmaxxing newsletter on the planet.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://www.looksmaxx.me" target="_blank">
                  <img src={looksmaxx.src} className="w-96" alt="looksmaxx" />
                </a>
              </CardContent>
              <CardFooter className="flex flex-col items-start justify-center">
                <p className="text-gray-400 mb-2 text-sm">&quot;stack&quot;</p>
                <div className="icons flex">
                  <TbBrandNextjs className="text-3xl mr-2" />
                  <SiTailwindcss className="text-3xl mr-2" />
                  <SiMongodb className="text-3xl mr-2" />
                  <SiTypescript className="text-3xl" />
                </div>
              </CardFooter>
            </Card>
          </CarouselItem>
          <CarouselItem>
            <Card>
              <CardHeader>
                <CardTitle>Food Sense (Non profit)</CardTitle>
                <CardDescription>
                  Educating and Empowering for a Healthier Tomorrow!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <a href="https://foodsense.vercel.app" target="_blank">
                  <img src={foodsense.src} className="w-96" alt="foodsense" />
                </a>
              </CardContent>
              <CardFooter className="flex flex-col items-start justify-center">
                <p className="text-gray-400 mb-2 text-sm">&quot;stack&quot;</p>
                <div className="icons flex">
                  <TbBrandNextjs className="text-3xl mr-2" />
                  <SiTailwindcss className="text-3xl mr-2" />
                  <SiMongodb className="text-3xl mr-2" />
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
