"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Projects from "@/components/projects";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="my-10 flex flex-col items-center justify-center">
        <a href="/blog">
          <h1 className="font-semibold underline decoration mb-2">
            blog posts
          </h1>
        </a>

        <h1 className="text-center font-semibold">&quot;projects&quot;</h1>
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
