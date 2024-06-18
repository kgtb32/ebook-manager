package com.github.kgtb32.ebook_manager_backend.models.exceptions;

public class PDFLoadException extends RuntimeException{
    public PDFLoadException(String message){
        super(message);
    }
}
