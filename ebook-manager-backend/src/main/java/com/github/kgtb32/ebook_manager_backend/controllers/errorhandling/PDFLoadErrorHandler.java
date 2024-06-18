package com.github.kgtb32.ebook_manager_backend.controllers.errorhandling;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.github.kgtb32.ebook_manager_backend.models.exceptions.PDFLoadException;
import com.github.kgtb32.ebook_manager_backend.models.out.PDFLoadFailed;

@ControllerAdvice
public class PDFLoadErrorHandler {
    
    @ExceptionHandler(PDFLoadException.class)
    public ResponseEntity<PDFLoadFailed> pdfLoadFailed(PDFLoadException exception){
        return ResponseEntity.badRequest().body(new PDFLoadFailed(exception.getMessage()));
    }
}
