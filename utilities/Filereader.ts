import XLSX from 'xlsx'

export function readfile(filepath:any, sheetname:any) {
    const workbook = XLSX.readFile(filepath)
    const sheet = workbook.Sheets[sheetname]
    const data = XLSX.utils.sheet_to_json(sheet)
    return data
}

