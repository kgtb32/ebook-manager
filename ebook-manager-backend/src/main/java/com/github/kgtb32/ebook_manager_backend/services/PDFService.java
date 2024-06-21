package com.github.kgtb32.ebook_manager_backend.services;

import java.awt.image.BufferedImage;
import java.io.File;
import java.util.Optional;

import org.apache.pdfbox.Loader;
import org.apache.pdfbox.pdmodel.PDDocument;
import org.apache.pdfbox.rendering.PDFRenderer;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.github.kgtb32.ebook_manager_backend.models.exceptions.PDFLoadException;
import com.github.kgtb32.ebook_manager_backend.models.out.PDFInformation;

@Service
public class PDFService {
    private static final String PATH_DELIMITER = "/";
    private static final String PDF_EXTENSION = ".pdf";

    private final FileUploadService fileUploadService;

    PDFService(FileUploadService fileUploadServiceService){
        this.fileUploadService = fileUploadServiceService;
    }

    public PDFInformation loadPDF(MultipartFile multipartFile){
        if (
            multipartFile.getOriginalFilename() == null ||
            !multipartFile.getOriginalFilename().toLowerCase().endsWith(PDF_EXTENSION)//NOSONAR
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

    public BufferedImage pdfPageThumbnail(String documentId, int page){
        String temporaryFolder = System.getProperty("java.io.tmpdir");
        File file = new File(temporaryFolder + PATH_DELIMITER + documentId);
        try {
            if(!file.exists()){
                throw new PDFLoadException("ebook.backend.error.pdf.file_not_exist");
            }
            PDDocument doc = Loader.loadPDF(file);
            PDFRenderer renderer = new PDFRenderer(doc);
            return renderer.renderImageWithDPI(page,70);
        } catch (Exception e) {
            throw new PDFLoadException("ebook.backend.error.pdf.file_err");
        }
    }
}
