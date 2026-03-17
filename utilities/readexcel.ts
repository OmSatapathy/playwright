import * as XLSX from 'xlsx';
import * as path from 'path';
import * as fs from 'fs';

export function readExcelfile(filepath: string, sheetname: string) {

    // Try multiple resolution strategies
    let resolvedPath = path.resolve(filepath);

    // If that doesn't exist and path is relative, try from project root
    if (!fs.existsSync(resolvedPath) && !path.isAbsolute(filepath)) {
        resolvedPath = path.resolve(process.cwd(), filepath);
    }

    const workbook = XLSX.readFile(resolvedPath)
    const sheet = workbook.Sheets[sheetname]
    const data = XLSX.utils.sheet_to_json(sheet)

    return data;

}

