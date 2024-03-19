import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Blog() {
  return (
    <div>
      <Navbar />

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/FJAfVQ3BmsU?si=zLfBL35qX2t1gEsd"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>

      <h1 className="text-2xl text-center font-bold my-10">Posts</h1>
      <Footer />
    </div>
  );
}
