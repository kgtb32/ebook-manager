package com.github.kgtb32.ebook_manager_backend.models.out;

import com.github.kgtb32.ebook_manager_backend.models.interfaces.PDFLoad;

public record PDFLoadFailed(
    String message
) implements PDFLoad {}
