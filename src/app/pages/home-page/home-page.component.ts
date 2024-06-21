import { Component } from '@angular/core';
import { PdfService } from '../../services/pdf/pdf-service.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  image?: SafeUrl

  constructor(private pdfService: PdfService, private sanitizer: DomSanitizer) {
    this.pdfService.documentChanged.subscribe({
      next: () => this.loadThumbnail()
    })
    this.pdfService.paginationChanged.subscribe({
      next: page => this.loadThumbnail(page)
    })
  }

  loadThumbnail(page: number = 0) {
    this.pdfService.loadPDFThumbnail(page).subscribe({
      next: imageBlob => {
        this.image = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(imageBlob));
      }
    })
  }
}
