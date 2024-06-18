import { Component } from '@angular/core';
import { PdfService } from '../../../services/pdf/pdf-service.service';
import { PDFLoadError } from '../../../model/pdf-load';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private pdfService: PdfService) { }

  onOpenFile(event: EventTarget | null) {
    const files: FileList | null = (event as HTMLInputElement)?.files
    if (files && files.length !== 0) {
      const formData = new FormData();
      formData.append("file", files[0])
      this.pdfService.loadPDFFile(formData).subscribe({
        next: value => alert(value.maxPages + ":" + value.id),
        error: (error: PDFLoadError) => alert(error.message)
      })
    }
  }

  loadFile() {
    document.getElementById("fileUpload")?.click()
  }
}
