import xlsx from 'xlsx'
import * as path from 'path'

export function readExcelfiles(filename: string, sheet: string) {

    let filepath = path.resolve(filename)

    const workbook = xlsx.readFile(filepath)
    const sheetname = workbook.Sheets[sheet]
    const data = xlsx.utils.sheet_to_json(sheetname)

    return data

}