"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Projects from "@/components/projects";
import BlogPost from "@/components/blogpost";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="my-10 flex flex-col items-center justify-center">
        <a href="/blog">
          <h1 className="font-semibold underline decoration mb-4">
            blog posts
          </h1>
        </a>
        <div className="mb-8">
          <BlogPost
            href="/blog/cursorvsvscode"
            title="Cursor vs Vscode"
            date="22nd March, 2024"
          />
        </div>

        <h1 className="text-center font-semibold">&quot;projects&quot;</h1>
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
