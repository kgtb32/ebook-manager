export interface PDFLoad {
    id: string
}

export interface PDFInformation {
    isValid: boolean,
    maxPages: number,
    id: string
}

export interface PDFLoadError {
    message: string
}