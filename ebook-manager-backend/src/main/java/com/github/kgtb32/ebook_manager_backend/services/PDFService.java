package com.github.kgtb32.ebook_manager_backend.services;

import java.io.File;
import java.io.IOException;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.springframework.stereotype.Service;

import com.github.kgtb32.ebook_manager_backend.models.exceptions.PDFLoadException;
import com.github.kgtb32.ebook_manager_backend.models.in.PDFLoadMetadata;
import com.github.kgtb32.ebook_manager_backend.models.out.PDFInformation;

@Service
public class PDFService {
    public PDFInformation loadPDF(PDFLoadMetadata pdfMetadata){
        try{
            PDDocument doc = Loader.loadPDF(new File(pdfMetadata.fullPath()));
            return new PDFInformation(true, doc.getNumberOfPages());
        }catch(IOException e){
            throw new PDFLoadException(e.toString());
        }
    }
}
