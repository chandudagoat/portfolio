"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="my-10 flex flex-col items-center justify-center">
        <h1 className="text-center font-semibold">projects</h1>
        <div className="mb-10">
          <Projects />
        </div>

        <h1 className="text-center font-semibold">playlists</h1>
        <div className="w-fit my-10 grid grid-cols-2 gap-4">
          <iframe
            className="rounded-[12px]"
            src="https://open.spotify.com/embed/playlist/6NQqHRDO1VkJpCPdnbsnSk?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <iframe
            className="rounded-[12px]"
            src="https://open.spotify.com/embed/playlist/1v88zYLI67z9C03NJ1qSEz?utm_source=generator&theme=0"
            width="100%"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}
