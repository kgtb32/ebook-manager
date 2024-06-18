package com.github.kgtb32.ebook_manager_backend.models.out;

import com.github.kgtb32.ebook_manager_backend.models.interfaces.PDFLoad;

public record PDFInformation(
    boolean isValid,
    int maxPages
) implements PDFLoad {}
