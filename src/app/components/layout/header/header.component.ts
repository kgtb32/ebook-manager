import { Component } from '@angular/core';
import { PdfService } from '../../../services/pdf/pdf-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public pdfService: PdfService) { }

  onOpenFile(event: EventTarget | null) {
    const files: FileList | null = (event as HTMLInputElement)?.files
    if (files && files.length !== 0) {
      const formData = new FormData();
      formData.append("file", files[0])
      this.pdfService.loadPDFFile(formData).subscribe()
    }
  }

  loadFile() {
    document.getElementById("fileUpload")?.click()
  }

  next() {
    const nextPage = this.pdfService.currentPage + 1
    if (nextPage < this.pdfService.maxPages) {
      this.pdfService.currentPage = nextPage
      this.pdfService.paginationChanged.next(nextPage)
    }
  }

  previous() {
    const prevPage = this.pdfService.currentPage - 1
    if (prevPage >= 0) {
      this.pdfService.currentPage = prevPage
      this.pdfService.paginationChanged.next(prevPage)
    }
  }
}
