import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, tap } from 'rxjs';
import { PDFInformation, PDFLoadError } from '../../model/pdf-load';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  currentPage: number = 0
  maxPages: number = 0

  documentId?: string
  error?: PDFLoadError

  documentChanged: ReplaySubject<string> = new ReplaySubject()
  paginationChanged: ReplaySubject<number> = new ReplaySubject()

  constructor(private httpClient: HttpClient) { }

  loadPDFFile(pdfLoad: FormData): Observable<PDFInformation> {
    return this.httpClient.post<PDFInformation>("http://localhost:8080/pdf/load", pdfLoad)
      .pipe(
        tap({
          next: value => {
            this.documentId = value.id
            this.currentPage = 0
            this.maxPages = value.maxPages
            delete this.error
            this.documentChanged.next(value.id)
          },
          error: (error: PDFLoadError) => {
            this.error = error
            delete this.documentId
          }
        })
      )
  }

  loadPDFThumbnail(page: number) {
    return this.httpClient.get(`http://localhost:8080/pdf/thumbnail?documentId=${this.documentId}&page=${page}`, {
      responseType: 'blob'
    })
  }
}
