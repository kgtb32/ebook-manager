package com.github.kgtb32.ebook_manager_backend.controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.github.kgtb32.ebook_manager_backend.models.in.PDFLoadMetadata;
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
    public ResponseEntity<PDFInformation> loadPDF(@RequestBody PDFLoadMetadata pdfMetadata){
        return ResponseEntity.ok(pdfService.loadPDF(pdfMetadata));
    }
}
