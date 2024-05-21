import Image from "next/image";
import Hero from "./components/Hero";
import BlogPost from "./blog/page";
import BlogList from "./components/BlogList";

export default function Home() {
  return (
    <main>
      <Hero />
      <BlogPost />
      {/* <BlogList/> */}
    </main>
  );
}
