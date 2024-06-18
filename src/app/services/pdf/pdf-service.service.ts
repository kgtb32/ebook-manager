import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PDFInformation } from '../../model/pdf-load';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor(private httpClient: HttpClient) { }

  loadPDFFile(pdfLoad: FormData): Observable<PDFInformation> {
    return this.httpClient.post<PDFInformation>("http://localhost:8080/pdf/load", pdfLoad)
  }
}
