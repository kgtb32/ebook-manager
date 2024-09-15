import { Component, OnInit } from '@angular/core';
import { PdfService } from '../../services/pdf/pdf-service.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import Cropper from 'cropperjs';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {
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
        this.initCropper()
      }
    })
  }

  ngOnInit(): void {
  }

  initCropper() {
    const image = document.getElementById('image') as HTMLImageElement;
    const cropper = new Cropper(image, {
      aspectRatio: 16 / 9,
      autoCrop: true,
      crop(event) {
        console.log(event.detail.x);
        console.log(event.detail.y);
        console.log(event.detail.width);
        console.log(event.detail.height);
        console.log(event.detail.rotate);
        console.log(event.detail.scaleX);
        console.log(event.detail.scaleY);
      },
    }).enable()
    console.log(cropper)
    console.log(cropper.getCanvasData())
  }
}
