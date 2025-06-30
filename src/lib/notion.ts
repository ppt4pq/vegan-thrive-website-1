import { NotionAPI } from 'notion-client';
import { Client } from '@notionhq/client';

const notion = new NotionAPI();

export async function getPage(pageId: string) {
    const recordMap = await notion.getPage(pageId);
    return recordMap;
}


const notionDB = new Client({ auth: process.env.NOTION_SECRET });

export async function getPublishedPosts() {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID!;
  const response = await notionDB.databases.query({
    database_id: databaseId,
    filter: {
      property: 'Published',
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  });

  return response.results.map((page: any) => ({
    id: page.id,
    title: page.properties.Title.title[0]?.plain_text || 'Untitled',
    slug: page.properties.Slug.rich_text[0]?.plain_text || '',
    date: page.properties.Date.date.start,
  }));
}
