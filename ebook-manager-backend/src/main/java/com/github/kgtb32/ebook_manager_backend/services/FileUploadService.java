package com.github.kgtb32.ebook_manager_backend.services;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.util.Optional;
import java.util.UUID;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
public class FileUploadService {
    private static final String PATH_SEPARATOR = "/";

    public Optional<File> saveAttachment(MultipartFile file) {
        String uuid = UUID.randomUUID().toString();
        String temporaryFolder = System.getProperty("java.io.tmpdir");
        String finalUrl = temporaryFolder + PATH_SEPARATOR + uuid + ".pdf";
        File currentFile = new File(finalUrl);
        try(OutputStream os = new FileOutputStream(finalUrl)){
            os.write(file.getBytes());
            currentFile.deleteOnExit();
            return Optional.of(currentFile);   
        }
        catch (Exception e) {
            return Optional.empty();
        }
    }
}
