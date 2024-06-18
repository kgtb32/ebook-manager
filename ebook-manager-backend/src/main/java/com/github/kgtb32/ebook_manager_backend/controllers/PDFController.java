package com.github.kgtb32.ebook_manager_backend.controllers;

import org.springframework.http.ResponseEntity;
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
}
