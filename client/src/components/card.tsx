
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
        <div className="grid xl:grid-cols-3 lg:grid-cols-3 xl:gap-5 xl:mt-5 xl:mb-5 lg:gap-5 lg:mt-5 lg:mb-5 mb:grid-cols-1 mb:gap-y-10 dark:text-black">
            {posts.map(({ slug, frontmatter }) => (
                <a href={`/posts/${slug}`}>
                    <div
                        key={slug}
                        className="flex flex-col drop-shadow-2xl max-w-full xl:w-80 xl:h-[400px] md:w-72 md:h-[350px] mb:w-60  rounded-[30px] bg-white items-center hover:transition duration-500 hover:scale-110"
                    >
                        <div className="flex justify-center items-center w-full h-48 sm:w-full mb-5 md:w-full lg:w-full xl:w-full rounded-[15px]">
                            <img
                                className="rounded-t-[15px] rounded-b-none lg:w-full lg:h-full md:w-full md:h-full sm:w-full sm:h-full"
                                src={`/${frontmatter.socialImage}`}
                                alt={frontmatter.title}
                            />
                        </div>
                        <div className="flex flex-col mb:mb-3">
                            <div className="flex xl:gap-2 xl:mb-3 xl:ml-3 lg:gap-2 lg:mb-3 lg:ml-3 mb:gap-3 mb:mt-3 mb:mb-2 mb:ml-3">
                                {frontmatter.tags.map((tag: string, index: number) => (
                                    <span key={index} className={badgeVariants({ variant: "default" })}>
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="text-sm pl-3 pr-3">
                                <div className={badgeVariants({ variant: "default" })}>
                                    📅{frontmatter.date}
                                </div>
                            </div>
                            <div className="xl:text-2xl lg:text-2xl pl-3 pr-3 h-15 pt-3 mb:text-xl">
                                {frontmatter.title}
                            </div>
                        </div>
                    </div>
                </a>
            ))}
        </div>
    );
}
