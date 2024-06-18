package com.github.kgtb32.ebook_manager_backend.services;

import java.io.File;
import java.util.Optional;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.github.kgtb32.ebook_manager_backend.models.exceptions.PDFLoadException;
import com.github.kgtb32.ebook_manager_backend.models.out.PDFInformation;

@Service
public class PDFService {
    private final FileUploadService fileUploadService;

    PDFService(FileUploadService fileUploadServiceService){
        this.fileUploadService = fileUploadServiceService;
    }

    public PDFInformation loadPDF(MultipartFile multipartFile){
        if (
            multipartFile.getOriginalFilename() == null ||
            !multipartFile.getOriginalFilename().toLowerCase().endsWith(".pdf")
        ){
            throw new PDFLoadException("ebook.backend.error.pdf.invalid_file_type");
        }
        try{
            Optional<File> uploadedFile = fileUploadService.saveAttachment(multipartFile);
            if(uploadedFile.isEmpty()){
                throw new PDFLoadException("ebook.backend.error.pdf.file_upload_error");
            }
            PDDocument doc = Loader.loadPDF(new File(uploadedFile.get().getAbsolutePath()));
            return new PDFInformation(uploadedFile.get().getName(),true, doc.getNumberOfPages());
        }catch(Exception e){
            throw new PDFLoadException("ebook.backend.error.pdf.file_err");
        }
    }
}
