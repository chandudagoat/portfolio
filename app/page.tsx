"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="my-10 flex items-center justify-center">
        <a href="/blog">
          <h1 className="font-semibold underline decoration">blog posts</h1>
        </a>
      </div>
      <Footer />
    </div>
  );
}
