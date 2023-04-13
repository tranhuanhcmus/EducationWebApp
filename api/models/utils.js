'use strict';
import fs from 'fs-extra';
import {join} from 'path';

const loadSqlQueries = async (folderName) => {
    const filePath = join(process.cwd(), 'models', folderName);
    const files = await fs.readdir(filePath);
    const sqlFiles = files.filter(f => f.endsWith('.sql'));
    const queries = {};
    for (const sqlfile of sqlFiles) {
        const query = fs.readFileSync(join(filePath,  sqlfile), {encoding: "UTF-8"});
        queries[sqlfile.replace(".sql", "")] = query;
    }
    return queries;
}

export default loadSqlQueries;