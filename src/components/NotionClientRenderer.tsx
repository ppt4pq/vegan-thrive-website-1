'use client';

import { NotionRenderer } from 'react-notion-x';
import type { ExtendedRecordMap } from 'notion-types';
import 'react-notion-x/src/styles.css';

export default function NotionClientRenderer({recordMap}: {recordMap: ExtendedRecordMap}) {
    return (
        <NotionRenderer
            recordMap={recordMap}
            fullPage={true}
            darkMode={false}
        />
    );
}