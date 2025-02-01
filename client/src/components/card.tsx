
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { badgeVariants } from "@/components/ui/badge"


const getPostMetadata = () => {
    const folder = "posts/";
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    return markdownPosts.map((fileName) => {
        const filePath = path.join(folder, fileName);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data: frontmatter } = matter(fileContent);
        const slug = fileName.replace(".md", "");

        return { slug, frontmatter };
    });
};

export default function Card() {
    const posts = getPostMetadata();

    return (
        <div className="grid grid-cols-3 space-x-5 mt-5 mb-5 dark:text-black">
            {posts.map(({ slug, frontmatter }) => (
                <a href={`/posts/${slug}`}>
                    <div
                        key={slug}
                        className="flex flex-col drop-shadow-2xl max-w-full xl:w-80 xl:h-[400px] rounded-[30px] bg-white items-center hover:transition duration-500 hover:scale-110"
                    >
                        <div className="flex justify-center items-center mt-6 ml-6 mr-6 mb-6 w-72 h-44 rounded-[15px]">
                            <img
                                className="rounded-[15px] w-72 h-44"
                                src={`/${frontmatter.socialImage}`}
                                alt={frontmatter.title}
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex gap-2 mb-3 ml-3">
                                {frontmatter.tags.map((tag: string, index: number) => (
                                    <span key={index} className={badgeVariants({ variant: "default" })}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="text-2xl pl-4 pr-4 h-15 ">
                                {frontmatter.title}
                            </div>
                            <div className="text-xl pl-4 pr-4 ">
                                {frontmatter.metaDesc}
                            </div>


                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}
