package com.github.kgtb32.ebook_manager_backend.controllers;

import java.awt.image.BufferedImage;

import org.springframework.context.annotation.Bean;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.BufferedImageHttpMessageConverter;
import org.springframework.http.converter.HttpMessageConverter;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.github.kgtb32.ebook_manager_backend.models.out.PDFInformation;
import com.github.kgtb32.ebook_manager_backend.services.PDFService;

@RequestMapping("/pdf")
@RestController
public class PDFController {

    private final PDFService pdfService;

    public PDFController(PDFService pdfService){
        this.pdfService = pdfService;
    }

    @PostMapping("/load")
    public ResponseEntity<PDFInformation> loadPDF(@RequestParam("file") MultipartFile file){
        return ResponseEntity.ok(pdfService.loadPDF(file));
    }

    @GetMapping(
        value = "/thumbnail",
        produces = MediaType.IMAGE_JPEG_VALUE
    )
    public ResponseEntity<BufferedImage> getPageThumbnail(
        @RequestParam("documentId") String documentId,
        @RequestParam("page") int page
    ){
        return ResponseEntity.ok(pdfService.pdfPageThumbnail(documentId, page));
    }

    @Bean
    public HttpMessageConverter<BufferedImage> bufferedImageHttpMessageConverter() {
        return new BufferedImageHttpMessageConverter();
    }

}
