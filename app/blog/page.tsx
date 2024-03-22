import BlogPost from "@/components/blogpost";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Blog() {
  return (
    <div className="flex flex-col items-center">
      <Navbar />

      <h1 className="text-2xl text-center font-bold my-10">Posts</h1>

      <div className="mb-4">
        <BlogPost
          href="/cursorvsvscode"
          title="Cursor vs Vscode"
          date="22nd March, 2024"
        />
      </div>

      <Footer />
    </div>
  );
}
