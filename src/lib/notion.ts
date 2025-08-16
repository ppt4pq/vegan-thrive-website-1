import { NotionAPI } from 'notion-client';
import { Client } from '@notionhq/client';
import type { PageObjectResponse } from '@notionhq/client/build/src/api-endpoints';

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
    page_size: 10,
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

  return response.results.map((page) => {
    const typedPage = page as PageObjectResponse;

    return {
      id: typedPage.id,
      title:
        typedPage.properties.Title?.type === 'title'
          ? typedPage.properties.Title.title[0]?.plain_text || 'Untitled'
          : 'Untitled',
      slug:
        typedPage.properties.Slug?.type === 'rich_text'
          ? typedPage.properties.Slug.rich_text[0]?.plain_text || ''
          : '',
      date:
        typedPage.properties.Date?.type === 'date'
          ? typedPage.properties.Date.date?.start || ''
          : '',
    };
  });
}

export async function getStaticProps() {
  const posts = await getPublishedPosts();
  return {
    props: { posts },
    revalidate: 60,
  };
}
