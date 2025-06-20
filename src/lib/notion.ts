import { NotionAPI } from 'notion-client';

const notion = new NotionAPI();

export async function getPage(pageId: string) {
    const recordMap = await notion.getPage(pageId);
    return recordMap;
}