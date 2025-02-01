import "@/styles/globals.css";
import fs from "fs";
import md from 'markdown-it';
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import Header from "@/components/header";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf8')
    const matterResult = matter(content)
    return matterResult;
}
const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    const socialImage = post.data.socialImage;
    console.log(socialImage)

    return (
        <div className="dark:bg-black dark:text-white">
            <Header />
            <div className="font-manrope flex justify-center">
            <article className="prose lg:prose-xl">
                <h1>{post.data.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: md().render(post.content) }} className=""></div>
            </article>
        </div>
        </div>
    )
}
export default PostPage;