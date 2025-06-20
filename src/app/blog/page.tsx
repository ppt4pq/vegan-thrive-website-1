import { getPage } from '../../lib/notion';
import 'react-notion-x/src/styles.css';
import NotionClientRenderer from '@/components/NotionClientRenderer';

const NOTION_PAGE_ID = process.env.NOTION_PAGE_ID!;

/*

export async function getStaticProps() {
  const NOTION_PAGE_ID = process.env.NOTION_PAGE_ID!;
  const recordMap = await getPage(NOTION_PAGE_ID);
  return { props: {recordMap}, revalidate: 60};
}

*/

export default async function BlogPage() {
  const recordMap = await getPage(NOTION_PAGE_ID);

    return (
      <main className="max-w-3xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Blog</h1>
        <NotionClientRenderer recordMap={recordMap} />
      </main>

    );
}