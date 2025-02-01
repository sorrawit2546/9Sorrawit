"use server"; // ✅ บังคับให้เป็น Server Function

import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getPosts() {
    const postsDir = path.join(process.cwd(), "posts");

    if (!fs.existsSync(postsDir)) {
        console.error("⚠️ Error: Directory does not exist:", postsDir);
        return [];
    }

    const files = fs.readdirSync(postsDir);
    
    return files.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const readFile = fs.readFileSync(path.join(postsDir, fileName), "utf-8");
        const { data: frontmatter } = matter(readFile);
        
        return { slug, frontmatter };
    });
}
