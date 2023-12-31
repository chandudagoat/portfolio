"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-full flex items-center justify-center">
        <Carousel className="w-full max-w-sm">
          <CarouselContent>
            <CarouselItem>
              <iframe
                className="rounded"
                frameBorder="0"
                height="462px"
                src="https://contra.com/s/OO7WLsOl-full-stack-web-development/embed?structure=vertical"
                title="View this service on Contra"
                width="384px"
              />
            </CarouselItem>
            <CarouselItem>
              <iframe
                className="rounded"
                frameBorder="0"
                height="462px"
                src="https://contra.com/s/O2gWQqmv-video-editing/embed?structure=vertical"
                title="View this service on Contra"
                width="384px"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <Footer />
    </div>
  );
}
