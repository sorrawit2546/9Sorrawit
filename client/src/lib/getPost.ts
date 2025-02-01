// app/lib/getPost.ts
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export const getPostMetadata = () => {
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