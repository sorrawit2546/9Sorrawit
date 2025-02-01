import "@/styles/globals.css";
import fs from "fs";
import MarkdownIt from 'markdown-it';
import markdownItAnchor from 'markdown-it-anchor';
import markdownItToc from 'markdown-it-toc-done-right';
import matter from "gray-matter";
import Header from "@/components/header";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return matterResult;
}

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    const socialImage = post.data.socialImage;

    // สร้าง markdown-it instance พร้อม plugins
    const markdown = new MarkdownIt({
        html: true,
        typographer: true
    })
    .use(markdownItAnchor, {
        permalink: true,
        permalinkClass: 'header-anchor',
        permalinkSymbol: '#',
        level: [2, 3] // จะสร้าง anchor สำหรับ h2 และ h3 เท่านั้น
    })
    .use(markdownItToc, {
        level: [2, 3],
        containerClass: 'table-of-contents',
        listType: 'ul'
    });

    // เพิ่ม [[toc]] ไว้ที่จุดเริ่มต้นของเนื้อหา
    const contentWithToc = '[[toc]]\n\n' + post.content;

    return (
        <div className=" dark:bg-black dark:text-white h-full">
            <Header />
            <div className="font-manrope flex justify-center">
                <article className="prose lg:prose-xl prose-slate dark:prose-invert max-w-4xl px-4">
                    <h1 className="bg-gradient-to-r from-[#ff00bf] to-[#00eeff] inline-block text-transparent bg-clip-text">
                        {post.data.title}
                    </h1>
                    <div 
                        dangerouslySetInnerHTML={{ __html: markdown.render(contentWithToc) }}
                        className="markdown-content"
                    />
                </article>
            </div>
        </div>
    )
}

export default PostPage;