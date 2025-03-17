import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import matter from "gray-matter";
import { ArrowRight } from "lucide-react";

const contentDirectory = path.join(process.cwd(), "src", "content");


async function getPosts() {

  const files = await fs.readdir(contentDirectory);

  return Promise.all(
    files.map(async (fileName) => {
      const filePath = path.join(contentDirectory, fileName);
      const fileContent = await fs.readFile(filePath, "utf8");
      const { data } = matter(fileContent);

      return {
        slug: fileName.replace(".mdx", ""),
        title: data.title,
        date: data.date,
        description: data.description,
      };
    })
  );
}

export default async function BlogPage() {

  const posts = await getPosts();

  return (
    <section className="py-[12rem] min-h-[90vh]">
      <div className="max-w-2xl mx-auto px-6 sm:px-0">
        <div className="mb-8">
          <h1 className="text-3xl md:text-7xl h-[36px] md:h-[86px] inline-block overflow-hidden text-yellow-500"> 
            <span className="relative inline-block">C</span>
            <span className="relative inline-block">a</span>
            <span className="relative inline-block">s</span>
            <span className="relative inline-block">e</span>
            <span className="relative inline-block">&nbsp;</span>
            <span className="relative inline-block">S</span>
            <span className="relative inline-block">t</span>
            <span className="relative inline-block">u</span>
            <span className="relative inline-block">d</span>
            <span className="relative inline-block">i</span>
            <span className="relative inline-block">e</span>
            <span className="relative inline-block">s</span>
          </h1>
        </div>
        <ul className="">
          {posts.map(({ slug, title, date, description }) => (
            <li key={slug} className="mb-8">
              <Link href={`/case-studies/${slug}`} className="flex flex-row gap-2 hover:gap-4 transition-all duration-300 items-center text-black font-medium">
                <h2 className="text-2xl">{title}</h2>
                <ArrowRight />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
