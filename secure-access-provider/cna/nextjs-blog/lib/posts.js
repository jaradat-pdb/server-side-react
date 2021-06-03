import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'posts');

export function getAllPostIds() {
    const fileNames = fs.readdirSync(postsDir);

    /*
        Returning an arrary with the following structure:
        [
            {
                params: {
                    id: 'ssg-ssr'
                }
            },
            {
                params: {
                    id: 'pre-rendering'
                }
            }
        ]
    */
    return fileNames.map(
        fileName => {
            return {
                params: {
                    id: fileName.replace(/\.md$/, '')
                }
            };
        }
    );
}

export function getSortedPostsData() {
    // Get file names under ./posts dir
    const fileNames = fs.readdirSync(postsDir);
    const allPostsData = fileNames.map(
        fileName => {
            // Remove ".md" from file name to get id
            const id = fileName.replace(/\.md$/, '');

            // Read markdown file as string
            const fullPath = path.join(postsDir, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents);

            // Combine the data with the id
            return { id, ...matterResult.data };
        }
    );

    // Sort posts by date
    return allPostsData.sort(
        (a, b) => {
            if (a.date < b.date) {
                return 1;
            }
            return -1;
        }
    );
}

export async function getPostData(id) {
    const fullPath = path.join(postsDir, `${id}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    
    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use remark to convert markdown into HTML string
    const contentHtml = (await remark().use(html)
        .process(matterResult.content)).toString();
    
    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data
    };
}